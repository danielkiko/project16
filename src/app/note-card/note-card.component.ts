import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../shared/interfaces/note.interface';
import { Type } from '../shared/interfaces/type.interface';
import { HttpNoteService } from '../shared/services/http-note.service';




@Component({
  selector: 'app-card-form',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  notes:Note[];
  type: Type;
  types: Type[];
  linkedtype!: Type;
  typename: string;
  
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
  
  
  async getData() {
    this.notes = await this.httpNoteservice.getNotes();
    console.log(this.notes);
    this.types = await this.httpNoteservice.getTypes();
    
    
  }
  gettypename(index: number) {
    let typeindex = this.types?.find(x => x.id == index);
    return (typeindex?.name);
  }

}