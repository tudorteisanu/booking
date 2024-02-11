import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-time-slot',
    standalone: true,
    imports: [],
    templateUrl: './time-slot.component.html',
    styleUrl: './time-slot.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeSlotComponent {

}
