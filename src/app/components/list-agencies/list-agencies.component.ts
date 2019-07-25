import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AgencieService } from '../../servicios/agencie.service';
import { SiteService } from '../../servicios/site.service';
import { Site } from 'src/app/models/site';
import { PaymentMethodService } from 'src/app/servicios/paymentmethod.service';
import { PaymentMethod } from 'src/app/models/payment_method';
import { Agencie } from 'src/app/models/agencie';
import { Search } from 'src/app/models/search';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.css']
})
export class ListAgenciesComponent implements OnInit {

  public formGroup: FormGroup;

  errorMessage;
  sites: Site[];
  agencies: Agencie[];
  agencie: Agencie;
  search: Search;
  paymentmethods: PaymentMethod[];
  infoMessage;

  constructor(
    private agencieService: AgencieService, 
    private siteService: SiteService,
    private paymentmethod: PaymentMethodService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    this.getSites();
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      site: null,
      latitud: null,
      longitud: null,
      radio: null,
      paymentmethod: null,
      limit: null,
      offset: null,
      orderby: null,
      criterio: null
    });
  }

  getSites() {
    this.siteService.getSites().subscribe(
      result => {
          this.sites = result;
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    );
  }

  getPaymentMethods(site: string) {
    this.paymentmethod.getPaymentMethods(site).subscribe(
      result => {
         this.paymentmethods = result;
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    );
  }

  getAgencies() {
    let search = this.formGroup.value;
    console.log(this.formGroup);
    if(((search.longitud != undefined || search.longitud != null) 
          && (search.latitud === undefined || search.latitud === null)) 
          || ((search.radio != undefined || search.radio != null) 
          && (search.latitud === undefined || search.latitud === null))) {
      alert("Para busqueda geográfica la LATITUD, LONGITUD y RADIO son obligatorios.");
    } else {
      this.agencieService.getAgencies(this.formGroup).subscribe(
        result => {
          if(result.results) {
            this.agencies = result.results;
          } else {
            alert("No hay resultados para la busqueda realizada.");
          }
        },
        error => {
          this.errorMessage = <any>error;
  
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
          }
        }
      );
    }
  }

  saveAgencie(id:number) {
    this.agencieService.getAgencie(id).subscribe(
      result => {
        let agencia = result.agencia;
        this.agencie = new Agencie(agencia.id, agencia.description, agencia.address.address_line, agencia.address.city, agencia.address.state, agencia.address.country, agencia.agency_code);
        this.agencieService.saveAgencie(this.agencie).subscribe(
          result => {
            alert(result.message);
          },
          error => {
            this.errorMessage = <any>error;
  
            if (this.errorMessage != null) {
              console.log(this.errorMessage);
            }
          }
        );
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    );
  }

  removeAgencie(id: number) {
    this.agencieService.removeAgencie(id).subscribe(
      result => {
        alert(result.message);
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    );
  }


}
