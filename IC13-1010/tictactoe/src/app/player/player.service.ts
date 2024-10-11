import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}


