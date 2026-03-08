import { Component, Input } from '@angular/core';
import { RecentPosts } from '../../../features/home/recent-posts/recent-posts';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItem {
  @Input({ required: true }) post!: RecentPosts;
}
