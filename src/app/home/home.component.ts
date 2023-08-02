import { INews } from './../classes/INews';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { FormBuilder } from '@angular/forms'
import { IArticle } from '../classes/IArticle';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  NUM_OF_ARTICLES_PER_PAGE : number = 6
  searchForm = this.fb.nonNullable.group({
    searchValue : ''
  })
  searchValue : string = ''
  displayedNews : IArticle [] = []
  totalNews : IArticle[] = []
  totalFound : number = 0
  searchingFlag : boolean = false
  currentPos : number = 0
  buttonNavigationFlag : boolean = false
  constructor(private newsService : NewsService,  private fb : FormBuilder){}
  
  ngOnInit(): void {
    this.fetchData()
    
  }
  fetchData() : void {
     this.newsService.getArticles(this.searchValue).subscribe((articles : INews) => {
      let news = articles
      this.totalFound = news.count
      if (this.totalFound != 0){
        this.totalNews = news.results
        if (this.searchingFlag){
          this.filterArticles()
        }
        this.displayedNews = this.totalNews.slice(this.currentPos,this.NUM_OF_ARTICLES_PER_PAGE)
        this.buttonNavigationFlag = true
      }else{
        this.buttonNavigationFlag = false
      }
    })
  }
  onFormSubmit() : void {
    this.searchValue = this.searchForm.value.searchValue ?? ''
    this.searchValue == '' ? this.searchingFlag = false : this.searchingFlag = true
    this.currentPos = 0
    this.fetchData()
    
  }
  loadNextArticles(): void {
    this.currentPos += this.NUM_OF_ARTICLES_PER_PAGE
    this.displayedNews = this.totalNews.slice(this.currentPos,this.currentPos + this.NUM_OF_ARTICLES_PER_PAGE)
  }
  loadPrevArticles() : void {
    this.currentPos -= this.NUM_OF_ARTICLES_PER_PAGE
    this.displayedNews = this.totalNews.slice(this.currentPos,this.currentPos + this.NUM_OF_ARTICLES_PER_PAGE)
  }
  filterArticles() : void {
    if (!this.totalNews) return
    const searchValue = this.searchForm.value.searchValue?.toLowerCase() || '';
    const keywords = searchValue.trim().split(' ')
    if (!searchValue || keywords.length === 0) {
      this.fetchData();
    }else{
      this.totalNews.forEach((article) =>{
        article.priority = this.calculatePriority(article, keywords)
      })
      this.totalNews.sort((a, b) => b.priority - a.priority)
    }
    return
  }
  calculatePriority(article : IArticle, keywords : string[]) : number {
    let priority = 0;
    const title = article.title.toLowerCase();
    const summary = article.summary.toLowerCase();

    for (const keyword of keywords) {
      const titleOccurrences = title.split(keyword).length - 1;
      const summaryOccurrences = summary.split(keyword).length - 1;
      priority += (titleOccurrences * 2) + summaryOccurrences;
    }

    return priority;
  }
}
