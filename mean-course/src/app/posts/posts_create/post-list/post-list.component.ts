import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'First Post',content:'This is the first post\'s content'},
  //   {title: 'second Post',content:'This is the second post\'s content'},
  //   {title: 'third Post',content:'This is the third post\'s content'},
  //   {title: 'Fourth Post',content:'This is the fourth post\'s content'}
  // ]

  @Input() posts = []
  constructor() { }

  ngOnInit() {
    
  }

}
