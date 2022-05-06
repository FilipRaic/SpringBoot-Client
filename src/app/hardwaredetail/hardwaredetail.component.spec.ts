import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareDetailComponent } from './hardwaredetail.component';

describe('HardwaredetailComponent', () => {
  let component: HardwareDetailComponent;
  let fixture: ComponentFixture<HardwareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
