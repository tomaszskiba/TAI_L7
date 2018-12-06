import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogItemTextComponent } from './blog-item-text/blog-item-text.component';
import { SummaryPipe } from './components/summary.pipe';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import {PostServiceService} from "./services/post-service.service";
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {
	path: '',
	component: HomeComponent
  },
  {
	path: 'contact',
	component: ContactComponent,
},
{
  path: 'quiz',
  component: QuizComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    SummaryPipe,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
