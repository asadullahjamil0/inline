import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornestedComponent } from './fornested.component';

describe('FornestedComponent', () => {
  let component: FornestedComponent;
  let fixture: ComponentFixture<FornestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FornestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
