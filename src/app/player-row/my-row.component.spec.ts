import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRowComponent } from './my-row.component';

describe('MyRowComponent', () => {
  let component: MyRowComponent;
  let fixture: ComponentFixture<MyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
