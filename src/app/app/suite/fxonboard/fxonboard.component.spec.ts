import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FXOnboardComponent } from './fxonboard.component';

describe('FXOnboardComponent', () => {
  let component: FXOnboardComponent;
  let fixture: ComponentFixture<FXOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FXOnboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FXOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
