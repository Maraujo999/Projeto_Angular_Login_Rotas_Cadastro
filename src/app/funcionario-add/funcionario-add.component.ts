import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-funcionario-add",
  templateUrl: "./funcionario-add.component.html",
  styleUrls: ["./funcionario-add.component.css"]
})
export class FuncionarioAddComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nome = "Michelson";
  adicionado: boolean = false;
  funcionarios = [];
  ultimoId = 0;

  // adicionar(nomeInput: string) {
  //   console.log(nomeInput);
  //   this.nome =  nomeInput;
  // }

  adicionar() {
    console.log(` Adicionando o ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}
