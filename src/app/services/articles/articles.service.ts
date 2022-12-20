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

  getArticleById(id: number): Observable<Article[]>{
    const header = new HttpHeaders().set("apikey", environment.api.key)
    return this.httpClient.get<Article[]>(environment.api.url + '?id=eq.' + id, {headers: header})
  }

  addArticle(credentials: {name?: string | null | undefined, short_description?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined}): Observable<Article> {
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.post<Article>(environment.api.url, credentials, {headers: headers})
  }

  updateArticle(credentials: {id?:string | undefined | null, name?: string | null | undefined, short_description?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, created_at?: string | null | undefined}): Observable<Article> {
    const headers = new HttpHeaders().set('apikey', environment.api.key);
    return this.httpClient.patch<Article>(environment.api.url + '?id=eq.' + credentials.id, credentials, {headers: headers})
  }
}
