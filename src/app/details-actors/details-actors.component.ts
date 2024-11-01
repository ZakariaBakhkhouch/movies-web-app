import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit{

  movieActors: any[] = [];

  constructor(private _httpClient: HttpClient)
  {
  }

  ngOnInit(): void {
    this.GetMovieActors();
  }

  GetMovieActors() {
    this._httpClient.get<any[]>('assets/data/movieActors.json')
    .subscribe((data:any) => {
      this.movieActors = data;
    })
  }


}
