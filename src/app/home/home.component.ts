import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderDirective } from '../directives/header.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    HeaderDirective,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public movieId = 1;

  isVisible = false;

  topMovies: any[] = []

  fanFavouritesMovies: any[] = []

  constructor(private _httpClient: HttpClient)
  {
  }

  ngOnInit(): void {
    this.GetFanFavoriteMovies();
    this.GetTopMovies();
  }

  GetFanFavoriteMovies() {
    this._httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
    .subscribe({
      next: (data:any[]) => {
        this.fanFavouritesMovies = data;
      },
      error: (error) => {
        console.log("An error has occured: ",error);
      },
      complete: () => {
        console.log("GetFanFavoriteMovies Request is completed.");
      }
    });
  }
  
  GetTopMovies() {
    this._httpClient.get<any[]>('assets/data/topMovies.json')
    .subscribe({
      next: (data:any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log("An error has occured: ",error);
      },
      complete: () => {
        console.log("GetTopMovies Request is completed.");
      }
    });
  }
}



