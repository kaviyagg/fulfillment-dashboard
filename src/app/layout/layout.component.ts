import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, SidebarComponent, RouterOutlet,
      ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '84px' : '204px')
}
