import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { FeaturedHotelsComponent } from '../../components/home/featured-hotels/featured-hotels.component';
import { PopularCuisinesComponent } from '../../components/home/popular-cuisines/popular-cuisines.component';
import { BestDealsComponent } from '../../components/home/best-deals/best-deals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedHotelsComponent,
    PopularCuisinesComponent,
    BestDealsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
