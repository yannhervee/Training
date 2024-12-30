import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleItemComponent } from './change-title-item.component';

describe('ChangeTitleItemComponent', () => {
  let component: ChangeTitleItemComponent;
  let fixture: ComponentFixture<ChangeTitleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTitleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTitleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
