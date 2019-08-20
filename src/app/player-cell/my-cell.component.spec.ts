import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellComponent } from './my-cell.component';

describe('MyCellComponent', () => {
  let component: MyCellComponent;
  let fixture: ComponentFixture<MyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
