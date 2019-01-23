import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
 

  constructor(private http: Http) { }
  getData(): Observable<any>{
    return this.http.get('http://localhost:3000/dashboard')
  }
 
}
