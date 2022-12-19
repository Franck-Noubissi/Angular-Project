import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Article } from 'src/Model/articles/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit{

  articles: Article[] = []

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.getTable().subscribe((data) => (this.articles=data))
  }

}
