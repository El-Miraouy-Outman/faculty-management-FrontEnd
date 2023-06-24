import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDComponent } from './mot-d.component';

describe('MotDComponent', () => {
  let component: MotDComponent;
  let fixture: ComponentFixture<MotDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotDComponent]
    });
    fixture = TestBed.createComponent(MotDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
