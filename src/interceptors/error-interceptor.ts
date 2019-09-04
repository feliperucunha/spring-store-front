import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from '../services/storage.service';

@Injectable() //CÓDIGO INTEIRO MUITO ESPECÍFICO PARA FRAMEWORK, ENTÃO FOI COPIADO
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor: ");
            console.log(errorObj);

            switch(errorObj.status) { //tratando possibilidades de erros
                case 403:
                this.handle403(); //classe abaixo
                break;    
            }

            return Observable.throw(errorObj); //propraga o erro para o controlador
        }) as any;
    }

    handle403() {
        this.storage.setLocalUser(null);
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};