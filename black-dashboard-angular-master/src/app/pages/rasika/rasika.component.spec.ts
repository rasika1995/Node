import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasikaComponent } from './rasika.component';

describe('RasikaComponent', () => {
  let component: RasikaComponent;
  let fixture: ComponentFixture<RasikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
