import { Component, computed, Signal, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, SidebarComponent, RouterOutlet,
      ButtonModule,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  currentRoute = signal('');
  showSidebar: Signal<boolean>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(this.activatedRoute.firstChild?.snapshot.routeConfig?.path || '');
      }
    });

    this.showSidebar = computed(() => this.currentRoute() !== 'landing');
  }

  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '84px' : '204px')
}
