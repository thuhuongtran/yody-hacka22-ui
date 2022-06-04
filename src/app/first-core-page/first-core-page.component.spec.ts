import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCorePageComponent } from './first-core-page.component';

describe('FirstCorePageComponent', () => {
  let component: FirstCorePageComponent;
  let fixture: ComponentFixture<FirstCorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
