import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ImageService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getImages(limit) {
        return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=' + limit);
    }
}