import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  show = signal<boolean>(true);

  toggle(): void {
    this.show.update((value) => !value);
  }

  contentClass = computed(() => {
    if (this.show()) {
      return 'min-h-[50px]';
    }

    return 'min-h-0 overflow-hidden';
  });
}
