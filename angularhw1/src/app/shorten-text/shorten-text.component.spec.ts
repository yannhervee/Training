import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenTextComponent } from './shorten-text.component';

describe('ShortenTextComponent', () => {
  let component: ShortenTextComponent;
  let fixture: ComponentFixture<ShortenTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortenTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
