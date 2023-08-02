import { Injectable } from '@angular/core';
import { INews } from '../classes/INews';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

const NUM_OF_ARTICLES_IN_REQUEST = 50
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient) { }

  getArticles(searchValue : string) : Observable<INews>{
    const keywordString = searchValue.toLowerCase().replace(/ /g, '%2C')
    return this.http.get<INews>(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${NUM_OF_ARTICLES_IN_REQUEST}&title_contains_one=${keywordString}&summary_contains_one=${keywordString}`)
  }
  
}
