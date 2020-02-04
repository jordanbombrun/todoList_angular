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

  conObject: APIResponse;
  APIURL = 'http://92.222.69.104:80/todo/';

  constructor(private http: HttpClient) {
  }

  register(usernameReg, passwordReg) {
    let url = this.APIURL + 'create/' + usernameReg + '/' + passwordReg;
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
    let url = this.APIURL + 'listes';
    this.http.get<APIResponse>(url, httpOptions)
      .subscribe(
        res => {
          this.conObject = res;
        },
        msg => {
          console.log(msg);
          // détruit l'objet de réponse en cas d'erreur d'authentification
          this.conObject = new class implements APIResponse {
            password: string;
            todoListes: Array<{ name: string; elements: Array<string> }>;
            utilisateur: string;
          };
        }
      );
  }

  postData(list) {
    this.conObject.todoListes.push(list);

    let url = this.APIURL + 'listes';
    this.http.post<APIResponse>(url, this.conObject)
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}
