import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx"; //importação automática incompleta, precisa trocar Observable por Rx
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable() //para poder injetar em outros lugares
export class CategoriaService {

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`); //retorna a lista de categorias assim como o Postman faz
    }
} 