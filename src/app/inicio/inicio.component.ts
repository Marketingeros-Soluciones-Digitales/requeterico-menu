import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'inicio';
  categorias = [
    { label: 'Cafés', icon: '☕', route: '/cafes' },
    { label: 'Tortas', icon: '🍰', route: '/tortas' },
    { label: 'Infusiones', icon: '🍵', route: '/infusiones' },
    { label: 'Jugos & Smoothies', icon: '🍓', route: '/jugos-smoothies' },
    { label: 'Pastelería', icon: '🧁', route: '/pastelería' },
    { label: 'Tostados y Sandwiches', icon: '🥪', route: '/tostados-sandwiches' }
  ];
}
