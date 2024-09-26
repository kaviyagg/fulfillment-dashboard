import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients/patients.component';
import { DevicesComponent } from './devices/devices/devices.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { LoginPageComponent } from './layout/components/login-page/login-page.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
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
      }
    ]
  }
];

