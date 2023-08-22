import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl  =  'http://localhost:3000/Posts'
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  constructor(private http: HttpClient) { }
  getposts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  addpost(post: Post): Observable<any> {
     return this.http.post(this.postsUrl, post, this.httpOptions)
  }
  deletepost( post :  Post | number): Observable<number>{ 
    const id = typeof post === 'number' ? post : post?.id;
     const url=this.postsUrl+'/'+id; 
     return this.http.delete<number>(url)
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.postsUrl}/${id}`, data)
    
  }
}
