import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCadastroUsuarioComponent } from './forms-cadastro-usuario.component';

describe('FormsCadastroUsuarioComponent', () => {
  let component: FormsCadastroUsuarioComponent;
  let fixture: ComponentFixture<FormsCadastroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCadastroUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
