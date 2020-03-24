import { FuncionarioAddComponent } from "./funcionario-add/funcionario-add.component";
import { LoginComponent } from "./login/login.component";
import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  { path: "", component: LoginComponent },
  { path: "adicionarFuncionario", component: FuncionarioAddComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
