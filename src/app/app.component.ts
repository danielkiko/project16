import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Note } from './shared/interfaces/note.interface';
import { HttpNoteService } from './shared/services/http-note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project15';
  notes!: Note[];

  some: any[] = [
    { id: 1, value: 'position1F' },
    { id: 2, value: 'position2F' },
    { id: 3, value: 'position3F' },
    { id: 4, value: 'position4F' }
  ]
  NoteForm!: FormGroup;
  constructor(private httpNoteService: HttpNoteService) {



  }


  ngOnInit(): void {

    this.getData();
  }


  async onAddNote(e: Note) {
    try {
      await this.httpNoteService.postNote(e);
    } catch (err) {
      console.log(err);
    }
    this.getData();

  }

  async onDeleteNote(index: number) {
    try {
      await this.httpNoteService.deleteNote(index);
    } catch (err) {
      console.log(err);
    }
    this.getData();
  }
  async onEditNote(index: number, note: Note) {
    try {
      await this.httpNoteService.updateNote(index, note);
      this.getData();
    } catch (err) {
      console.log(err);
    }
  }

  async getData() {
    try {
      this.notes = await this.httpNoteService.getNotes()
    } catch (err) {
      console.log(err);
    }
  }
}

