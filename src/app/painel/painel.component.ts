import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import{ FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  
  public frases:Array<Frase> = FRASES
  public instrucao:string = "Traduza a frase: "
  public resposta!:string

  constructor(){
    console.log(this.frases)
  }

  public atualizaResposta(retornoEvento:Event):void{
    //recuperando a infomação digitada na area de texto, esta que está contida no atributo target
    this.resposta = (<HTMLInputElement>retornoEvento.target).value
    console.log(this.resposta)
  }
}
