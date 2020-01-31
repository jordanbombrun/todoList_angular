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
  newListItem: string;

  constructor(private listService: ListService) {
  }

  ngOnInit() { }

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
