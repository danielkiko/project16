import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteFormComponent } from '../note-form/note-form.component';
import { Note } from '../shared/interfaces/note.interface';
import { Type } from '../shared/interfaces/type.interface';
import { HttpNoteService } from '../shared/services/http-note.service';




@Component({
  selector: 'app-card-form',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() inputNote!: Note;
  notes:Note[];
  status = false;
  type: Type;
  types: Type[];
  linkedtype!: Type;
  typename: string;
  id: number | null = null;
  note:Note;
  constructor(
     private httpNoteservice: HttpNoteService,
     private router: Router
     ) { }

  ngOnInit(): void {
    this.getData();
  }
  linkToItem(id?: number){
    if (id) {
      this.router.navigate([this.router.url,'note',id]);
    } else {
      this.router.navigate([this.router.url,'note']);
    }
  }
  async onDeleteNote() {
    // try {
    //   await this.httpNoteservice.deleteNote(note.id);
    // } catch (err) {
    //   console.log(err);
    // }
    this.getData();
  }
  
  async getData() {
    this.notes = await this.httpNoteservice.getNotes();
    this.types = await this.httpNoteservice.getTypes();
    this.gettypename(this.inputNote.type);
  }
  gettypename(index) {
    let typeindex = this.types.find(x => x.id == index);
    this.typename = typeindex.name;
  }

}