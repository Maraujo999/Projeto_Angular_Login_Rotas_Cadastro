import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { FuncionarioCardComponent } from "./funcionario-card/funcionario-card.component";
import { LoginComponent } from "./login/login.component";
import { FuncionarioAddComponent } from "./funcionario-add/funcionario-add.component";

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    LoginComponent,
    FuncionarioAddComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
