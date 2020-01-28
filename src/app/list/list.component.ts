import {Component, Input, OnInit} from '@angular/core';
import List from '../models/list.model';
import ListItem from '../models/listItem.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  list: List;

  constructor() { }

  ngOnInit() {
  }

}
