import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit{

  similarMovies: any[] = [];

  constructor(private _httpClient: HttpClient)
  {
  }

  ngOnInit(): void {
    this.GetSimilarMovies();
  }

  GetSimilarMovies() {
    this._httpClient.get<any[]>('assets/data/similarMovies.json')
    .subscribe((data:any) => {
       this.similarMovies = data;
    })
  }

  
}