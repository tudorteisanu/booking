import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FeaturedHotelInterface } from '../../types';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  private readonly http = inject(HttpClient);

  fetchFeaturedHotels(): Observable<FeaturedHotelInterface[]> {
    return this.http.get<FeaturedHotelInterface[]>('/Hotel/GetFeaturedHotels');
  }

  fetchPopularHotels(): Observable<FeaturedHotelInterface[]> {
    return this.http.get<FeaturedHotelInterface[]>('/Hotel/GetPopularHotels');
  }
}
