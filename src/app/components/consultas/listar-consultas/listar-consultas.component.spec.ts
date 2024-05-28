import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultasComponent } from './listar-consultas.component';

describe('ListarConsultasComponent', () => {
  let component: ListarConsultasComponent;
  let fixture: ComponentFixture<ListarConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarConsultasComponent]
    });
    fixture = TestBed.createComponent(ListarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
