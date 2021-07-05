import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KycService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }}
