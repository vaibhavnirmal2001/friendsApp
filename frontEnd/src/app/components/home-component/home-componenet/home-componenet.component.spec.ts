import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponenetComponent } from './home-componenet.component';

describe('HomeComponenetComponent', () => {
  let component: HomeComponenetComponent;
  let fixture: ComponentFixture<HomeComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
