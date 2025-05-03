import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [CategoriaComponent]
})
export class InicioComponent {
  title = 'inicio';
  categorias: any;

  constructor(categoriaComponent: CategoriaComponent) {
    this.categorias = categoriaComponent.data
  }
}
