import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8099/TestService/UserPortal';  
  private baseUrl1 = 'http://localhost:8099/Mockquiz/UserPortal'; 
  
  constructor(private http:HttpClient) { }  
  getAllUsers(): Observable<any> {  
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:password') });
    return this.http.get(`${this.baseUrl}`+'/getAllUsers');  
  }  
  
  saveUser(user: object): Observable<object> { 
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('vaishu:vaishu') }); 
    return this.http.post(`${this.baseUrl}`+'/saveUser', user);  
  }  
  deleteUser(username:string): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);  
  }  
  
  findOneInAll1(username: string): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll1/${username}`);  
  }  
  findByUsernameAndPassword1(username: string,password :string): Observable<User> {  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:password') });
   
    return this.http.get<User>(this.baseUrl1+'/findByUsernameAndPassword/'+username+'/'+password);  
  }  
  
  updateUser(username: string, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);  
  }  
}



