import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  passwordCon: string = "";
  usernameCon: string = "";

  usernameReg: string = "";
  passwordReg: string = "";

  constructor(private listService: ListService) { }

  register() {
    this.listService.register(this.usernameReg, this.passwordReg);
  }

  connexion() {
    this.listService.connexion(this.usernameCon, this.passwordCon);
  }


  ngOnInit() { }

}
