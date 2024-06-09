import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConsultationComponent } from './schedule-consultation.component';

describe('ScheduleConsultationComponent', () => {
  let component: ScheduleConsultationComponent;
  let fixture: ComponentFixture<ScheduleConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleConsultationComponent]
    });
    fixture = TestBed.createComponent(ScheduleConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
