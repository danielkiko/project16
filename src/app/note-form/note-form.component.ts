import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/shared/interfaces/note.interface';
import { HttpNoteService } from 'src/app/shared/services/http-note.service';
import { Type } from '../shared/interfaces/type.interface';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  NoteForm!: FormGroup;
  TypeForm!: FormGroup;
  @Output() noteAdd = new EventEmitter<Note>();
  
  status = false;

  constructor(private fb: FormBuilder, private httpNoteService: HttpNoteService) { }
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
    const typecontrols = {
      name: [null, [Validators.required, Validators.maxLength(100)]]
    }
    this.TypeForm = this.fb.group(typecontrols);
    this.NoteForm = this.fb.group(controls);
    
  }
  
    
  

}
