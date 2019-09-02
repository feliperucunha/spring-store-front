import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper(); //extrai o email do token

    constructor(public http: HttpClient, public storage: StorageService) {
        
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text' //evita erro de parse Json
            });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7); //pega somente o token
        let user : LocalUser = {
            token : tok,
            email : this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}