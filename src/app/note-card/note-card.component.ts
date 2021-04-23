import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/shared/interfaces/note.interface';

@Component({
  selector: 'app-card-form',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
    @Input() inputNote: Note;
  @Output() noteDelete = new EventEmitter<null>();
  @Output() noteEdit = new EventEmitter<Note>();
  status = false;

  constructor() { }
  
  ngOnInit(): void {
  }
  onDeleteNote() {
      this.noteDelete.emit();
  }
  onEditNote() {
      this.status = !this.status;
      this.noteEdit.emit();
  }

}