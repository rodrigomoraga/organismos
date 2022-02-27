import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganismosService {

  private url: string = "https://test.defontana.com/";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}
