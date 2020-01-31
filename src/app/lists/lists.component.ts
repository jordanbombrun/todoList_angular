import { Component, OnInit } from '@angular/core';
import List from '../models/list.model';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[];
  listName = "nom";
  newListItem: String;


  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.listService.getLists().subscribe(lists => this.lists = lists);
  }

  addList() {
    this.lists.push(new List(this.listName, []));
  }

  editListItem() {}

  deleteListItem() {}

  createListItem() {}

}
