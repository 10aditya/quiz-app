import { Injectable } from '@angular/core';;
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email, password, type: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form=urlencoded');
    return this.http.post('https://unfrighted-steels.000webhostapp.com/api/login.php',
      { email: email, password: password, type: type }).pipe(map((res: any) => {
        return res;
      }));
  }

  register(name, email, password, type: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form=urlencoded');
    return this.http.post('https://unfrighted-steels.000webhostapp.com/api/register.php',
      { name: name, email: email, password: password, type: type }).pipe(map((res: any) => {
        return res;
      }));
  }

  // private _errorHandler(error:Response){
  //   console.error("Error Occured:"+error);
  //   return Observable.throw(error||"Some error occured in Server");
  // }
}
