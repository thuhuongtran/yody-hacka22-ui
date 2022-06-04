import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDesignDecorComponent } from './choose-design-decor.component';

describe('ChooseDesignDecorComponent', () => {
  let component: ChooseDesignDecorComponent;
  let fixture: ComponentFixture<ChooseDesignDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDesignDecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDesignDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
