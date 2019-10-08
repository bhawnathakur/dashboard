import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmealsingComponent } from './addmealsing.component';

describe('AddmealsingComponent', () => {
  let component: AddmealsingComponent;
  let fixture: ComponentFixture<AddmealsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmealsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmealsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
