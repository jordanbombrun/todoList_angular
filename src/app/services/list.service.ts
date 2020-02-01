import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface APIResponse {
  utilisateur: string;
  password: string;
  todoListes: Array<{
    name: string;
    elements: Array<string>;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  regResponse;
  conResponse;

  constructor(private http: HttpClient) {
  }

  register(usernameReg, passwordReg) {
    let url = 'http://92.222.69.104:80/todo/create/' + usernameReg + '/' + passwordReg;
    this.http.get(url).subscribe(
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
    this.http.get<APIResponse>(url, httpOptions)
      .subscribe(
        res => {
          console.log(res);
          console.log(res.todoListes);
        },
        msg => console.log(msg)
      );
  }
}
