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
      icon: 'icono1.png',
      route: '/cafes',
      nombre: 'cafés',
      productos: [
        // {
        //   nombre: 'Espresso',
        //   descripcion: 'Café 100% puro, recién molido',
        //   precio: 5000,
        //   imagen: 't1.jpg'
        // },
        // {
        //   nombre: 'Latte',
        //   descripcion: 'Café robusto combinado con leche espumada cremosa',
        //   precio: 6000,
        //   imagen: 't1.jpg'
        // },
        {
          nombre: 'Capuccino',
          descripcion: 'Clásico e irresistible. Una mezcla perfecta de espresso intenso, leche vaporizada y una generosa capa de espuma suave y cremosa. Ideal para quienes disfrutan de un café equilibrado, con cuerpo y textura sedosa en cada sorbo',
          precio: 6500,
          imagen: 'c2.jpg'
        },
        {
          nombre: 'Submarino',
          descripcion: 'Café suave, preparado con agua caliente para un sabor Una barra de chocolate que se derrite lentamente en leche caliente. Ritual irresistible de sabor',
          precio: 4800,
          imagen: 'c1.jpg'
        },
        {
          nombre: 'Frappe Americano',
          descripcion: 'Helado de americana, café, leche, crema e hielo batidos hasta lograr una bebida suave y espumosa. Refrescante y con carácter',
          precio: 4800,
          imagen: 'f1.jpg'
        },
        {
          nombre: 'Frappe de Dulce de Leche',
          descripcion: 'Helado de dulce de leche, café, leche, crema e hielo. Una combinación cremosa y golosa, perfecta para los amantes del sabor argentino',
          precio: 4800,
          imagen: 'f1.jpg'
        },
        {
          nombre: 'Frappe de Chocolate',
          descripcion: 'Helado de chocolate, café, leche, crema e hielo. Intenso y dulce, ideal para los que buscan algo bien chocolatoso',
          precio: 4800,
          imagen: 'f1.jpg'
        },
      ]
    },
    {
      label: 'Tortas',
      icon: 'icono2.png',
      route: '/tortas',
      nombre: 'Tortas',
      productos: [
        {
          nombre: 'Cheescake con Frutos Rojos',
          descripcion: 'Queso crema suave y una salsa de frutos rojos frescos',
          precio: 9500,
          imagen: 't18.jpg'
        },
        {
          nombre: 'Torta de chocolate',
          descripcion: 'Chocolate oscuro y mousse de chocolate relleno, una combinación rica y suave',
          precio: 8900,
          imagen: 't0.jpg'
        },
        {
          nombre: 'Torta Carrot Cake',
          descripcion: 'Tres capaz de suave bizcochuelo de zanahoria, rellenas con nuestra clásica crema de queso y coronadas con nueces seleccionadas. Un clásico irresistible de Requeterico',
          precio: 8200,
          imagen: 't3.jpg'
        },
        {
          nombre: 'Tarta de manzana',
          descripcion: 'Clásica tarta artesanal con base de masa suave, rellena de crema pastelera y manzanas frescas caramelizadas con un toque de canela. Un sabor reconfortante que nunca pasa de moda',
          precio: 7500,
          imagen: 't9.jpg',
        },
        {
          nombre: 'Tarta de Frutillas',
          descripcion: 'Base crocante con dulce de leche, crema y frutillas seleccionadas frescas. Un postre simple y delicioso que resalta lo mejor de esta fruta',
          precio: 7500,
          imagen: 't1.jpg',
        },
        {
          nombre: 'Lemon Pie',
          descripcion: 'Base de masa dulce, rellena con crema de limón bien cítrica y cubierta con merengue italiano dorado. Un equilibrio perfecto entre dulzura y acidez',
          precio: 7500,
          imagen: 't2.jpg'
        },
        {
          nombre: 'Brunet',
          descripcion: 'Brownie intenso con dulce de leche y mousse de chocolate semiamargo. Una explosión de texturas y sabores para fanáticos del chocolate',
          precio: 7500,
          imagen: 't0.jpg',
        },
        {
          nombre: 'Torta de chocolate',
          descripcion: 'Bizcochuelo húmedo de chocolate relleno con crema, dulce de leche y trocitos de chocolate. Una tentación para quienes buscan puro sabor',
          precio: 7500,
          imagen:'t11.jpg'
        },
        // {
        //   nombre: 'Torta Mousse de Chocolate',
        //   descripcion: 'Combinación perfecta de mousse aireado de chocolate con base de bizcochuelo suave. Un clásico elegante e irresistible',
        //   precio: 7500,
        //   imagen:''
        // },
        {
          nombre: 'Torta Oreo',
          descripcion: 'Capas de bizcochuelo de chocolate y crema con galletas Oreo trozadas. Dulce, crocante y cremosa, ideal para los fans de esta famosa galletita',
          precio: 7500,
          imagen: 't4.jpg'
        },
        // {
        //   nombre: 'Chocotorta',
        //   descripcion: 'Típico postre argentino con galletitas Chocolinas, dulce de leche y queso crema. Simple, fresco y amado por todos',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Mousse de Chocolate Blanco con Frutos',
        //   descripcion: 'Suave mousse de chocolate blanco sobre base de bizcochuelo húmedo, con frutos rojos frescos por encima. Un equilibrio delicado entre lo dulce y lo ácido',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Bariloche',
        //   descripcion: 'Bizcochuelo de chocolate, crema bariloche y chocolate Marroc. Sabor intenso y textura suave para un viaje dulce al sur',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta 3 Mousse',
        //   descripcion: 'Tres capas de mousse: chocolate negro, blanco y con leche, sobre una base de bizcochuelo. Una experiencia completa para los amantes del cacao',
        //   precio: 7500,
        //   imagen: 't0.jpg'
        // },
        {
          nombre: 'Red Velvet',
          descripcion: 'Bizcochuelo rojo aterciopelado, relleno con clásica crema de queso. Una torta tan linda como deliciosa',
          precio: 7500,
          imagen: 't15.jpg'
        },
        // {
        //   nombre: 'Selva Negra',
        //   descripcion: 'Bizcochuelo de chocolate con crema chantilly, cerezas y virutas de chocolate. Un clásico centroeuropeo con alma argentina',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Cheescake de Maracuyá',
        //   descripcion: 'Frescura tropical en una torta cremosa con base de galleta, rellena con cheesecake suave y cobertura de maracuyá natural',
        //   precio: 7500
        // },
        {
          nombre: 'Marquise con dulce de leche, crema y frutos rojos',
          descripcion: 'Textura intensa y sedosa de marquise de chocolate, combinada con dulce de leche, crema y el toque ácido de frutos rojos',
          precio: 7500,
          imagen: 't16.jpg'
        },
        {
          nombre: 'Rogel',
          descripcion: 'Capas finas y crujientes de masa hojaldrada, rellenas con abundante dulce de leche y cubiertas con merengue italiano suave y dorado. Una combinación clásica y perfecta de crocante, cremoso y dulce',
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
          descripcion: 'Suave mousse de banana, dulce de leche y chocolate sobre base de bizcochuelo esponjoso. Inspiración en el clásico postre helado',
          precio: 7500,
          imagen: 't7.jpg',
        },
        {
          nombre: 'Torta Brownie con dulce de leche y merengue',
          descripcion: 'Brownie intenso con capa generosa de dulce de leche y merengue tostado. Textura crocante por fuera, fundente por dentro',
          precio: 7500,
          imagen:'t10.jpg'
        },
        // {
        //   nombre: 'Key lime pie',
        //   descripcion: 'Base de masa crocante con una sedosa crema de lima y cobertura de merengue. Refrescante y equilibrada',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Torta Moka',
        //   descripcion: 'Bizcochuelo de chocolate, crema de chocolate y mousse de café. El toque justo entre lo dulce y el aroma intenso del café',
        //   precio: 7500
        // },
        {
          nombre: 'Torta Block',
          descripcion: 'Capas de chocolate, dulce de leche y marquise de vainilla. Una torta con historia, para los que aman los sabores de siempre',
          precio: 7500,
          imagen: 't13.jpg'
        },
        // {
        //   nombre: 'Torta de Nuez',
        //   descripcion: 'Bizcochuelo húmedo con nueces seleccionadas y crema. Un clásico tradicional que nunca falla',
        //   precio: 7500
        // },
        // {
        //   nombre: 'Marquise Oreo',
        //   descripcion: 'Base de marquise de chocolate combinada con crema y trozos de galletitas Oreo. Intensa y adictiva',
        //   precio: 7500,
        //   imagen:'t10.jpg'
        // },
        // {
        //   nombre: 'Marquise Nutella',
        //   descripcion: 'Una delicia intensa de marquise de chocolate con el inconfundible sabor a Nutella. Suave,cremosa y tentadora',
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
    //       descripcion: 'Hojas de té verde orgánico, frescas y naturales',
    //       precio: 4500,
    //       imagen: 't1.jpg'
    //     },
    //     {
    //       nombre: 'Té chai',
    //       descripcion: 'Té negro con una mezcla de especias: canela, jengibre, cardamomo y clavo',
    //       precio: 5000,
    //       imagen: 't1.jpg'
    //     },
    //     {
    //       nombre: 'Mate cocido',
    //       descripcion: 'Yerba mate de alta calidad, infusionada para un sabor suave y tradicional',
    //       precio: 4000,
    //       imagen: 't1.jpg'
    //     },
    //   ]
    // },
    {
      label: 'Jugos',
      icon: 'icono7.png',
      route: '/jugos',
      nombre: 'Jugos',
      productos: [
        {
          nombre: 'Jugo de naranja',
          descripcion: 'Naranjas frescas exprimidas al momento, con todo su jugo natural',
          precio: 5200,
          imagen: 'j1.jpg'
        },
        {
          nombre: 'Jugo especial verde',
          // descripcion: 'Frambuesas, fresas y arándanos mezclados con yogur natural y un toque de miel',
          descripcion: '',
          precio: 5500,
          imagen: 's1.jpg'
        },
        {
          nombre: 'Limonada con menta y jengibre',
          descripcion: 'Limones frescos y hojas de menta, para una bebida refrescante y cítrica',
          precio: 5200,
          imagen: 'j2.jpg'
        },
      ]
    },
    {
      label: 'Sandwichs Calientes',
      icon: 'icono4.png',
      route: '/tostados-sandwiches',
      nombre: 'Tostados & Sandwiches',
      productos: [
        {
          nombre: 'Tostado de miga',
          descripcion: 'Jamón cocido y queso fundido, entre pan crujiente, un clásico irresistible',
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
    // {
    //   label: 'Tartas',
    //   icon: 'icono5.png',
    //   route: '/tartas',
    //   nombre: 'tartas',
    //   productos: [
    //     {
    //       nombre: 'Calabaza, puerro y muzzarella',
    //       descripcion: '',
    //       precio: 8000,
    //       imagen: ''
    //     },
    //     {
    //       nombre: 'Espinaca',
    //       descripcion: '',
    //       precio: 8000,
    //       imagen: ''
    //     },
    //     {
    //       nombre: 'Mix de vegetales',
    //       descripcion: '',
    //       precio: 8000,
    //       imagen: ''
    //     },
    //     {
    //       nombre: 'Brocoli',
    //       descripcion: '',
    //       precio: 8000,
    //       imagen: ''
    //     },
    //     {
    //       nombre: 'Choclo y zapallo',
    //       descripcion: '',
    //       precio: 8000,
    //       imagen: ''
    //     },
    //   ]
    // },
    {
      label: 'Pastelería',
      icon: 'icono3.png',
      route: '/pastelería',
      nombre: 'pastelería',
      productos: [
        // {
        //   nombre: 'Medialuna',
        //   descripcion: '',
        //   precio: 1100,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Medialuna con jamón y queso',
        //   descripcion: '',
        //   precio: 3000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Roll relleno con pastelera, manzana y pasas',
        //   descripcion: '',
        //   precio: 4800,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Tostadas de pan blanco o integral',
        //   descripcion: 'Con semillas, queso crema o manteca, y mermelada',
        //   precio: 4700,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Avocado toast',
        //   descripcion: '',
        //   precio: 7000,
        //   imagen: ''
        // },
        // {
        //   nombre: 'Alfajor de maicena',
        //   descripcion: '',
        //   precio: 3500,
        //   imagen: ''
        // },
        {
          nombre: 'Alfajor masa sableé',
          descripcion: '',
          precio: 3500,
          imagen: 'a1.jpg'
        },
        // {
        //   nombre: 'Alfajor de coco con dulce de leche',
        //   descripcion: '',
        //   precio: 3500,
        //   imagen: ''
        // },
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
        // {
        //   nombre: 'Cuadrado de maní',
        //   descripcion: 'base de chocolate, dulce de leche, maní y ganache de chocolate blanco',
        //   precio: 6500,
        //   imagen: ''
        // },
      ]
    },
    {
      label: 'Rinconcito Integral',
      icon: 'icono6.png',
      route: '/rinconcito-integral',
      nombre: 'rinconcito-integral',
      productos: [
        {
          nombre: 'Pastafrola integral',
          descripcion: 'Clásica tarta de masa integral con azúcar mascabo, rellena con dulce de membrillo artesanal. Una versión más saludable sin perder el sabor de siempre',
          precio: 5500,
          imagen: 'a3.jpg'
        },
        {
          nombre: 'Pepas integrales',
          descripcion: 'Galletitas elaboradas con harina integral, endulzadas con azúcar rubio y rellenas con dulce de membrillo. Una opción nutritiva para acompañar el mate o el café',
          precio: 4000,
          imagen: 'a4.jpg'
        },
        // {
        //   nombre: 'Tarta de Manzana Integral',
        //   descripcion: 'Base crocante de harina integral cubierta con manzanas frescas, canela y un toque de azúcar rubio. Dulce, aromática y natural',
        //   precio: 4000,
        //   imagen: 'a4.jpg'
        // },
        // {
        //   nombre: 'Budín de Naranja Integral',
        //   descripcion: 'Esponjoso budín elaborado sin manteca ni huevo, con jugo y ralladura de naranja natural. Un clásico de sabor cítrico ideal para cualquier momento',
        //   precio: 4000,
        //   imagen: 'a4.jpg'
        // },
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
