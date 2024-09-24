import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients/patients.component';
import { DevicesComponent } from './devices/devices/devices.component';
import { OrdersComponent } from './orders/orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'patients'
  },
  {
      path: 'patients',
      component: PatientsComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
];
