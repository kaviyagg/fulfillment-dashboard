import { Component, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ButtonModule, MatIconModule,ToolbarModule, AvatarModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
