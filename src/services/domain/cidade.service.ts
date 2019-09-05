import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx"; //importação automática incompleta, precisa trocar Observable por Rx
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable() //para poder injetar em outros lugares
export class CidadeService {

    constructor(public http: HttpClient) {
    }

    findAll(estado_id: string): Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`); //retorna a lista de categorias assim como o Postman faz
    }
} 