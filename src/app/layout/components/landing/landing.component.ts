import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule,CommonModule ,CardModule,MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  emailId = `connect@me.health`;
  menuItems = signal<MenuItem[]> ([
    {
      icon: 'user-list',
      label: 'Patients',
      route: 'patients'
    },
    {
      icon: 'health-devices',
      label: 'Devices',
      route: 'devices'
    },
    {
      icon: 'store-front',
      label: 'Order',
      route: 'orders'
    },
    {
      icon: 'admin',
      label: 'Admin'
    }
  ]);
}
