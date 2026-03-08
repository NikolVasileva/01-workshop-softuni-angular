import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post';
import { ApiService } from '../../../core/services/api.service';
import { PostItem } from '../../../shared/components/post-item/post-item';

@Component({
  selector: 'app-recent-posts',
  imports: [PostItem],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPosts implements OnInit{
  posts: Post[] = [];

  constructor(private apiService: ApiService){};

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

}
