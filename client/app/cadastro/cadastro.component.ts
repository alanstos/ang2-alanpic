import {Component, Input} from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    mensagem: string = '';
    router: Router;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute,router: Router) {
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: ['']
        });
        this.route = route;  
        this.router = router;
        this.route.params.subscribe(params =>  this.verificaIdParam(params) );
    }

    //cadastra ou atualiza
    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto)
      
        this.service.cadastra(this.foto)
                .subscribe((res) => {
                    this.mensagem = res.mensagem;
                    this.foto = new FotoComponent();
                    console.log('Foto salva com sucesso');
                    if(!res.inclusao) this.router.navigate(['']);
  
                }, erro =>  console.log(erro));
    }

    buscaPorId(id: string){
        this.service.buscaPorId(id)
            .subscribe(
                foto => this.foto = foto,
                erro => console.log(erro));    
    }

    verificaIdParam(params){
        let id = params['id'];

        if(id) {

            this.buscaPorId(id)
        }   
    }
}