import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {SickInfo} from '../sickinfo.model';
@Injectable({
  providedIn: 'root'
})
export class SickinfoService {

  sickinfo:SickInfo[];
 
  uri = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  addTemp(sickinfo){
  
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    console.log(sickinfo);
    return this.http.post(`${this.uri}/sickinfo/add`,sickinfo,{headers :reqHeader});
  }

}
