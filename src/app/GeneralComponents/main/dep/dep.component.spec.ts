import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepComponent } from './dep.component';

describe('DepComponent', () => {
  let component: DepComponent;
  let fixture: ComponentFixture<DepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepComponent]
    });
    fixture = TestBed.createComponent(DepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
