import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvbarComponent } from './avbar.component';

describe('AvbarComponent', () => {
  let component: AvbarComponent;
  let fixture: ComponentFixture<AvbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
