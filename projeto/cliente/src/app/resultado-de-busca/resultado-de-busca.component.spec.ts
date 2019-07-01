import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDeBuscaComponent } from './resultado-de-busca.component';

describe('ResultadoDeBuscaComponent', () => {
  let component: ResultadoDeBuscaComponent;
  let fixture: ComponentFixture<ResultadoDeBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoDeBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
