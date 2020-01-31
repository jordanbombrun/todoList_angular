import { Injectable } from '@angular/core';
import List from '../models/list.model';
import ListItem from '../models/listItem.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  LISTS: List[] = [
    new List("Mécanique", [
      new ListItem("filtre"), new ListItem("vidange")
    ]),
    new List("Ménage", [
      new ListItem("Aspi"), new ListItem("Balaie"), new ListItem("Vaiselle")
    ]),
    new List("Courses", [
      new ListItem("Riz"), new ListItem("Pain"), new ListItem("Eau")
    ])
  ];

  constructor() { }

  getLists(): List[] {
    return this.LISTS;
  }
}
