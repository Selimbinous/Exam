import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  mycategories =["Sport", "Technologies",
    "Économie", "Société", "Culture"]
  constructor(public _posts : PostService, public _Route : Router){}  
  myform = new FormGroup({
    titre : new FormControl('',[Validators.required, Validators.minLength(5)]),
    description : new FormControl('',[Validators.required,Validators.minLength(10)]),
    categorie : new FormControl('',[Validators.required]),
    date : new FormControl('',[Validators.required])
  })
  get titre(){
    return this.myform.get('titre')
  }
  get description(){
    return this.myform.get('description')
  }
  get categorie(){
    return this.myform.get('categorie')
  }
  get date(){
    return this.myform.get('date')
  }
  onSubmit(form){
    this._posts.addpost(form).subscribe(Response => {
      console.log('success', Response)
      this._Route.navigateByUrl('/posts/home')
    },
    Error => console.log(Error)
    )
  }

}
