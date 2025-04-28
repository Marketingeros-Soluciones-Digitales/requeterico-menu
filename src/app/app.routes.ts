import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';
export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: ':nombre', component: CategoriaComponent },
    { path: '**', component: InicioComponent }
];
