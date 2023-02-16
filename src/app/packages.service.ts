import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from './package';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

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
      packages.startdate = formatDate(packages.startdate, 'YYYY-MM-dd', 'en-US');
      packages.enddate = formatDate(packages.enddate, 'YYYY-MM-dd', 'en-US');
      console.log(packages.startdate);
      console.log(packages.enddate);
      return this.http.post<void>(this.API_URL, packages, httpOptions);
    }
    
    updatePackage(packages:Package): Observable<void>{
      return this.http.put<void>(`${this.API_URL}?id=${packages.id}`, packages, httpOptions);
    }

    deletePackage(id:number): Observable<void> {
      console.log(id);
      return this.http.delete<void>(`${this.API_URL}?id=${id}`, httpOptions);
      }
 


}
