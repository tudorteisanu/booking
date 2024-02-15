import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { FeaturedHotelInterface } from '@/types';
import { HomeService } from './home.service';
import { inject } from '@angular/core';
import { pipe, switchMap } from 'rxjs';
import { tapResponse, } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

type HomeStoreState = {
  featuredHotels: FeaturedHotelInterface[];
  popularHotels: FeaturedHotelInterface[];
  isFetching: boolean;
};

const initialState: HomeStoreState = {
  featuredHotels: [],
  popularHotels: [],
  isFetching: false,
};

export const HomeStore = signalStore(
  withState(initialState),
  withMethods((store, homeService = inject(HomeService)) => ({
    fetchFeaturedHotels: rxMethod<void>(
      pipe(
        switchMap(() => {
          return homeService.fetchFeaturedHotels().pipe(
            tapResponse({
              next: (featuredHotels) => patchState(store, { featuredHotels }),
              error: console.error,
            })
          );
        })
      )
    ),
    fetchPopularHotels: rxMethod<void>(
      pipe(
        switchMap(() => {
          return homeService.fetchPopularHotels().pipe(
            tapResponse({
              next: (popularHotels) => patchState(store, { popularHotels }),
              error: console.error,
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit: (store) => {
      store.fetchFeaturedHotels();
      store.fetchPopularHotels();
    }
  })
);

