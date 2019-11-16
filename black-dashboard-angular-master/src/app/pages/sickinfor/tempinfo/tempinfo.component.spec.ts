import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempinfoComponent } from './tempinfo.component';

describe('TempinfoComponent', () => {
  let component: TempinfoComponent;
  let fixture: ComponentFixture<TempinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
