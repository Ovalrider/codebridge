import { Component, Input } from '@angular/core';
import { IArticle } from '../classes/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() article!: IArticle
}
