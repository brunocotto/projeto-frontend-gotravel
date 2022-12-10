import { environment } from './../../environments/environment';
import { Travel } from './../models/travel.model';
import { map, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  //variável criada para armazenar a URL da rota de produto
  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, ' ', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }
  //Mandando uma requisição HTTP para o backend
  //Utilizando o modelo de produto criado no product.model.ts
  //Notação generics => Observable<Travel> => Retorna um observable do tipo travel
  create(travel: Travel): Observable<Travel> {
    console.log(JSON.stringify(travel))
    return this.http.post<Travel>(`${environment.api}/travel/create`, travel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //lendo dados do back
  read(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${environment.api}/travel`,).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //search for ID
  readById(_id: string): Observable<Travel> {
    //interpolação da rota de produtos com o ID, retornando um Observable
    return this.http.get<Travel>(`${environment.api}/travel/${_id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //update for ID
  update(travel: Travel): Observable<Travel> {
    return this.http.patch<Travel>(`${environment.api}/travel/${travel._id}`, travel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //tratamento de erro
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
