import { Component } from '@angular/core';
import {HeroBookComponent} from '../hero-book/hero-book.component';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [
        HeroBookComponent
    ],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {

}
