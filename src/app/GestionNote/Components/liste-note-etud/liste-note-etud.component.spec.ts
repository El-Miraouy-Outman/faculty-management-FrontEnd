import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNoteEtudComponent } from './liste-note-etud.component';

describe('ListeNoteEtudComponent', () => {
  let component: ListeNoteEtudComponent;
  let fixture: ComponentFixture<ListeNoteEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNoteEtudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeNoteEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
