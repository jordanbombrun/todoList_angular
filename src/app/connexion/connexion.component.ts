import {Component, OnInit, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {APIResponse, ListService} from '../services/list.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  passwordCon: string = '';
  usernameCon: string = '';

  usernameReg: string = '';
  passwordReg: string = '';

  APIResponse: APIResponse;

  constructor(private listService: ListService) {
  }

  register() {
    this.listService.register(this.usernameReg, this.passwordReg);
  }

  connexion() {
    this.listService.connexion(this.usernameCon, this.passwordCon); //connexion à l'API
  }

  getData() {
   if (this.listService.conResponse) { // connexion réussie
      this.APIResponse = this.listService.conResponse;
      console.log(this.APIResponse);
    } else { // connexion échouée
      console.log('vide');
    }
  }

  ngOnInit() {
  }

}
