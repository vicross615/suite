import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeHeaderComponent } from './cube-header.component';

describe('CubeHeaderComponent', () => {
  let component: CubeHeaderComponent;
  let fixture: ComponentFixture<CubeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
