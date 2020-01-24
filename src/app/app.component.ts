import { Component } from '@angular/core';
import List from './models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'toDoListes';
  listName = "Nom de la nouvelle liste";
  lists = [
    new List("Mécanique"),
    new List("Ménage"),
    new List("Courses"),
    new List("Projet")
  ];

  addList() {
    this.lists.push(new List(this.listName));
    console.table(this.lists);
  }

}
