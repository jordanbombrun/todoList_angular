import {Component, Input, OnInit} from '@angular/core';
import List from '../models/list.model';
import {APIResponse, ListService} from '../services/list.service';

import * as $ from "jquery";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[];
  newListItem: string;
  APIResponse: APIResponse;
  newList: List;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.newList = new List("", []);
  }

  getData() {
    this.APIResponse = this.listService.conResponse;
  }

  addList() {
    console.log(this.newList);
  }

  editListItem(indexList, indexItem) {
    let itemElement = $(".list" + indexList + " #item" + indexItem);
    //let newInput = "<input type=\"text\"  [(ngModel)]=\"newListItem\" placeholder='" + itemElement.text() + "'>";
    //itemElement.replaceWith(newInput);
  }

  /*addListItem() {
    let buttonValid = $(".list" + indexList + " .fa-check-square");
    buttonValid.replaceWith('<button class="fas fa-edit" (click)="editListItem(indexList, indexItem)"></button>');
  }*/

  deleteListItem(indexList, indexItem) {
  }

}
