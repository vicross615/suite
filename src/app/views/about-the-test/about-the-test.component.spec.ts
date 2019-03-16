import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheTestComponent } from './about-the-test.component';

describe('AboutTheTestComponent', () => {
  let component: AboutTheTestComponent;
  let fixture: ComponentFixture<AboutTheTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
