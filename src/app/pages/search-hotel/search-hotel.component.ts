import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchFilterComponent } from '../../components/search/search-filter/search-filter.component';
import { SearchResultComponent } from '../../components/search/search-result/search-result.component';

@Component({
  selector: 'app-search-hotel',
  standalone: true,
  imports: [
    SearchFilterComponent,
    SearchResultComponent
  ],
  templateUrl: './search-hotel.component.html',
  styleUrl: './search-hotel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHotelComponent {

}
