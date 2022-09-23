import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../model/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  private packageURL : string  = "";
  constructor(private http: HttpClient) {
    this.packageURL = 'http://localhost:9001/package';
  }

  public findAll(): Observable<Package[]> {
    return this.http.get<Package[]>(this.packageURL);
  }

  public findByID(pk_id: string){
    console.log(this.packageURL + '/' + pk_id)
    return this.http.get<Package>(this.packageURL + '/' + pk_id);
  } 

  public save(pkg: Package){
    return this.http.post<Package>(this.packageURL, pkg);
  }
}