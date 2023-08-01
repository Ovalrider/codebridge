import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article.component';
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports:[MatCardModule, MatButtonModule,MatProgressBarModule, CommonModule, MatIconModule],
    exports:[ArticleComponent],
    declarations:[ArticleComponent],
})

export default class ArticleModule{}