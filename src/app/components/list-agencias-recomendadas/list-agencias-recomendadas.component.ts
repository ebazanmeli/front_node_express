import { Component, OnInit } from '@angular/core';
import { AgencieService } from 'src/app/servicios/agencie.service';
import { Agencie } from 'src/app/models/agencie';

@Component({
  selector: 'app-list-agencias-recomendadas',
  templateUrl: './list-agencias-recomendadas.component.html',
  styleUrls: ['./list-agencias-recomendadas.component.css']
})
export class ListAgenciasRecomendadasComponent implements OnInit {

  agencies: Agencie[];
  errorMessage;

  constructor(private agencieService: AgencieService) { }

  ngOnInit() {
    this.getAgencies();
  }

  getAgencies() {
    this.agencieService.getAgenciesRecomended().subscribe(
      result => {
        this.agencies = result;
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
        console.log(result.message);
        this.getAgencies();
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
