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
  public resposta:string = ''
  public rodada:number = 0
  public rodadaFrase!:Frase
  public progresso:number = 0

  constructor(){
    
  }

  public atualizaResposta(retornoEvento:Event):void{
    //recuperando a infomação digitada na area de texto, esta que está contida no atributo target
    this.resposta = (<HTMLInputElement>retornoEvento.target).value
  }

  public verificarResposta():void {
    this.atualizaFrase()
    //this.clearArea()

    if(this.rodadaFrase.frasePtBr == this.resposta){//se estiver correto
      alert('A tradução está correta')

      if(this.rodada < this.frases.length-1){
        //trocando a pergunta da rodada
          this.rodada++

          //atualiza a frase da rodada
          this.atualizaFrase()

          //aumentando o progresso
          this.progresso += (100 / this.frases.length)

          //limpa a resposta
          this.resposta = ''
           
        }else{
          this.rodada = 0
          alert('O jogo acabou!')
        }

    }else{//se estiver errado
      alert('A tradução está incorreta')

      //removendo coração
    }
  }

  public atualizaFrase():void {
    this.rodadaFrase = this.frases[this.rodada]
  }
}
