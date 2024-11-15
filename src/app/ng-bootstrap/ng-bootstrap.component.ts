import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAlertCloseableComponent } from './ngbd-alert-closeable.component';

describe('NgbdAlertCloseableComponent', () => {
  let component: NgbdAlertCloseableComponent;
  let fixture: ComponentFixture<NgbdAlertCloseableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbdAlertCloseableComponent]
    });
    fixture = TestBed.createComponent(NgbdAlertCloseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
