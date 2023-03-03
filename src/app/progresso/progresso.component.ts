import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {

  //recebendo valores no momento da instanciação do component
  //@Input serve para passar valores entre os components
  @Input() public progress:number = 0

  constructor(){

  }
}
