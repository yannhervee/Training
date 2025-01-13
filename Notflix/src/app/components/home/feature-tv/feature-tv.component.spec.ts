import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTvComponent } from './feature-tv.component';

describe('FeatureTvComponent', () => {
  let component: FeatureTvComponent;
  let fixture: ComponentFixture<FeatureTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
