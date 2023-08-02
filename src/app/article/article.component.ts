import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../classes/IArticle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  @Input() article!: IArticle
  @Input() searchKeywords! : string[]
  stringDate !: String 
  expanded : boolean = false

  constructor( private dialog : MatDialog){}

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

  openModal() : void{
    const dialogRef = this.dialog.open(DialogContentComponent,{
      panelClass: 'fullscreen-dialog',
      data:{
        image_url: this.article.image_url,
        title: this.article.title,
        summary: this.article.summary
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
