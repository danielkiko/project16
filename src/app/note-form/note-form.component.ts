import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/shared/interfaces/note.interface';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  NoteForm!: FormGroup;
  @Output() noteAdd = new EventEmitter<Note>();
  

  constructor(private fb: FormBuilder) { }
  onAddNote() {
    const note = this.NoteForm.value;
    this.noteAdd.emit(note);
    
  }
  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      maintext: [null, [Validators.required, Validators.maxLength(100)]],
      date: Date
    }
    this.NoteForm = this.fb.group(controls);
  }

}
