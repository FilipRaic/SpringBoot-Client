import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwaredetailComponent } from './hardwaredetail.component';

describe('HardwaredetailComponent', () => {
  let component: HardwaredetailComponent;
  let fixture: ComponentFixture<HardwaredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwaredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwaredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
