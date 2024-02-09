import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent {
  @Input() label = '';
  @Input() inputType = 'text';
  @Input() icon = '';
  @Input() prependIcon = '';
}
