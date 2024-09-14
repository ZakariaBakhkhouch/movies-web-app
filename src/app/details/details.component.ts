import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    DetailsReviewsComponent, 
    DetailsMoviesComponent, 
    DetailsActorsComponent,
    HttpClientModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit{
  
  movieId = '';
  
  stars = [];

  genres = [];

  directors = [];

  constructor(private _httpClient: HttpClient, _activeRouter: ActivatedRoute){
    _activeRouter.params.subscribe((p) => {
      this.movieId = p["id"];
    })
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this._httpClient.get('assets/data/movieSummary.json')
    .subscribe((data:any) => {
      console.log(data.stars);
      this.stars = data.stars;
      this.genres = data.genres;
      this.directors = data.directors;
    })
  }

}
