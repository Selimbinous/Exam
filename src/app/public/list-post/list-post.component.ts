import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts : Post [] = []
  constructor(public _service : PostService){}
  ngOnInit(){
    this._service.getposts().subscribe(data => this.posts = data)

  }
  supprimer(post, i){
    this.posts.splice(i,1);
    this._service.deletepost(post)
        .subscribe(post =>
          this._service.getposts())
        }  
       
  }
  

