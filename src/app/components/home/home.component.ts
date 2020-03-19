import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> =new Array<Articulo>();
  constructor( private User:UsuarioService,private articulo :ArticulosService,
      private ruta:Router
    ) { }

  ngOnInit() {
    this.articulos.push({
      titulo:'curso',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam impedit consequuntur veniam quibusdam a soluta earum corrupti voluptatem esse laborum sint, modi molestiae magnam dolore aspernatur vero temporibus mollitia.',
      fecha: new Date(),
      usuario: `hola: ${this.User.usuario.nombre}  ${this.User.usuario.apellido}` 
    },
    {
      titulo:'curso angular',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam impedit consequuntur veniam quibusdam a soluta earum corrupti voluptatem esse laborum sint, modi molestiae magnam dolore aspernatur vero temporibus mollitia.',
      fecha: new Date(),
      usuario: `hola: ${this.User.usuario.nombre}  ${this.User.usuario.apellido}` 
    },
    {
      titulo:'curso de prueba',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam impedit consequuntur veniam quibusdam a soluta earum corrupti voluptatem esse laborum sint, modi molestiae magnam dolore aspernatur vero temporibus mollitia.',
      fecha: new Date(),
      usuario: `hola: ${this.User.usuario.nombre}  ${this.User.usuario.apellido}` 
    }
    );
  }
  irAlDetalle(articulo:Articulo){
    this.articulo.articulo=articulo;
    this.ruta.navigateByUrl('articuloDetail');

  }
}
