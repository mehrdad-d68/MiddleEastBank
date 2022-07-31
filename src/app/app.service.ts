import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl='https://reqres.in/api'
  constructor(private http:HttpClient) { }

  getAllData(params?:HttpParams){
    return this.http.get(`${this.baseUrl}/users`,{params:params})
  }
  getUser(id:number){
    return this.http.get(`${this.baseUrl}/users/${id}`)
  }
}
