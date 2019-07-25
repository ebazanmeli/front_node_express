import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenciasRecomendadasComponent } from './list-agencias-recomendadas.component';

describe('ListAgenciasRecomendadasComponent', () => {
  let component: ListAgenciasRecomendadasComponent;
  let fixture: ComponentFixture<ListAgenciasRecomendadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAgenciasRecomendadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgenciasRecomendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
