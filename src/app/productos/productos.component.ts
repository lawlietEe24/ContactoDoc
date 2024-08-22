import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; // Asegúrate de que esto esté inicializado adecuadamente

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí deberías cargar los productos desde un servicio
  }

  verProducto(id: number): void {
    this.router.navigate(['/producto', id]); // Navega a la página de detalles del producto
  }
}
