import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { SvgHelperService } from './core/services/svg-helper.service';
import { LoginPageComponent } from "./layout/components/login-page/login-page.component";
import { LandingComponent } from "./layout/components/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LoginPageComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fulfillment-dashboard';
  constructor(private svgHelper: SvgHelperService){

  }
}
