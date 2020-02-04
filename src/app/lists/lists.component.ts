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

  editList(indexList: number) {
    $('li.list' + indexList).append('<h3 class="mt-2">Modifiez votre liste ici</h3>');
    $('li.list' + indexList).append('<div>Nom de liste : <input type="text" list="' + indexList + '" name="editListName" placeholder="Nouveau nom"></div><ul>');
    for (let i = 0; i < this.APIObject.todoListes[indexList].elements.length; i++) {
      let j = i + 1;
      $('li.list' + indexList).append('<li class="list-unstyled">Item ' + j + ' : <input type="text" name="editListName' + i +
        '" placeholder="Nouveau nom d\'item ' + j + '"></li>');
    }
    $('li.list' + indexList).append('</ul>');
    $('li.list' + indexList).append('<button class="btn btn-success" onclick="submitEdit(indexList)"> Ajouter la liste</button>');
  }

  /*addListItem() {
    let buttonValid = $(".list" + indexList + " .fa-check-square");
    buttonValid.replaceWith('<button class="fas fa-edit" (click)="editListItem(indexList, indexItem)"></button>');
  }*/


}
