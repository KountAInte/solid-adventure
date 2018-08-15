import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularwayComponent } from './angularway.component';

describe('AngularwayComponent', () => {
  let component: AngularwayComponent;
  let fixture: ComponentFixture<AngularwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
