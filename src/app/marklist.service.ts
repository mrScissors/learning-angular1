import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from './marklist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarklistService {

  private _url: string = "http://localhost:3000/Student";
  constructor(private http: HttpClient) { }

  getMarks():Observable<Istudent[]>{
      return this.http.get<Istudent[]>(this._url);
  }
  
}
