import { NgModule } from "@angular/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import { HomeComponent } from "./home.component";
import {MatInputModule} from "@angular/material/input"
import {MatCardModule} from "@angular/material/card"
import ArticleModule from "../article/article.module";
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatIconModule} from "@angular/material/icon"
import {ReactiveFormsModule} from "@angular/forms"
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[MatSlideToggleModule, MatInputModule,MatCardModule, ArticleModule,MatFormFieldModule,MatIconModule, ReactiveFormsModule, CommonModule],
    exports:[HomeComponent],
    declarations:[HomeComponent],
})

export default class HomeModule {}