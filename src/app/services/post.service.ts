import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {}

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post , updateContent : string ){
    return this.http.patch(this.url + '/' + post.id , updateContent);
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id );
  }
}
