import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type InputTypes = 'text' | 'password' | 'date' | 'tel' | 'month';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent {
  label = input<string>();
  inputType = input<InputTypes>('text');
  icon = input<string>();
  prependIcon = input<string>();
}
