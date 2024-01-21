import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { user } from '../models/user';
import { environment } from '../../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class dataservice {
    private isAuthenticated: boolean = false;
    private apiUrl = environment.apiBaseUrl; // Replace with your actual API URL

    constructor(private http: HttpClient) { }

    private get JsonType() {

        const headers = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('access') });
        return headers;
    }


    getallparents() {
        // Make a POST request to your login API
        return this.http.get<user>(`${this.apiUrl}/user`, { headers: this.JsonType });
    }
}