import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx"; //importação automática incompleta, precisa trocar Observable por Rx
import { EstadoDTO } from "../../models/estado.dto";

@Injectable() //para poder injetar em outros lugares
export class EstadoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<EstadoDTO[]>  {
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}