import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WailingFileSelectorComponent } from './wailing-file-selector.component';

describe('WailingFileSelectorComponent', () => {
  let component: WailingFileSelectorComponent;
  let fixture: ComponentFixture<WailingFileSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WailingFileSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WailingFileSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
