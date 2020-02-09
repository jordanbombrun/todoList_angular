import {Component, OnInit} from '@angular/core';
import List from '../models/list.model';
import {APIResponse, ListService} from '../services/list.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

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

  editList(indexList: number) {
    $('div.listToEdit' + indexList).show();
    $('div.inputListAdd' + indexList).hide();
  }

  editToAPI(indexList: number) {
    console.log(this.APIObject);

    //this.listService.postData(this.APIObject);
    $('div.listToEdit' + indexList).hide();
    $('div.inputListAdd' + indexList).show();
  }

  addListItem(indexList: number) {
    this.APIObject.todoListes[indexList].elements.push(this.newListItem);
    console.log(this.APIObject.todoListes[indexList]);
    this.listService.postData(this.APIObject);
    this.newListItem = "";

  }


}
