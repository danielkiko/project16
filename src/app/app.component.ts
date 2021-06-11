import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NoteFormComponent } from './note-form/note-form.component';
import { Note } from './shared/interfaces/note.interface';
import { Type } from './shared/interfaces/type.interface';
import { HttpNoteService } from './shared/services/http-note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project15';
  // notes!: Note[];
  // types!: Type[];
  // // typename:string;
  // // typeindex:number;
  // NoteForm!: FormGroup;
  // constructor(private httpNoteService: HttpNoteService) {
  // }


  // ngOnInit(): void {
  //   this.getData();
  // }


  // async onAddNote(e: Note) {
  //   try {
  //     console.log(e);
  //     await this.httpNoteService.postNote(e);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   this.getData();
  // }

  // // onSelectType(index:number)
  // // {
  // //   this.typeindex=this.types.findIndex(x=>x.id == index);
  // //   this.typename = this.types[this.typeindex].name
  // //   console.log(this.types[this.typeindex].name)
  // // }

  // async onAddType(e:Type) {
  //   try {
  //     await this.httpNoteService.postType(e);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   this.getData();
  // }

  // async onDeleteNote(index: number) {
  //   try {
  //     await this.httpNoteService.deleteNote(index);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   this.getData();
  // }
  // async onDeleteType(index: number) {
  //   try {
  //     await this.httpNoteService.deleteType(index);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   this.getData();
  // }
  // async onEditNote(index: number, note: Note) {
  //   try {
  //     await this.httpNoteService.updateNote(index, note);
  //     this.getData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async getData() {
  //   try {
  //     this.notes = await this.httpNoteService.getNotes();
  //     this.types = await this.httpNoteService.getTypes();
      
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}

