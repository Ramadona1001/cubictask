import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  GetCatygories(): Observable<any> {
    // return this.httpClient.get<any>(`https://ngo.worxcis.com/WLS/ciswsapi.php?op=getmerchantcategories`);
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
