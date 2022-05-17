import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';

const link = 'http://localhost:3000/users'
const headers = {
  headers:  new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{

    return this.http.get<User[]>(link)

}
  getUser(id:number):Observable<User>{
    return this.http.get<User>(link + id)
  }
  postUser(user:User){
    return this.http.post(link, user, headers)
  }
  deleteUser(id:number){
    return this.http.delete(link + id, headers)
  }
}
