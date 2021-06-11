import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpNoteService } from '../shared/services/http-note.service';
import { Type } from '../shared/interfaces/type.interface';
@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private httpNoteservice: HttpNoteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  id?: number | null = null
  type: Type;
  TypeForm!: FormGroup;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
      this.getdata();
    })
  }

  async getdata() {

    const typecontrols = {
      name: [null, [Validators.required, Validators.maxLength(100)]]
    }
    this.TypeForm = this.fb.group(typecontrols);

    if (this.id) {
      try {
        this.type = await this.httpNoteservice.getType(this.id);
      } catch (error) {
        console.log(error);
      }
      this.TypeForm.patchValue(this.type);
    } else {
      this.TypeForm.reset();
    }
  }

  async onAddType() {

    if (this.id) {
      const type: Type = this.TypeForm.value;
      console.log(type);
      try {
        await this.httpNoteservice.updateType(this.id, type);
        await this.getdata();
      } catch (err) {
        console.log(err);
        return;
      }
    } else {
      const type: Type = this.TypeForm.value;
      try {
        const typeResult = await this.httpNoteservice.postType(type);
        this.router.navigate([this.router.url, typeResult.id]);
        console.log(this.router.url);
      } catch (err) {
        console.log(err);
      }
    }


  }

  async delete() {
    try {
      await this.httpNoteservice.deleteType(this.id);
      this.router.navigate(['types']);
    } catch (error) {
      console.log(error);
      return;
    }
  }

}
