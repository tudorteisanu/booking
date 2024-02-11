import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-best-deals',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './best-deals.component.html',
    styleUrl: './best-deals.component.css'
})
export class BestDealsComponent {
    items = signal([
        'assets/images/best_deals_2.png',
        'assets/images/best_deals_1.png',
        'assets/images/best_deals_3.png',
        'assets/images/best_deals_4.png'
    ]);
}
