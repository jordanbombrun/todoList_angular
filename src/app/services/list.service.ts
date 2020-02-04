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

  conResponse: APIResponse;

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
          this.conResponse = res;
        },
        msg => {
          console.log(msg);
          // détruit l'objet de réponse en cas d'erreur d'authentification
          this.conResponse = new class implements APIResponse {
            password: string;
            todoListes: Array<{ name: string; elements: Array<string> }>;
            utilisateur: string;
          };
        }
      );
  }
}

  /* requete ajax POST
  $.ajax({
        type: 'post',
        data: JSON.stringify(objToBeSend),
        contentType: "application/json; charset=utf-8",
        url: "http://92.222.69.104:80/todo/listes"
    }).done(function(data) {*/
