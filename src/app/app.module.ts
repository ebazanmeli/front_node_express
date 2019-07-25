import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAgenciesComponent } from './components/list-agencies/list-agencies.component';
import { ListAgenciasRecomendadasComponent } from './components/list-agencias-recomendadas/list-agencias-recomendadas.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {path: '', component: ListAgenciesComponent},
  {path: 'list-agencies', component: ListAgenciesComponent},
  {path: 'list-agencies-recomended.html', component: ListAgenciasRecomendadasComponent},
  {path: '**', component: AppComponent}
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    ListAgenciesComponent,
    ListAgenciasRecomendadasComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
