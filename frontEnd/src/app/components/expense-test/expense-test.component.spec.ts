import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTestComponent } from './expense-test.component';

describe('ExpenseTestComponent', () => {
  let component: ExpenseTestComponent;
  let fixture: ComponentFixture<ExpenseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
