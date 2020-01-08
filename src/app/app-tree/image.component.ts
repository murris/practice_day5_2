import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  viewImage : boolean = false;   

  // Escuchamos constantemente si nuestro valor de entrada cambia.
  @Input('url') set url(url:string){     
  // Preguntamos si existe un valor en la variable.
      if(url){               
          this.viewImage=false;       
          this.loadImage("./assets/img/"+url);            
      }
      else {
          this.viewImage=false;
          this.loadImage("./assets/default.jpg")
      }
  }

  // Obtenemos una referencia hacia el tag "<img>" para poder manipularlo luego
  @ViewChild('lImage',{static: false}) lImage : ElementRef;
  
  constructor() { }

  ngOnInit() {
  // Utilizaremos el evento "onload" de el tag "<img>" ,este evento se disparara
  // cuando la imagen se carge en su totalidad.
      this.lImage.nativeElement.onload=()=>{
          this.viewImage=true;                        
      }
  }
  // Función que utilizaremos para comenzar el proceso de carga de imagenes, 
  // esta misma le proporcionara la dirección imagen la cual tiene que cargar.
  loadImage(urlImage){
      this.lImage.nativeElement.src = urlImage;        
  }

}
