import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate(['/indoor', route]);
  }
  disconnect(): void {
    // Implement your disconnect logic here
  }
}
