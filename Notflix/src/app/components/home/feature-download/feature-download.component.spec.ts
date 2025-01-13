import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDownloadComponent } from './feature-download.component';

describe('FeatureDownloadComponent', () => {
  let component: FeatureDownloadComponent;
  let fixture: ComponentFixture<FeatureDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
