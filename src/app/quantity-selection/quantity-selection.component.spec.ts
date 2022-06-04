import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelectionComponent } from './quantity-selection.component';

describe('QuantitySelectionComponent', () => {
  let component: QuantitySelectionComponent;
  let fixture: ComponentFixture<QuantitySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
