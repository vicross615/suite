import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFooterComponent } from './cube-footer.component';

describe('CubeFooterComponent', () => {
  let component: CubeFooterComponent;
  let fixture: ComponentFixture<CubeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
