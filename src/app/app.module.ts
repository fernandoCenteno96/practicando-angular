import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { ArticulosService } from './services/articulos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
