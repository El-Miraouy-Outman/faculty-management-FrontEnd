import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinscriptionComponent } from './listeinscription.component';

describe('ListeinscriptionComponent', () => {
  let component: ListeinscriptionComponent;
  let fixture: ComponentFixture<ListeinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
