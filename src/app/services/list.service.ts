import {Injectable} from '@angular/core';
import List from '../models/list.model';
import ListItem from '../models/listItem.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  //lists$: Observable<List[]>;
  private url = 'http://92.222.69.104:80/todo/listes';
  httpOptions = {
    headers: new HttpHeaders({
      login: 'jordan',
      password: 'jordan'
    })
  }

  LISTS: List[] = [
    new List('Mécanique', [
      new ListItem('filtre'), new ListItem('vidange')
    ]),
    new List('Ménage', [
      new ListItem('Aspi'), new ListItem('Balaie'), new ListItem('Vaiselle')
    ]),
    new List('Courses', [
      new ListItem('Riz'), new ListItem('Pain'), new ListItem('Eau')
    ])
  ];

  constructor(private http: HttpClient) {  }


  /** GET lists from the API */
  getLists(): Observable<List[]> {
    //return of(this.LISTS); ## avec les données en dûre
    //console.log(this.http.get(this.url, this.httpOptions));
    console.log("########getLists() du service ######");
    return this.http.get<List[]>(this.url);
  }
}
