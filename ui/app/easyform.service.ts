import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EasyformService {
  
  private baseUrl = 'http://localhost:8099/TestService/mockquiz';

  constructor(private http:HttpClient) { }
 
 
 
  easy(): Observable<any> {
 
  // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('vaishu:vaishu') });
 
   return this.http.get(`${this.baseUrl}`+'/easy');
 
   }
   saveAnswers(answers: any): Observable<any> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('vaishu:vaishu') });
     console.log(answers);
     return this.http.post(`${this.baseUrl}`+'/saveAnswers',answers);
   }
 }
 