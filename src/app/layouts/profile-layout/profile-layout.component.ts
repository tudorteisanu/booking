import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navigation/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileLayoutComponent { }
