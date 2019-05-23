import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:any[];

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => { 
          console.log(response.json());
          this.posts = response.json();
        },
        error => {
          alert('An UnExpected error occured.');
          console.log('An UnExpected error occured.');
          console.log(error);
        });
  }

  constructor(private service : PostService ){
  }

  createPost(input:HTMLInputElement){
    let post= { title : input.value };
    input.value='';

    this.service.createPost(post)
      .subscribe(response => {
        post['id']=response.json().id;
        this.posts.splice(0,0,post);
        console.log(response.json());
        console.log(post);
      },
      (error : Response) => {
        if(error.status === 400) {
          //this.form.serErrors(error.json());
        }
        else{
          alert('An UnExpected error has occured while creating post.');
          console.log('An UnExpected error has occured while creating post.');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    //this.http.put(this.url, JSON.stringify(post));
    this.service.updatePost(post , JSON.stringify({ isRead : true }))
      .subscribe(
        response=> {
          console.log(response.json());
        },
        error => {
          alert('An UnExpected error has occured while updating post.');
          console.log('An UnExpected error has occured while updating post.');
          console.log(error);
        });
  }

  deletePost(post){
    this.service.deletePost( 345 )
      .subscribe(
        response => {
          console.log(JSON.stringify(response));
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        },
        (error : Response) => {
          if(error.status === 404){
            alert('This post has already been deleted.')
           }
           else{
            alert('An UnExpected error has occured while deleting post.');
            console.log('An UnExpected error has occured while deleting post.');
            console.log(error);
           }
        });
  }
}