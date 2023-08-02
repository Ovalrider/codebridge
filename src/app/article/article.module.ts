import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article.component';
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from  '@angular/material/dialog'
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { HighlightPipePipe } from '../pipes/highlight-pipe.pipe';


@NgModule({
    imports:[MatCardModule, MatButtonModule,MatProgressBarModule, CommonModule, MatIconModule, MatDialogModule, DialogContentComponent],
    exports:[ArticleComponent],
    declarations:[ArticleComponent, HighlightPipePipe],
})

export default class ArticleModule{}