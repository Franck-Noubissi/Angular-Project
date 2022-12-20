import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Model/articles/Article';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit{

  articles: Article[] = []

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.getTable().subscribe((data) => (this.articles=data))
  }

}
