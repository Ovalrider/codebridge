import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article.component';
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';


@NgModule({
    imports:[MatCardModule, MatButtonModule,MatProgressBarModule, NgxSkeletonLoaderModule, CommonModule],
    exports:[ArticleComponent],
    declarations:[ArticleComponent],
})

export default class ArticleModule{}