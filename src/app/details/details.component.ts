import { AfterViewInit, Component } from '@angular/core';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    DetailsReviewsComponent, 
    DetailsMoviesComponent, 
    DetailsActorsComponent ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent{
  
  movieId = '';
  
  constructor(_activeRouter: ActivatedRoute){
    _activeRouter.params.subscribe((p) => {
      this.movieId = p["id"];

      console.log(this.movieId);
    })
  }

}
