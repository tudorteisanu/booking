import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroBookComponent } from '@/components/home/hero-book/hero-book.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroBookComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
