import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WailingTableComponent } from './wailing-table.component';

describe('WailingTableComponent', () => {
  let component: WailingTableComponent;
  let fixture: ComponentFixture<WailingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WailingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WailingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
