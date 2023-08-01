import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../classes/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  @Input() article!: IArticle
  stringDate !: String 
  ngOnInit(){
    this.formatDate()
  }
  formatDate(): void{
    let date = new Date(this.article.published_at.slice(0,10))
    const timeFormat : Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString('en-US', timeFormat);
    const day = date.getDate();
    let dayFormatted;
    if (day % 10 === 1 && day !== 11) {
      dayFormatted = day + "st";
    } else if (day % 10 === 2 && day !== 12) {
      dayFormatted = day + "nd";
    } else if (day % 10 === 3 && day !== 13) {
      dayFormatted = day + "rd";
    } else {
      dayFormatted = day + "th";
    }

    this.stringDate =formattedDate.replace(String(day), dayFormatted);
  }
}
