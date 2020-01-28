import { Component } from '@angular/core';
import List from './models/list.model';
import ListItem from './models/listItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'toDoListes';
  listName = "Nom de la nouvelle liste";
  lists = [
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

  addList() {
    this.lists.push(new List(this.listName, []));
    console.table(this.lists);
  }

}
