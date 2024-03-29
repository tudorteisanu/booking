import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  placeholder = input();
  @Output() search = new EventEmitter();
  @ViewChild('searchInput') searchInput!: ElementRef;

  emitSearch() {
      this.search.emit(this.searchInput.nativeElement.value);
  }
}
