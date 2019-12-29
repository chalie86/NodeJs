import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './posts-create-component.html',
    styleUrls: ['./post-create-components.css']
})
export class PostCreateComponent{
    
    enteredValue = '';
    enteredTitle = "";
    enteredContent = "";

constructor(public postsService: PostsService){}

    newPost = 'NO CONTENT';
    onAddPost(form: NgForm){
        if(form.invalid){
            return;
        }
        //console.dir(postInput)
        this.postsService.addPost(form.value.title,form.value.content);
        form.resetForm();
    }

}