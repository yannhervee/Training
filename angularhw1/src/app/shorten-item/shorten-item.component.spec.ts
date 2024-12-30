import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenItemComponent } from './shorten-item.component';

describe('ShortenItemComponent', () => {
  let component: ShortenItemComponent;
  let fixture: ComponentFixture<ShortenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortenItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
