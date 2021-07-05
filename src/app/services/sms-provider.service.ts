import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmsProviderService {

  constructor(private httpClient: HttpClient) { }


  importexcel(exceljsondata: File) {
    let httpHeaders = new HttpHeaders({
      "content-type":"application/json"
    });
    let options = {
      headers: httpHeaders
    };
    let body = {
      params: {
        'file': exceljsondata
      }
    };
    return  this.httpClient.post("http://localhost:4000/send-sms-via-upload",
      body).subscribe(()=> {
      console.log(body);
    });
  }

  sendSms(sms: any) {
    let httpHeaders = new HttpHeaders({
      "content-type":"application/json"
    });
    let options = {
      headers: httpHeaders
    };
    let body = {
        'sms': sms
    };
    return  this.httpClient.post("http://localhost:4000/send-sms",
      body).subscribe((res)=> {
      console.log(res);
    });
  }
}
