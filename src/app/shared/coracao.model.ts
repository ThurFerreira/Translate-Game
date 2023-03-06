export class Coracao {
    public urlCoracaoVazio:string
    public urlCoracaoCheio:string

    constructor(public cheio:boolean) {
       this.urlCoracaoCheio = "/assets/coracao_cheio.png"
         this.urlCoracaoVazio = "/assets/coracao_vazio.png"
    }

    public exibeCoracao():string {
        if(this.cheio){
           return this.urlCoracaoCheio

        }else{
            return this.urlCoracaoVazio
            
        }
    }
}