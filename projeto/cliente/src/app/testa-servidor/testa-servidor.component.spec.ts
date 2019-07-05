import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaServidorComponent } from './testa-servidor.component';

describe('TestaServidorComponent', () => {
  let component: TestaServidorComponent;
  let fixture: ComponentFixture<TestaServidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestaServidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
