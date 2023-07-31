import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../classes/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  @Input() article!: IArticle
  date !: Date 
  ngOnInit(){
    this.formatDate()
  
  }
  formatDate(): void{
    let stringDate = this.article.published_at.slice(0,10)
    this.date = new Date(stringDate)
  }
}
