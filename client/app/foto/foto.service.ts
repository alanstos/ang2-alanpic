import { Http, Headers,Response } from '@angular/http'
import { FotoComponent } from './foto.component'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    url: string = 'v1/fotos';
    http: Http;
    headers: Headers;

    constructor(http: Http){
        this.http = http
        // cria uma instância de Headers
        this.headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        this.headers.append('Content-Type', 'application/json');
    }

    lista() : Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map( res => res.json() );
    }

    //cadastra ou atualiza  
    cadastra(foto : FotoComponent) : Observable<MensagemCadastro>{

        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), 
            { headers: this.headers })
            .map( () =>  new MensagemCadastro('Foto alterada com sucesso', false) )
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers })
                .map(() => new MensagemCadastro('Foto incluída com sucesso', true) ); 
        }

        //return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
    }

    remove(foto: FotoComponent): Observable<Response> {
        console.log('service - remove')
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http
                    .get(this.url + '/' + id)
                    .map(res => res.json()); 
    }
}

export class MensagemCadastro {

    private _mensagem: string;
    private _inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean) {
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    public get mensagem(): string {
        return this._mensagem;
    }

    public get inclusao() : boolean {
        return this._inclusao;
    }
}