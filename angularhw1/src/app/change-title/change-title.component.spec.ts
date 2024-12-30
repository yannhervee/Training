import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleComponent } from './change-title.component';
import { ChangeTitleItemComponent } from '../change-title-item/change-title-item.component';

describe('ChangeTitleComponent', () => {
  let component: ChangeTitleComponent;
  let fixture: ComponentFixture<ChangeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
