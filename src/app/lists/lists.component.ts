import {Component, OnInit} from '@angular/core';
import List from '../models/list.model';
import {ListService} from '../services/list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[];
  listName = 'nom';
  newListItem: String;
  listTest: Observable<List[]>;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listTest = this.listService.getLists();
    console.log('########getLists() du service dans le component List ######');
    console.log("listTest est : ");
    console.log(this.listTest);
  }

  /*getLists(): void {
    this.listService.getLists().subscribe(lists => this.lists = lists);
  }*/

  addList() {
    this.lists.push(new List(this.listName, []));
  }

  editListItem() {
  }

  deleteListItem() {
  }

  createListItem() {
  }

}
