import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToShotComponent } from './to-shot.component';

describe('ToShotComponent', () => {
  let component: ToShotComponent;
  let fixture: ComponentFixture<ToShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
