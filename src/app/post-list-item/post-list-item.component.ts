import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})


export class PostListItemComponent {

  @Input() post: object; 

  addloveIts(post) {
    this.post.loveIts++;
  }

  removeloveIts(post) {
    this.post.loveIts--;
  }

  constructor() { }
}
