import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../shared/interfaces/theme';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList {
  themes: Theme[] = [];

  constructor(private apiService: ApiService){};

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes.sort(
      (a, b) => b.subscribers.length - a.subscribers.length
      )
    })
  }
}
