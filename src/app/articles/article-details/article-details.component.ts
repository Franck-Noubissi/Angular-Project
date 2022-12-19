import { Component } from '@angular/core';
import { Article } from 'src/Model/articles/Article';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  article: Article | undefined;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
    )
  }
}
