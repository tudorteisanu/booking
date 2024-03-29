import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { SelectItemInterface, SelectItemsInterface } from '@/types';
import { ClickOutsideDirective } from '@/directives';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectComponent {
  label = input<string>('');
  icon = input<string>('');
  items = input<SelectItemsInterface>([]);
  displayed = signal(false);
  selectedItem = signal<SelectItemInterface | null>(null);

  displayedText = computed(() => {
    if (this.selectedItem()) {
      return this.selectedItem()?.text;
    }

    return this.label();
  });

  get selectIcon(): string {
    return this.icon() || 'assets/icons/arrow-down.svg';
  }

  toggle(): void {
    this.displayed.update((value) => !value);
  }

  hide(): void {
    this.displayed.set(false);
  }

  selectItem(item: SelectItemInterface): void {
    this.selectedItem.set(item);
    this.displayed.set(false);
  }
}
