import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  standalone: true,
  imports: [SearchBarComponent]
})
export class CategoriaComponent implements OnInit {
  nombreCategoria: string = '';
  items: any[] = [];
  itemsOriginales: any[] = [];
  item_placeholder: string = '';
  searchTerm: string = '';
  isLoading: boolean = false;

  data: any = {
    'cafes': {
      nombre: 'cafés', productos: [
        { nombre: 'Espresso', descripcion: 'Café 100% puro, recién molido.', precio: 5000 },
        { nombre: 'Latte', descripcion: 'Café robusto combinado con leche espumada cremosa.', precio: 6000 },
        { nombre: 'Capuccino', descripcion: 'Café intenso, leche espumada y un toque de canela aromática.', precio: 6500 },
        { nombre: 'Café americano', descripcion: 'Café suave, preparado con agua caliente para un sabor alargado.', precio: 4800 },
      ]
    },
    'tortas': {
      nombre: 'Tortas',
      productos: [
        { nombre: 'Cheesecake', descripcion: 'Queso crema suave y una salsa de frutos rojos frescos.', precio: 9500 },
        { nombre: 'Torta de chocolate', descripcion: 'Chocolate oscuro y mousse de chocolate relleno, una combinación rica y suave.', precio: 8900 },
        { nombre: 'Tarta de manzana', descripcion: 'Manzanas frescas, masa casera crujiente y toque de canela.', precio: 8200 },
      ]
    },
    'infusiones': {
      nombre: 'Infusiones',
      productos: [
        { nombre: 'Té verde', descripcion: 'Hojas de té verde orgánico, frescas y naturales.', precio: 4500 },
        { nombre: 'Té chai', descripcion: 'Té negro con una mezcla de especias: canela, jengibre, cardamomo y clavo.', precio: 5000 },
        { nombre: 'Mate cocido', descripcion: 'Yerba mate de alta calidad, infusionada para un sabor suave y tradicional.', precio: 4000 },
      ]
    },
    'jugos-smoothies': {
      nombre: 'Jugos & Smoothies',
      productos: [
        { nombre: 'Jugo de naranja', descripcion: 'Naranjas frescas exprimidas al momento, con todo su jugo natural.', precio: 6000 },
        { nombre: 'Smoothie de frutas rojas', descripcion: 'Frambuesas, fresas y arándanos mezclados con yogur natural y un toque de miel.', precio: 7500 },
        { nombre: 'Limonada con menta', descripcion: 'Limones frescos y hojas de menta, para una bebida refrescante y cítrica.', precio: 6500 },
      ]
    },
    'pastelería': {
      nombre: 'Pastelería',
      productos: [
        { nombre: 'Croissant', descripcion: 'Manteca de calidad en cada capa, horneado hasta quedar perfectamente crujiente.', precio: 4000 },
        { nombre: 'Pain au chocolat', descripcion: 'Masa hojaldre rellena de chocolate puro, suave y decadente.', precio: 4500 },
        { nombre: 'Alfajor de maicena', descripcion: 'Dulce de leche entre dos capas de maicena suave, un toque dulce y tradicional.', precio: 3500 },
      ]
    },
    'tostados-sandwiches': {
      nombre: 'Tostados y Sandwiches',
      productos: [
        { nombre: 'Tostado de jamón y queso', descripcion: 'Jamón cocido y queso fundido, entre pan crujiente, un clásico irresistible.', precio: 8000 },
        { nombre: 'Sandwich vegetariano', descripcion: 'Palta fresca, tomate, lechuga y vegetales crocantes, todo en pan integral.', precio: 9000 },
        { nombre: 'Tostón capresse', descripcion: 'Tomates frescos, albahaca y muzzarella, todo sobre pan tostado.', precio: 9500 },
      ]
    },
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.nombreCategoria = this.data[nombre]?.nombre;
    this.items = this.data[nombre]?.productos || [];
    this.itemsOriginales = [...this.items];
    const random_index = Math.floor(Math.random() * this.items.length);
    this.item_placeholder = this.items[random_index]?.nombre || '';
  }

  onSearch(term: string) {
    console.log(term)
    this.searchTerm = term;
    this.isLoading = true;

    setTimeout(() => { // Simula un pequeño delay
      this.buscarProducto();
      this.isLoading = false;
    }, 300); // 300ms de espera para "loading"
  }

  buscarProducto() {
    const termino = this.searchTerm.trim().toLowerCase();
    
    if (!termino) {
      this.items = [...this.itemsOriginales];
      return;
    }

    const palabras = termino.split(' ');

    this.items = this.itemsOriginales.filter((producto: any) => {
      const textoProducto = `${producto.nombre} ${producto.descripcion}`.toLowerCase();
      return palabras.every(palabra => textoProducto.includes(palabra));
    });
  }
}
