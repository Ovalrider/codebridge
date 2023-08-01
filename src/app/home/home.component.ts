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
          this.totalNews = this.filterArticles()
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
  filterArticles() : IArticle[] {
    if (!this.totalNews) return []
    const sortedArticles = this.totalNews.sort((a, b ) =>{
      const titleMatchA = a.title.toLowerCase().includes(this.searchValue.toLowerCase())
      const titleMatchB = b.title.toLowerCase().includes(this.searchValue.toLowerCase())
      const summaryMatchA = a.summary.toLowerCase().includes(this.searchValue.toLowerCase())
      const summaryMatchB = b.summary.toLowerCase().includes(this.searchValue.toLowerCase())

      if (titleMatchA && !titleMatchB) return -1
      if (!titleMatchA && titleMatchB) return 1
      if (summaryMatchA && !summaryMatchB) return -1
      if (!summaryMatchA && summaryMatchB) return 1 
      return 0
    })

    const highlightedArticles = sortedArticles.map((article) =>{
      return this.highlightSearchValue(article, this.searchValue)
    })

    return highlightedArticles
  }
  highlightSearchValue(article : IArticle, searchValue : string) : any {
    const titleMatchIndex = article.title.toLowerCase().indexOf(searchValue.toLowerCase())
    const summaryMatchIndex = article.summary.toLowerCase().indexOf(searchValue.toLowerCase())

    if (titleMatchIndex !==-1){
      const highlightedText = article.title.substring(0, titleMatchIndex) +
      `<span class="highlight">${article.title.substring(titleMatchIndex, titleMatchIndex + searchValue.length)}</span>` +
      article.title.substring(titleMatchIndex + searchValue.length)
      article.title = highlightedText
    }

    if (summaryMatchIndex !==-1){
      const highlightedText = article.summary.substring(0, summaryMatchIndex) +
      `<span class="highlight">${article.summary.substring(summaryMatchIndex, summaryMatchIndex + searchValue.length)}</span>` +
      article.summary.substring(summaryMatchIndex + searchValue.length)
      article.summary = highlightedText
    }

    return article
  }
}
