import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TextFieldComponent} from "../../base/text-field/text-field.component";
import {FormSelectComponent} from "../../base/form-select/form-select.component";
import {SearchComponent} from "../../base/search/search.component";

@Component({
  selector: 'app-hero-book',
  standalone: true,
  imports: [
    TextFieldComponent,
    FormSelectComponent,
    SearchComponent
  ],
  templateUrl: './hero-book.component.html',
  styleUrl: './hero-book.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBookComponent {
  days = [
    {
      value: '',
      text: '1 February'
    },
  ];
  hours = [
    '7:00 AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:00 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
  ].map(value => ({
    value,
    text: value
  }));

  people = [...new Array(10)].map((_,index) => ({
    value: index+1,
    text: index+1 === 1? '1 Person' : `${index+1} People`
  }))
}
