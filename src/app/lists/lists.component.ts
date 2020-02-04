import {Component, Input, OnInit, ViewChild} from '@angular/core';
import List from '../models/list.model';
import {APIResponse, ListService} from '../services/list.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[];
  newListItem: string;
  APIObject: APIResponse;
  newList: List;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.newList = new List('', []);
  }

  getData() {
    this.APIObject = this.listService.conObject;
  }

  addList() {
    this.APIObject.todoListes.push(this.newList);
    this.listService.postData(this.APIObject);
    // reset du formulaire
    $('#newListname').val('');
    $('.newListItem').val('');
  }

  deleteList(indexList: number) {
    this.APIObject.todoListes.splice(indexList, 1);
    this.listService.postData(this.APIObject);
  }

  deleteListItem(indexList: number, indexItem: number) {
    this.APIObject.todoListes[indexList].elements.splice(indexItem, 1);
    this.listService.postData(this.APIObject);
  }

  editListItem(indexList, indexItem) {
    let itemElement = $('.list' + indexList + ' #item' + indexItem);
    //let newInput = "<input type=\"text\"  [(ngModel)]=\"newListItem\" placeholder='" + itemElement.text() + "'>";
    //itemElement.replaceWith(newInput);
  }

  /*addListItem() {
    let buttonValid = $(".list" + indexList + " .fa-check-square");
    buttonValid.replaceWith('<button class="fas fa-edit" (click)="editListItem(indexList, indexItem)"></button>');
  }*/


}
