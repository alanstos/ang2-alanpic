import {Component} from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import {PainelComponent} from '../painel/painel.component'

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = ''

    constructor(service: FotoService) {

        this.service = service;

        this.service.lista()
        .subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro)
        );

    }

    remove(foto: FotoComponent, painel: PainelComponent): void {
        console.log('foto' + foto)
        this.service.remove(foto)
            .subscribe( 
                fotos => {
                    painel.fadeOut(() => { 
                        console.log('foto removida com sucesso')
                        this.mensagem = 'Foto removida com sucesso'
                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos; 
                    })

                },
                erro => console.log(erro)
             )
    }

} 

