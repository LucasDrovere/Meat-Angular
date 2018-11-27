import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(private service: RestaurantsService, 
              private router: ActivatedRoute) { }

  reviews: Observable<any>

  ngOnInit() {
    this.reviews = this.service
    .reviewsOfRestaurant(this.router.parent.snapshot.params['id'])
  }

}
