import { Component, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ButtonModule, MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
