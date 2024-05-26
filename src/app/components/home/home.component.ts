import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(@Inject(PLATFORM_ID) platformId: Object){
    if(isPlatformBrowser(platformId)){

      const router = inject(Router);
      router.navigate(['tasks'])
    }
  }
}
