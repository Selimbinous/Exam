import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  posts : Post [] = []
  @Input () post;
  post2 : Post
  id;
  mycategories =["Sport", "Technologies",
    "Économie", "Société", "Culture"]
  titre2;categorie2;description2;date2;
  constructor(public servive:PostService){}
  ngOnInit() {
    this.servive.getposts()
        .subscribe(data => this.posts = data)
  }
  
  loaddata(post){
    this.id = post.id
    this.titre2 = post.titre
    this.description2 = post.description
    this.categorie2 = post.categorie
    this.date2 = post.date


  }
  setchanges(){
    this.post2= {"titre": this.titre2,
    "description": this.description2,
    "categorie" : this.categorie2,
    "date" : this.date2,
    "id" : this.id}
    this.servive.update(this.id,this.post2).subscribe()
    window.location.reload();
  }
}
