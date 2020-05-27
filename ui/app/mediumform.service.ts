import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediumformService {
  
  private baseUrl = 'http://localhost:8099/TestService/mockquiz';

  constructor(private http:HttpClient) { }
 
 
 
  medium(): Observable<any> {
 
  // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('vaishu:vaishu') });
 
   return this.http.get(`${this.baseUrl}`+'/medium');
 
   }
   saveAnswers(answers: any): Observable<any> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('vaishu:vaishu') });
     console.log(answers);
     return this.http.post(`${this.baseUrl}`+'/saveAnswers',answers);
   }
 }
 