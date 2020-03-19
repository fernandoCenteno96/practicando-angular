import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  artic :Articulo =new Articulo();
  constructor(private articulo:ArticulosService) {
    this.artic=this.articulo.articulo;
   }

  ngOnInit() {
  }

}
