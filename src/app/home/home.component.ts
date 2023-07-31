import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { INews } from '../classes/INews';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm = this.fb.nonNullable.group({
    searchValue : ''
  })
  searchValue : string = ''
  news?: INews
  dataLoaded : boolean = false
  constructor(private newsService : NewsService,  private fb : FormBuilder){}
  
  ngOnInit(): void {
    this.fetchData()
    setTimeout(()=>{
      console.log(this.news?.results)
    }, 3000)
    
  }
  fetchData() : void{
    this.newsService.getArticles(this.searchValue).subscribe((articles) => {
      this.news = articles
      this.dataLoaded = true
    })
  }
  onFormSubmit() : void{
    this.searchValue = this.searchForm.value.searchValue ?? ''
    this.fetchData()
    setTimeout(()=>{
      console.log(this.news?.results)
    }, 3000)
  }
}
