import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Model/articles/Article';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article | undefined;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.articleService.getArticleById(params['id']).subscribe(
          (data) => {
            if(data.length > 0) {
              this.article=data[0]
            }
          }
        )
      }
    )
  }
}
