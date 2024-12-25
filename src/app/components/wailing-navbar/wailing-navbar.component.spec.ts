import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WailingNavbarComponent } from './wailing-navbar.component';

describe('WailingNavbarComponent', () => {
  let component: WailingNavbarComponent;
  let fixture: ComponentFixture<WailingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WailingNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WailingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
