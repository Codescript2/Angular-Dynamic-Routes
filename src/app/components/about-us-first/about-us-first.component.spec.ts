import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFirstComponent } from './about-us-first.component';

describe('AboutUsFirstComponent', () => {
  let component: AboutUsFirstComponent;
  let fixture: ComponentFixture<AboutUsFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
