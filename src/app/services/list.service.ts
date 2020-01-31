import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  register(usernameReg, passwordReg) {
    let url = 'http://92.222.69.104:80/todo/create/' + usernameReg + '/' + passwordReg;
    return this.http.get(url).subscribe(
      res => console.log(res),
      msg => console.log(msg)
    );
  }

  connexion(usernameCon, passwordCon) {
    const httpOptions = {
      headers: new HttpHeaders({
        login: usernameCon,
        password: passwordCon
      })
    };
    let url = 'http://92.222.69.104:80/todo/listes';
    return this.http.get(url, httpOptions)
      .subscribe(
        res => console.log(res),
        msg => console.log(msg)
      );
  }
}
