import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchComponent} from "../../base/search/search.component";
import {AccordionComponent} from "../../base/accordeon/accordion.component";
import {TextFieldComponent} from "../../base/text-field/text-field.component";
import {FormSelectComponent} from "../../base/form-select/form-select.component";

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    SearchComponent,
    AccordionComponent,
    TextFieldComponent,
    FormSelectComponent
  ],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailsComponent {
  paymentMethods = [
    {
      value: 'google_pay_upi',
      text: 'Google Pay UPI'
    }
  ]
}
