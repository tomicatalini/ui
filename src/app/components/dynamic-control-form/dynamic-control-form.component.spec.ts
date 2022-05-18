import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControlFormComponent } from './dynamic-control-form.component';

describe('DynamicControlFormComponent', () => {
  let component: DynamicControlFormComponent;
  let fixture: ComponentFixture<DynamicControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicControlFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
