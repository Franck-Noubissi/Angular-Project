import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from 'src/Model/articles/Article';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Article[] = []

  constructor(private httpClient: HttpClient) { }

  getTable(): Observable<Article[]>{
    const header = new HttpHeaders().set("apikey", environment.api.key)
    return this.httpClient.get<Article[]>(environment.api.url, {headers: header})
  }

  getArticleById(): Observable<Article[]>{
    const header = new HttpHeaders().set("apikey", environment.api.key)
    return this.httpClient.get<Article[]>(environment.api.url + '?select=id', {headers: header})
  }
}
