import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  signIn(login, password) {
    let httpHeaders = new HttpHeaders({
      "content-type":"application/json"
    });
    let options = {
      headers: httpHeaders
    };
    let body = {
      params: {
        'login': login,
        'password': password
      }
    };
    return  this.httpClient.post("http://localhost:3000/send-mail",
      body).subscribe(()=> {
      console.log(body);
    });
  }

signUp(login, password) {
  let httpHeaders = new HttpHeaders({
    "content-type":"application/json"
  });
  let options = {
    headers: httpHeaders
  };
  let body = {
    params: {
      'login': login,
      'password': password
    }
  };
  return  this.httpClient.post("http://localhost:8080/api/auth/signin",
    body).subscribe(()=> {
    console.log(body);
});
}


}
