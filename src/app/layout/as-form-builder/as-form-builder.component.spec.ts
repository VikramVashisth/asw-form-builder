import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsFormBuilderComponent } from './as-form-builder.component';

describe('AsFormBuilderComponent', () => {
  let component: AsFormBuilderComponent;
  let fixture: ComponentFixture<AsFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
