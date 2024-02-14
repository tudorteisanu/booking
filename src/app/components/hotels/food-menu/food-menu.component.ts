import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodMenuComponent {}
