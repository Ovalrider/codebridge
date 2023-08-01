import { Injectable } from '@angular/core';
import { INews } from '../classes/INews';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

const NUM_OF_ARTICLES_IN_REQUEST = 18
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient) { }

  getArticles(searchValue : string) : Observable<INews>{
    return this.http.get<INews>(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${NUM_OF_ARTICLES_IN_REQUEST}&search=${searchValue}`)
  }
  
}
