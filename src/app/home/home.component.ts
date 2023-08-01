import { INews } from './../classes/INews';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { FormBuilder } from '@angular/forms'
import { IArticle } from '../classes/IArticle';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  NUM_OF_ARTICLES_PER_PAGE : number = 6
  searchForm = this.fb.nonNullable.group({
    searchValue : ''
  })
  searchValue : string = ''
  news?:INews
  displayedNews?:IArticle []
  searchingFlag : boolean = false
  currentPos : number = 0
  navigationFlag : boolean = false
  constructor(private newsService : NewsService,  private fb : FormBuilder){}
  
  ngOnInit(): void {
    this.fetchData()
    
  }
  fetchData() : void {
     this.newsService.getArticles(this.searchValue).subscribe((articles : INews) => {
      this.news = articles
      if (this.news.results.length != 0){
        this.displayedNews = this.news.results.slice(this.currentPos,this.NUM_OF_ARTICLES_PER_PAGE)
        this.navigationFlag = true
      }else{
        this.displayedNews = []
        this.navigationFlag = false
      }
      
    })
  }
  onFormSubmit() : void {
    this.searchValue = this.searchForm.value.searchValue ?? ''
    this.currentPos = 0
    this.fetchData()
    this.searchingFlag = true
  }
  loadNextArticles(): void {
    this.currentPos += this.NUM_OF_ARTICLES_PER_PAGE
    this.displayedNews = this.news?.results.slice(this.currentPos,this.currentPos + this.NUM_OF_ARTICLES_PER_PAGE)
  }
  loadPrevArticles() : void {
    this.currentPos -= this.NUM_OF_ARTICLES_PER_PAGE
    this.displayedNews = this.news?.results.slice(this.currentPos,this.currentPos + this.NUM_OF_ARTICLES_PER_PAGE)
  
  }
}
