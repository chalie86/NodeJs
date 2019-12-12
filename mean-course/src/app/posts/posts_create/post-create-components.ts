import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './posts-create-component.html',
    styleUrls: ['./post-create-components.css']
})
export class PostCreateComponent{
    
    enteredValue = '';
    newPost = 'NO CONTENT';
    onAddPost(){
        //console.dir(postInput)
        this.newPost = this.enteredValue;
    }

}