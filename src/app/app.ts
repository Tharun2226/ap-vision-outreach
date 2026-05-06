import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
  title = 'AP Vision Outreach';
  sidebarOpen = true;
  currentRole = 'State Official';
  roleInitials = 'SO';

  navItems = [
    { path: '/dashboard',    icon: 'fa-solid fa-gauge-high',        label: 'Dashboard' },
    { path: '/emr',          icon: 'fa-solid fa-stethoscope',       label: 'Eye Examination' },
    { path: '/districts',    icon: 'fa-solid fa-map-location-dot',  label: 'District View' },
    { path: '/distribution', icon: 'fa-solid fa-glasses',           label: 'Spectacle Distribution' },
    { path: '/referrals',    icon: 'fa-solid fa-right-left',        label: 'Referrals' },
    { path: '/reports',      icon: 'fa-solid fa-chart-bar',         label: 'Reports' },
  ];

  roles = [
    { value: 'state', label: 'State Official', initials: 'SO' },
    { value: 'district', label: 'District Health Officer', initials: 'DH' },
    { value: 'pmoa', label: 'PMOA / Field Worker', initials: 'FW' },
  ];

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }

  onRoleChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const r = this.roles.find(x => x.value === val)!;
    this.currentRole = r.label;
    this.roleInitials = r.initials;
  }
}
