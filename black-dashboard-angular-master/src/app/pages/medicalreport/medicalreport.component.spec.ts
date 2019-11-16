import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalreportComponent } from './medicalreport.component';

describe('MedicalreportComponent', () => {
  let component: MedicalreportComponent;
  let fixture: ComponentFixture<MedicalreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
