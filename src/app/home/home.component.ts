import { INews } from './../classes/INews';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { FormBuilder } from '@angular/forms'
import { Observable } from 'rxjs';

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
  news?:INews
  constructor(private newsService : NewsService,  private fb : FormBuilder){}
  
  ngOnInit(): void {
    this.fetchData()
    
  }
  fetchData() : void{
     this.newsService.getArticles(this.searchValue).subscribe((articles : INews) => {
      this.news = articles
    })
  }
  onFormSubmit() : void{
    this.searchValue = this.searchForm.value.searchValue ?? ''
    this.fetchData()
  }
  toConsole(){
    console.log(this.news)
  }
}
