import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-recent-posts',
  imports: [],
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
