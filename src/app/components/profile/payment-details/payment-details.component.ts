import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchComponent} from "../../base/search/search.component";
import {AccordionComponent} from "../../base/accordeon/accordion.component";
import {TextFieldComponent} from "../../base/text-field/text-field.component";

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    SearchComponent,
    AccordionComponent,
    TextFieldComponent
  ],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailsComponent {
}
