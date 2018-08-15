import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashMapComponent } from './crash-map.component';

describe('CrashMapComponent', () => {
  let component: CrashMapComponent;
  let fixture: ComponentFixture<CrashMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
