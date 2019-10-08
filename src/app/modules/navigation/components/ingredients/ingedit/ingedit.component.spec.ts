import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngeditComponent } from './ingedit.component';

describe('IngeditComponent', () => {
  let component: IngeditComponent;
  let fixture: ComponentFixture<IngeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
