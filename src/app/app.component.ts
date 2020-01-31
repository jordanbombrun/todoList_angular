import { Component } from '@angular/core';
import List from './models/list.model';
import {ListService} from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'toDoListes';

  constructor() { }

}
