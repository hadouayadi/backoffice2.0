import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environment/environment';
import { Admin } from '../shared/models/admin.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private apiUrl = environment.apiBaseUrl; // Replace with your actual API URL

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string) {
    const loginData = {
      "login": username,
      "password": password
    };

    // Make a POST request to your login API
    return this.http.post<Admin>(`${this.apiUrl}/AuthenticateAdmin`, loginData)
  }

  logout(): void {
    // Implement your logout logic
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    // Assuming your API provides an endpoint to check login status
    // Replace with the actual endpoint of your API
    if (localStorage.getItem("access") == "false")
      return false
    else
      return true
  }
}
