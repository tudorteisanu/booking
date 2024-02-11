import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormSelectComponent} from '../../base/form-select/form-select.component';
import {TextFieldComponent} from '../../base/text-field/text-field.component';

@Component({
    selector: 'app-basket-booking-details',
    standalone: true,
    imports: [
        FormSelectComponent,
        TextFieldComponent
    ],
    templateUrl: './basket-booking-details.component.html',
    styleUrl: './basket-booking-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketBookingDetailsComponent {

}
