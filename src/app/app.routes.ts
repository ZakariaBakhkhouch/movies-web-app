import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },                              // default route 
    { path: 'home', component: HomeComponent },                          // home page
    { path: 'feedback', component: FeedbackComponent },                  // feedback page
    { path: 'search/:movieTitle', component: SearchComponent },                      // search page
    { path: 'details/:id', component: DetailsComponent },                // details page
    { path: 'details/actors/:id', component: DetailsActorsComponent },   // actors details page
    { path: 'details/movies/:id', component: DetailsMoviesComponent },   // details page
    { path: 'details/reviews/:id', component: DetailsReviewsComponent }, // details page
    { path: '**', component: NotFoundComponent },                        // not found page 404

];
