import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: 
  [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})

export class DetailsReviewsComponent implements OnInit{

  movieReviews: any[] = [];

  constructor(private _httpClient: HttpClient)
  {
  }

  ngOnInit(): void {
    this.GetMovieReviews();
  }

  GetMovieReviews() {
    this._httpClient.get<any[]>('assets/data/movieReviews.json')
    .subscribe((data:any[]) => {
      this.movieReviews = data;
    })
  }


}
