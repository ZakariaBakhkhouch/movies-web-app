import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    DetailsComponent,
    DetailsMoviesComponent,
    NotAuthorizedComponent,
    DetailsReviewsComponent,
    SearchComponent,
    FeedbackComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies-web-app';

  constructor() { }

  ngOnInit() :void {
    console.log("ngOnInit called");
  }

  ngAfterContentInit() :void {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() :void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() :void {
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked() :void {
    console.log("ngAfterViewChecked called");
  }

  ngOnChanges()
  {
    console.log("ngOnChanges called");
  }

}
