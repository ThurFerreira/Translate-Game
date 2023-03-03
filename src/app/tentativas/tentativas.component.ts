import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent {
  public coracaoCheio:string = "/assets/coracao_cheio.png"
  public coracaoVazio :string = "/assets/coracao_vazio.png"

}
