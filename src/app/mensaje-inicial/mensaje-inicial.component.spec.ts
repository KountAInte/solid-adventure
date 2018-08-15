import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeInicialComponent } from './mensaje-inicial.component';

describe('MensajeInicialComponent', () => {
  let component: MensajeInicialComponent;
  let fixture: ComponentFixture<MensajeInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
