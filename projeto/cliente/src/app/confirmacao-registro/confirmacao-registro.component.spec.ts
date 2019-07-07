import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoRegistroComponent } from './confirmacao-registro.component';

describe('ConfirmacaoRegistroComponent', () => {
  let component: ConfirmacaoRegistroComponent;
  let fixture: ComponentFixture<ConfirmacaoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
