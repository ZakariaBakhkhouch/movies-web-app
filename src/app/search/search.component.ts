import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {NgStyle} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    HttpClientModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{

  searchTitle = "text-warning";

  currentStyles: Record<string, string> = {};
  isCentered = true;

  public movieTitle = '';
  public id = '';

  searchResult: any[] = [];

  constructor(private _activeRouter: ActivatedRoute, private _httpClient: HttpClient){
    _activeRouter.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    });

    this.currentStyles = {
      'text-align': this.isCentered ? 'center' : '',
    };
  }

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(){
    this._httpClient.get<any[]>('assets/data/movieSearch.json')
    .subscribe((data:any[]) => {
      this.searchResult = data;
    });
  }
}
