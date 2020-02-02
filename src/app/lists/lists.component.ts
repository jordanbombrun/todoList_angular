import {Component, Input, OnInit} from '@angular/core';
import List from '../models/list.model';
import {APIResponse, ListService} from '../services/list.service';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[];
  listName = 'nom';
  newListItem: string;
  APIResponse: APIResponse;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
  }

  getData() {
    this.APIResponse = this.listService.conResponse;
  }

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
