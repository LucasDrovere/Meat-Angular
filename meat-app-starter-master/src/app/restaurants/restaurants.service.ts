import { Restaurant } from "./restaurant/restaurant.model";

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map' 
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

const URL = 'http://localhost:3000'

@Injectable()
export class RestaurantsService{
    constructor(private http: Http){}
    
      restaurants(): Observable<Restaurant[]>{
        return this.http.get(URL + '/restaurants')
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }


    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(URL + '/restaurants/' + id)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(URL + '/restaurants/' + id + '/reviews')
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(URL + '/restaurants/' + id + '/menu')
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}

