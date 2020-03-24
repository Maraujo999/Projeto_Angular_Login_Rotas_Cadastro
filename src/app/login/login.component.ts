import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: '';
  msg: boolean = false;
  msg1: boolean = false;
  login = 'michelson';
  password = "123";
  constructor(private router: Router, private route: ActivatedRoute) {}

  valiaUser(login: string, password: string) {
    if (this.login === login && this.password === password) {
      this.router.navigate(['/adicionarFuncionario']);
    } else if (login === '' && password === '') {
      this.msg1 = true;
      console.log('CHEGUEI');
    } else {
      this.msg = true;
      console.log('CHEGUEI no 222222');
    }
  }
}
