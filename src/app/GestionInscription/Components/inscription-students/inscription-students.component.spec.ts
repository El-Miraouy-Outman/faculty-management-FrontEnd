import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionStudentsComponent } from './inscription-students.component';

describe('InscriptionStudentsComponent', () => {
  let component: InscriptionStudentsComponent;
  let fixture: ComponentFixture<InscriptionStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
