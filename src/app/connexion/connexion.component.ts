import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  register() {
    console.log("fct inscription : ");
    let url = "http://92.222.69.104:80/todo/create/jordan" + "/jordan";
    return this.http.get(url).subscribe(
      res => console.log(res),
      msg => console.log(msg)
    );
  }

  connexion() {
    console.log("fct connexion : ");
    const httpOptions = {
      headers: new HttpHeaders({
        login : "jordan",
        password : "jordan"
      })
    };
    let url = "http://92.222.69.104:80/todo/listes";
    return this.http.get(url, httpOptions)
    .subscribe(
      res => console.log(res),
      msg => console.log(msg)
    );
  }


  ngOnInit() { }

}
