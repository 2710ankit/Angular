import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

export const broadcastChannel = new BroadcastChannel('logout');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {
    broadcastChannel.onmessage = (message: MessageEvent) => {
      if (message.data === 'logout') {
        this.router.navigate(['/login']);
      }
    };
  }
  title = 'Angular';
}
