import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{

  public movieTitle = '';

  constructor(_activeRouter: ActivatedRoute){
    _activeRouter.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];

      console.log(this.movieTitle);
    })
  }

}
