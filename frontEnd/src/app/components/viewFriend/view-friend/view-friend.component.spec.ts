import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFriendComponent } from './view-friend.component';

describe('ViewFriendComponent', () => {
  let component: ViewFriendComponent;
  let fixture: ComponentFixture<ViewFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
