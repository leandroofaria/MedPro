import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMedicoComponent } from './cadastrar-medico.component';

describe('CadastrarMedicoComponent', () => {
  let component: CadastrarMedicoComponent;
  let fixture: ComponentFixture<CadastrarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarMedicoComponent]
    });
    fixture = TestBed.createComponent(CadastrarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
