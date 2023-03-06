import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges{

  //uso do input é pra quek recebe a informação (lado esquerdo do igual)
  @Input() public tent!: number;

  constructor(){
  }

  ngOnChanges(): void {
    //removendo coração
    if(this.tent !== this.coracoes.length){
      this.coracoes[this.tent].cheio = false
    }
  }

  ngOnInit(): void {
     
  }

  public coracoes:Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
}
