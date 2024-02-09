import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProfileDetailsComponent} from "../../components/profile/profile-details/profile-details.component";
import {ProfileLinksComponent} from "../../components/profile/profile-links/profile-links.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileDetailsComponent,
    ProfileLinksComponent,
    RouterOutlet
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {

}
