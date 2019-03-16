import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeDashboardComponent } from './cube-dashboard.component';

describe('CubeDashboardComponent', () => {
  let component: CubeDashboardComponent;
  let fixture: ComponentFixture<CubeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
