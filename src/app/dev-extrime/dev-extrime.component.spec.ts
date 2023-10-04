import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtrimeComponent } from './dev-extrime.component';

describe('DevExtrimeComponent', () => {
  let component: DevExtrimeComponent;
  let fixture: ComponentFixture<DevExtrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevExtrimeComponent]
    });
    fixture = TestBed.createComponent(DevExtrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
