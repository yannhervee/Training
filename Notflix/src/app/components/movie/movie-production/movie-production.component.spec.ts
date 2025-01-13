import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieProductionComponent } from './movie-production.component';

describe('MovieProductionComponent', () => {
  let component: MovieProductionComponent;
  let fixture: ComponentFixture<MovieProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
