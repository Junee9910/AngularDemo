import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from './models';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) {}

    getMembers(){
     return this.http.get<Member[]>('http://localhost:4200');
    }
    
}
