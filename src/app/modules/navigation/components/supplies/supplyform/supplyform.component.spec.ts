import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyformComponent } from './supplyform.component';

describe('SupplyformComponent', () => {
  let component: SupplyformComponent;
  let fixture: ComponentFixture<SupplyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
