import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import{ FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy{
  
  public frases:Array<Frase> = FRASES
  public instrucao:string = "Traduza a frase: "
  public resposta:string = ''

  public rodada:number = 0
  public rodadaFrase!:Frase

  public progresso:number = 0

  public tentativas:number = 3

  //@Output- "jogando" a variavel encerrarJogo para um escopo maior, podendo ser acessivel por seu pai
  @Output() 
    public eventoEncerramento:EventEmitter<string> = new EventEmitter()//emitindo um evento do tipo string

  constructor(){
    this.atualizaFrase()
  }
  ngOnDestroy(): void {
    
  }

  public atualizaResposta(retornoEvento:Event):void{
    //recuperando a infomação digitada na area de texto, esta que está contida no atributo target
    this.resposta = (<HTMLInputElement>retornoEvento.target).value
  }

  public verificarResposta():void {
    //this.atualizaFrase()
    //this.clearArea()

    if(this.rodadaFrase.frasePtBr == this.resposta){//se estiver correto

      //fluxo de vitoria do jogo
      if(this.rodada === this.frases.length){
        this.eventoEncerramento.emit("vitoria")
      }

    }else{//se estiver errado

      this.tentativas--
    
      //fluxo de derrota do jogo
      if(this.tentativas < 0){
        this.eventoEncerramento.emit("derrota")
      }
    }
  }

  public atualizaFrase():void {
    ///defne a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
    
    //limpando a resposta
    this.resposta = ''
  }
}
