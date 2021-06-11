import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../shared/interfaces/type.interface';
import { HttpNoteService } from '../shared/services/http-note.service';
@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  constructor(private httpNoteservice: HttpNoteService,
    private router: Router) { }
  types: Type[];

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    this.types = await this.httpNoteservice.getTypes();
  }

  
  linkToItem(id?: number)
  {
    if (id) {
      this.router.navigate([this.router.url, "type", id]);
    } else {
      this.router.navigate([this.router.url, "type"]);
    }

  }
}


