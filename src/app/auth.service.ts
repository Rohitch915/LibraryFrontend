import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:4321/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ [key: string]: string }> {
    const body = {
      userName: username,
      userPassword: password
    };
  
    return this.http.post<{ [key: string]: string }>(
      'http://localhost:4321/login',
      body
    );
  }
  
  
  

  saveToken(username: string, password: string): void {
    const token = btoa(`${username}:${password}`);
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}