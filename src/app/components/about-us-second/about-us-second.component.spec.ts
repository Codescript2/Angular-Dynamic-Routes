import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSecondComponent } from './about-us-second.component';

describe('AboutUsSecondComponent', () => {
  let component: AboutUsSecondComponent;
  let fixture: ComponentFixture<AboutUsSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
