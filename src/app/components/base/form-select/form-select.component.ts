import {ChangeDetectionStrategy, Component, computed, Input, signal} from '@angular/core';
import {SelectItemInterface, SelectItemsInterface} from "../../../types";

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectComponent {
  @Input( ) label: string = '';
  @Input( ) icon: string = '';
  @Input( ) items: SelectItemsInterface = [];

  displayed = signal(false);
  selectedItem = signal<SelectItemInterface | null>(null);

  displayedText = computed(() => {
    if (this.selectedItem()) {
      return this.selectedItem()?.text
    }

    return this.label
  });

  get selectIcon(): string {
    return this.icon || 'assets/icons/arrow-down.svg'
  }

  toggle(): void {
    this.displayed.update(value => !value)
  }

  selectItem(item: SelectItemInterface): void {
    this.selectedItem.set(item);
    this.displayed.set(false)
  }
}
