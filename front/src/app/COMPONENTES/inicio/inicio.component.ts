import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/SERVICE/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  lista:any=[];
  constructor(private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos()
  {
    this.productoService.getProductos().subscribe(
      res=>{this.lista=res;
        console.log(res);},
      err=>console.log(err)
    );
  }

}
