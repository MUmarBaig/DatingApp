import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44374/api/auth/';

constructor(private http: HttpClient) { }


login(model: any) {
 // return new Promise((resolve, reject) => {
    // const headerContent = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // });
  //   this.http.post(this.baseUrl + 'login', model).subscribe
  //     ((response: any) => {
  //       resolve(response);
  //       localStorage.setItem('token', response.token);
  //     },
  //       (error: any) => {
  //         reject(error);
  //       });
  // });
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if ( user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

}
