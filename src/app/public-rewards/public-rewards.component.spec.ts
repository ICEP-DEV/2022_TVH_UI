import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRewardsComponent } from './public-rewards.component';

describe('PublicRewardsComponent', () => {
  let component: PublicRewardsComponent;
  let fixture: ComponentFixture<PublicRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
