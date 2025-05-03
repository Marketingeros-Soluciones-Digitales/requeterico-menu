import { Component, Input } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

RouterModule
@Component({
  selector: 'app-slider',
  imports: [RouterModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() categoria_actual: string = "";
  @Input() categorias: any[] = [];

  ngOnInit() {
  }

  
}
