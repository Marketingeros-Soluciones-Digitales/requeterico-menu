// categoria.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  nombreCategoria: string = '';
  items: any[] = [];

  data: any = {
    'cafes': {
      nombre: 'Cafés',
      productos: [
        { nombre: 'Espresso', descripcion: 'Café intenso', precio: 5000 },
        { nombre: 'Latte', descripcion: 'Con leche espumada', precio: 6000 },
        { nombre: 'Capuccino', descripcion: 'Con espuma de leche y canela', precio: 6500 },
        { nombre: 'Café americano', descripcion: 'Café suave y alargado', precio: 4800 },
      ]
    },
    'tortas': {
      nombre: 'Tortas',
      productos: [
        { nombre: 'Cheesecake', descripcion: 'Con salsa de frutos rojos', precio: 9500 },
        { nombre: 'Torta de chocolate', descripcion: 'Rellena de mousse', precio: 8900 },
        { nombre: 'Tarta de manzana', descripcion: 'Con base de masa casera', precio: 8200 },
      ]
    },
    'infusiones': {
      nombre: 'Infusiones',
      productos: [
        { nombre: 'Té verde', descripcion: 'Orgánico y relajante', precio: 4500 },
        { nombre: 'Té chai', descripcion: 'Con especias', precio: 5000 },
        { nombre: 'Mate cocido', descripcion: 'Tradicional', precio: 4000 },
      ]
    },
    'jugos-smoothies': {
      nombre: 'Jugos & Smoothies',
      productos: [
        { nombre: 'Jugo de naranja', descripcion: 'Natural y exprimido', precio: 6000 },
        { nombre: 'Smoothie de frutas rojas', descripcion: 'Con yogur y miel', precio: 7500 },
        { nombre: 'Limonada con menta', descripcion: 'Refrescante', precio: 6500 },
      ]
    },
    'pastelería': {
      nombre: 'Pastelería',
      productos: [
        { nombre: 'Croissant', descripcion: 'De manteca', precio: 4000 },
        { nombre: 'Pain au chocolat', descripcion: 'Relleno de chocolate', precio: 4500 },
        { nombre: 'Alfajor de maicena', descripcion: 'Con dulce de leche', precio: 3500 },
      ]
    },
    'tostados-sandwiches': {
      nombre: 'Tostados y Sandwiches',
      productos: [
        { nombre: 'Tostado de jamón y queso', descripcion: 'Clásico', precio: 8000 },
        { nombre: 'Sandwich vegetariano', descripcion: 'Con palta y vegetales', precio: 9000 },
        { nombre: 'Tostón capresse', descripcion: 'Con tomate, albahaca y muzzarella', precio: 9500 },
      ]
    },
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.nombreCategoria = this.data[nombre]?.nombre;
    this.items = this.data[nombre]?.productos || [];
  }
}
