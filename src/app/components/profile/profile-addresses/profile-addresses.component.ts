import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TextFieldComponent} from '../../base/text-field/text-field.component';
import {FormSelectComponent} from '../../base/form-select/form-select.component';

@Component({
    selector: 'app-profile-addresses',
    standalone: true,
    imports: [
        TextFieldComponent,
        FormSelectComponent
    ],
    templateUrl: './profile-addresses.component.html',
    styleUrl: './profile-addresses.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAddressesComponent {
    selectItems = [
        {
            value: 1,
            text: 'First',
        },
        {
            value: 2,
            text: 'Second',
        },
        {
            value: 2,
            text: 'Third',
        },
    ];
}
