import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public numero: number;
  public imagen: string;
  public animacion: boolean;

  constructor() {

    this.numero = 1;
    this.imagen = `../../../assets/img/image-hero${this.numero}.jpg`;
    this.animacion = false;

    setInterval(() => {
      this.numero++;

      if (this.numero > 3)
        this.numero = 1;

      this.imagen = `../../../assets/img/image-hero${this.numero}.jpg`;

      setTimeout(()=> {

        this.animacion = true

        setTimeout(()=> this.animacion = false, 1000)
        

      }, 1000 * 9.5);
    }, 1000 * 10);
  }

  ngOnInit() {
  }

  Redireccionar(enlace:string) {

    window.open(enlace, '_blank');
  }

  prueba() {
    var span : HTMLInputElement= document.querySelector("#test");
    span.select();
    document.execCommand("copy");
  }
}