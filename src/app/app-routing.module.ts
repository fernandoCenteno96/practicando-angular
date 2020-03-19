import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil',component: PerfilComponent},
  { path: 'articuloDetail',component: ArticuloDetalleComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
