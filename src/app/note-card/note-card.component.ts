import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../shared/interfaces/note.interface';




@Component({
  selector: 'app-card-form',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() inputNote!: Note;
  @Output() noteDelete = new EventEmitter<number>();
  @Output() noteEdit = new EventEmitter<Note>();
  status = false;
  NoteForm!: FormGroup
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      maintext: [null, [Validators.required, Validators.maxLength(100)]],
      date: Date
    }
    this.NoteForm = this.fb.group(controls);

    if (this.inputNote) {
      this.NoteForm.patchValue(this.inputNote);
    }
  }
  onDeleteNote() {
      this.noteDelete.emit(this.inputNote.id);
  }
  onEditNote() {
    const note = this.NoteForm.value;
      this.status = !this.status;
      if (this.status == false)
      this.noteEdit.emit(note);
  }

}