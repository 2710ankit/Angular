import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { broadcastChannel } from '../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
    broadcastChannel.postMessage('logout');
  };
}
