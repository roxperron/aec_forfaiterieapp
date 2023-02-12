import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from './package';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  API_URL='http://localhost/api-forfaits/api-forfait.php';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]>{
    return this.http.get<Package[]>(this.API_URL)
  }

  
    addPackage(packages:Package): Observable<void>{
      return this.http.post<void>(this.API_URL, packages, httpOptions);
    }

    deletePackage(id:number): Observable<void> {
      console.log(id);
      return this.http.delete<void>(`${this.API_URL}?id=${id}`, httpOptions);
      }
 


}
