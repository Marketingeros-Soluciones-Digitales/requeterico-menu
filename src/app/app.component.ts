import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu requeterico';
  isViewVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.triggerFadeIn();
      });
  }

  triggerFadeIn() {
    this.isViewVisible = false;
    setTimeout(() => {
      this.isViewVisible = true;
    }, 50); // Pequeño retraso para que se aplique la transición
  }
}
