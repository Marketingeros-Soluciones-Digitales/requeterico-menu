import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [CategoriaComponent]
})
export class InicioComponent {
  title = 'inicio';
  categorias: any;
  visible: boolean=false;

  constructor(categoriaComponent: CategoriaComponent) {
    this.categorias = categoriaComponent.data
  }

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 100); // Delay mínimo para activar transición
  }

}
