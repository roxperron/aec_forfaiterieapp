import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from './package';
import { Observable } from 'rxjs';

/* const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
} */

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  API_URL='http://localhost/api-forfaits/api-forfait.php';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]>{
    return this.http.get<Package[]>(this.API_URL)
  }

  /* 
    addPackage(package:Package): Observalbe<void>{
      return this.http.post<void>(this.API_URL, package, httpOptions);
    }
  */


}
