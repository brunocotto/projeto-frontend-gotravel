import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AccountService } from 'src/app/account/shared/account.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token) {
            //o request é imutável, ou seja, não é possível mudar nada
            //faço um clone para conseguir alterar as props
            //passo o token de autentição no header
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            })
        }

        //retorno o request com o erro tratado
        return next.handle(request).pipe(
            catchError(this.handleError)
        );

    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //erro de client-side ou de rede
            console.error('Ocorreu um erro:', error.error.message);
        } else {
            //erro retornando pelo backend
            console.error(
                `Código do erro: ${error.status}, ` +
                `Error: ${JSON.stringify(error.error)}`
            )
        }
        //retornar um observable com uma mensagem amigável
        return throwError('Ocorreu um erro, tente novamente.')
    }
}
