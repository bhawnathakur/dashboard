import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsformComponent } from './mealsform.component';

describe('MealsformComponent', () => {
  let component: MealsformComponent;
  let fixture: ComponentFixture<MealsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
