import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  standalone: true,
  imports: [SearchBarComponent]
})
@Injectable({ providedIn: 'root' })
export class CategoriaComponent implements OnInit {
  nombreCategoria: string = '';
  items: any[] = [];
  itemsOriginales: any[] = [];
  item_placeholder: string = '';
  searchTerm: string = '';
  isLoading: boolean = false;
  categorias: any[] = []

  data: any = [
    {
      label: 'Cafés',
      icon: '☕',
      route: '/cafes',
      nombre: 'cafés',
      productos: [
        {
          nombre: 'Espresso',
          descripcion: 'Café 100% puro, recién molido.',
          precio: 5000,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Latte',
          descripcion: 'Café robusto combinado con leche espumada cremosa.',
          precio: 6000,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Capuccino',
          descripcion: 'Café intenso, leche espumada y un toque de canela aromática.',
          precio: 6500,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Café americano',
          descripcion: 'Café suave, preparado con agua caliente para un sabor alargado.',
          precio: 4800,
          imagen: 't1.jpg'
        },
      ]
    },
    {
      label: 'Tortas',
      icon: '🍰',
      route: '/tortas',
      nombre: 'Tortas',
      productos: [
        {
          nombre: 'Cheesecake',
          descripcion: 'Queso crema suave y una salsa de frutos rojos frescos.',
          precio: 9500,
          imagen: 't6.jpg'
        },
        {
          nombre: 'Torta de chocolate',
          descripcion: 'Chocolate oscuro y mousse de chocolate relleno, una combinación rica y suave.',
          precio: 8900,
          imagen: 't0.jpg'
        },
        {
          nombre: 'Torta Carrot Cake',
          descripcion: 'Tres capaz de suave bizcochuelo de zanahoria, rellenas con nuestra clásica crema de queso y coronadas con nueces seleccionadas. Un clásico irresistible de Requeterico.',
          precio: 8200,
          imagen: 't3.jpg'
        },
        {
          nombre: 'Tarta de manzana',
          descripcion: 'Crema pastelera, puré de manzana, canela, manzana caramelizada',
          precio: 7500,
          imagen: 't9.jpg',
        },
        {
          nombre: 'Tarta de Frutillas',
          descripcion: '',
          precio: 7500,
          imagen: 't1.jpg',
        },
        {
          nombre: 'Lemon Pie',
          descripcion: '',
          precio: 7500,
          imagen: 't2.jpg'
        },
        // {
        //   nombre: 'Brunet',
        //   descripcion: 'Brownie, dulce de leche y mousse de chocolate semi amargo',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta de chocolate',
        //   descripcion: 'Rellena con dulce de leche, crema y trozos de chocolate',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Mousse de Chocolate',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Oreo',
        //   descripcion: '',
        //   precio: 7500,
        //   imagen: 't4.jpg'
        // },
        // {
        //   nombre: 'Chocotorta',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Mousse de Chocolate Blanco con Frutos',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Bariloche',
        //   descripcion: 'Bizcochuelo de chocolate, crema bariloche y chocolate Marroc',
        //   precio: 7500
        // },
        {
          nombre: 'Torta 3 Mousse',
          descripcion: 'chocolate negro, blanco, y chocolate con leche',
          precio: 7500,
          imagen: 't0.jpg'
        },
        {
          nombre: 'Red Velvet',
          descripcion: '',
          precio: 7500,
          imagen: 't15.jpg'
        },
        // {
        //   nombre: 'Selva Negra',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Cheescake con Frutos Rojos',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Cheescake de Maracuyá',
        //   descripcion: '',
        //   precio: 7500
        // },
        {
          nombre: 'Marquise con dulce de leche, crema y frutos rojos',
          descripcion: '',
          precio: 7500,
          imagen: 't16.jpg'
        },
        {
          nombre: 'Rogel',
          descripcion: '',
          precio: 7500,
          imagen: 't17.jpg',
        },
        {
          nombre: 'Postre tipo Balcarce',
          descripcion: '',
          precio: 7500,
          imagen: 't14.jpg'
        },
        // {
        //   nombre: 'Tiramisú',
        //   descripcion: '',
        //   precio: 7500
        // },
        {
          nombre: 'Torta Mousse de Banana Split',
          descripcion: '',
          precio: 7500,
          imagen: 't7.jpg',
        },
        {
          nombre: 'Torta Brownie con dulce de leche y merengue',
          descripcion: '',
          precio: 7500,
          imagen:'t10.jpg'
        },
        // {
        //   nombre: 'Key lime pie',
        //   descripcion: '',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Moka',
        //   descripcion: 'Base de chocolate, crema de chocolate y mousse de café',
        //   precio: 7500
        // },
        {
          nombre: 'Torta Block',
          descripcion: 'Chocolate, dulce de leche y mani',
          precio: 7500,
          imagen: 't13.jpg'
        },
        // {
        //   nombre: 'Torta de Nuez',
        //   descripcion: '',
        //   precio: 7500
        // },
        {
          nombre: 'Marquise Oreo',
          descripcion: '',
          precio: 7500,
          imagen:'t4.jpg'
        },
        // {
        //   nombre: 'Marquise Nutella',
        //   descripcion: '',
        //   precio: 7500
        // },

      ]
    },
    // {
    //   label: 'Infusiones',
    //   icon: '🍵',
    //   route: '/infusiones',
    //   nombre: 'Infusiones',
    //   productos: [
    //     {
    //       nombre: 'Té verde',
    //       descripcion: 'Hojas de té verde orgánico, frescas y naturales.',
    //       precio: 4500,
    //       imagen: 't1.jpg'
    //     },
    //     {
    //       nombre: 'Té chai',
    //       descripcion: 'Té negro con una mezcla de especias: canela, jengibre, cardamomo y clavo.',
    //       precio: 5000,
    //       imagen: 't1.jpg'
    //     },
    //     {
    //       nombre: 'Mate cocido',
    //       descripcion: 'Yerba mate de alta calidad, infusionada para un sabor suave y tradicional.',
    //       precio: 4000,
    //       imagen: 't1.jpg'
    //     },
    //   ]
    // },
    {
      label: 'Jugos',
      icon: '🍓',
      route: '/jugos',
      nombre: 'Jugos',
      productos: [
        {
          nombre: 'Jugo de naranja',
          descripcion: 'Naranjas frescas exprimidas al momento, con todo su jugo natural.',
          precio: 5200,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Jugo especial verde',
          // descripcion: 'Frambuesas, fresas y arándanos mezclados con yogur natural y un toque de miel.',
          descripcion: '',
          precio: 5500,
          imagen: 's1.jpg'
        },
        {
          nombre: 'Limonada con menta y jengibre',
          descripcion: 'Limones frescos y hojas de menta, para una bebida refrescante y cítrica.',
          precio: 5200,
          imagen: 'j2.jpg'
        },
      ]
    },
    {
      label: 'Pastelería',
      icon: '🧁',
      route: '/pastelería',
      nombre: 'Pastelería',
      productos: [
        {
          nombre: 'Croissant',
          descripcion: 'Manteca de calidad en cada capa, horneado hasta quedar perfectamente crujiente.',
          precio: 4000,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Pain au chocolat',
          descripcion: 'Masa hojaldre rellena de chocolate puro, suave y decadente.',
          precio: 4500,
          imagen: 't1.jpg'
        },
        {
          nombre: 'Alfajor de maicena',
          descripcion: 'Dulce de leche entre dos capas de maicena suave, un toque dulce y tradicional.',
          precio: 3500,
          imagen: 't1.jpg'
        },
      ]
    },
    {
      label: 'Sandwichs Calientes',
      icon: '🥪',
      route: '/tostados-sandwiches',
      nombre: 'Tostados & Sandwiches',
      productos: [
        {
          nombre: 'Tostado de miga',
          descripcion: 'Jamón cocido y queso fundido, entre pan crujiente, un clásico irresistible.',
          precio: 7500,
          imagen: 'tost1.jpg'
        },
        // {
        //   nombre: 'Tostado Árabe (XL)',
        //   descripcion: '',
        //   precio: 7500,
        //   imagen: 'tost1.jpg'
        // },
        // {
        //   nombre: 'Tostado con crudo',
        //   descripcion: '',
        //   precio: 8000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Tostado Requeterico',
        //   descripcion: 'Pan brioche embebido en huevo y azúcar con jamón y muzzarella tostado',
        //   precio: 7800,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Tostado en pan focaccia',
        //   descripcion: 'lomito ahumado y queso',
        //   precio: 8200,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Tostón con salmón y alcaparras',
        //   descripcion: '',
        //   precio: 7800,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Lomito solo con fritas',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Lomito con jamón y queso con fritas',
        //   descripcion: '',
        //   precio: 13000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Lomito completo con fritas',
        //   descripcion: '',
        //   precio: 15000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Pechuga sola con fritas',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // }, ,
        // {
        //   nombre: 'Pechuga jamón y queso con fritas',
        //   descripcion: '',
        //   precio: 13000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Pechuga completa con fritas',
        //   descripcion: '',
        //   precio: 15000,
        //   imagen: ''
        // }, ,
        // {
        //   nombre: 'Hamburguesa sola con fritas',
        //   descripcion: '',
        //   precio: 11000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Hamburguesa jamon y queso con fritas',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Hamburguesa completa con fritas',
        //   descripcion: 'Opcional: Tomate,lechuga,rucula ($700)',
        //   precio: 14000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Papas cheddar',
        //   descripcion: '',
        //   precio: 9000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Papas requetericas',
        //   descripcion: '',
        //   precio: 9000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Ciabatta (XL) Atun',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Ciabatta (XL) caesar',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // }, ,
        // {
        //   nombre: 'Ciabatta (XL) vegetariana',
        //   descripcion: '',
        //   precio: 12000,
        //   imagen: ''
        // },
      ]
    },
    {
      label: 'Tartas',
      icon: '☕',
      route: '/tartas',
      nombre: 'tartas',
      productos: [
        {
          nombre: 'Calabaza, puerro y muzzarella',
          descripcion: '',
          precio: 8000,
          imagen: ''
        },
        {
          nombre: 'Espinaca',
          descripcion: '',
          precio: 8000,
          imagen: ''
        },
        {
          nombre: 'Mix de vegetales',
          descripcion: '',
          precio: 8000,
          imagen: ''
        },
        {
          nombre: 'Brocoli',
          descripcion: '',
          precio: 8000,
          imagen: ''
        },
        {
          nombre: 'Choclo y zapallo',
          descripcion: '',
          precio: 8000,
          imagen: ''
        },
      ]
    },
    {
      label: 'Pasteleria',
      icon: '☕',
      route: '/pasteleria',
      nombre: 'pasteleria',
      productos: [
        {
          nombre: 'Medialuna',
          descripcion: '',
          precio: 1100,
          imagen: ''
        },
        {
          nombre: 'Medialuna con jamón y queso',
          descripcion: '',
          precio: 3000,
          imagen: ''
        },
        {
          nombre: 'Roll relleno con pastelera, manzana y pasas',
          descripcion: '',
          precio: 4800,
          imagen: ''
        },
        {
          nombre: 'Tostadas de pan blanco o integral',
          descripcion: 'Con semillas, queso crema o manteca, y mermelada',
          precio: 4700,
          imagen: ''
        },
        {
          nombre: 'Avocado toast',
          descripcion: '',
          precio: 7000,
          imagen: ''
        },
        {
          nombre: 'Alfajor de maicena',
          descripcion: '',
          precio: 3500,
          imagen: ''
        },
        {
          nombre: 'Alfajor masa sableé',
          descripcion: '',
          precio: 3500,
          imagen: 'a1.jpg'
        },
        {
          nombre: 'Alfajor de coco con dulce de leche',
          descripcion: '',
          precio: 3500,
          imagen: ''
        },
        {
          nombre: 'Alfajor santafecino',
          descripcion: '',
          precio: 3500,
          imagen: 'a7.jpg'
        },
        {
          nombre: 'Alfajor de masa integral con dulce de leche',
          descripcion: '',
          precio: 3500,
          imagen: 'a1.jpg'
        },
        {
          nombre: 'Alfajor de nuez',
          descripcion: '',
          precio: 5000,
          imagen: 'a5.jpg'
        },
        // {
        //   nombre: 'Tarta de coco con dulce de leche',
        //   descripcion: '',
        //   precio: 5500,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Tarta cabsha',
        //   descripcion: '',
        //   precio: 5500,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Pastafrola',
        //   descripcion: '',
        //   precio: 5000,
        //   imagen: 'a3.jpg'
        // },
        // {
        //   nombre: 'Cuadrado de ricota',
        //   descripcion: '',
        //   precio: 6500,
        //   imagen: ''
        // },
        {
          nombre: 'Cuadrado de maní',
          descripcion: 'base de chocolate, dulce de leche, maní y ganache de chocolate blanco',
          precio: 6500,
          imagen: ''
        },
      ]
    },
    {
      label: 'Rinconcito Integral',
      icon: '☕',
      route: '/rinconcito-integral',
      nombre: 'rinconcito-integral',
      productos: [
        {
          nombre: 'Pastafrola',
          descripcion: '',
          precio: 5500,
          imagen: 'a3.jpg'
        },
        {
          nombre: 'Pepas',
          descripcion: '',
          precio: 4000,
          imagen: 'a4.jpg'
        },
      ]
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const nombre = '/' + this.route.snapshot.paramMap.get('nombre') || '';
    const objeto_categoria = this.data.find((item: { route: string; }) => item.route === nombre)
    this.nombreCategoria = objeto_categoria.nombre;
    this.items = objeto_categoria.productos || [];
    this.itemsOriginales = [...this.items];
    const random_index = Math.floor(Math.random() * this.items.length);
    this.item_placeholder = this.items[random_index]?.nombre || '';
    // this.categorias = Object.keys(this.data).map(key => ({
    //   route: this.data[key].route,
    //   id: key,
    //   nombre: this.data[key].nombre
    // }));
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
