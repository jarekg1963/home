import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormControl } from "@angular/forms";
import { AuthservisService } from "./authservis.service";
import { FirstComponent } from './menuPages/first/first.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit  {
  title = "homepage";
  uzytkownik: string;
  page = {
    title: "Home",
    subtitle: "Welcome Home!",
    content: "Some home content.",
    image: "assets/bg00.jpg"
  };
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
  //   h.test(window.location.host)
  // );
  mode = new FormControl("over");
  daneLogin: any;





  constructor(
    public dialog: MatDialog,
    private atuthService: AuthservisService
  ) {}

  ngOnInit() {
    document.body.classList.add('bg-img');
    if (this.atuthService.zalogowany) {
      console.log('Zalogowany z app');
    } else {
      console.log('NIE !!!!!!! Zalogowany z app');
    }

  }

  login() {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "550px";
  dialogConfig.height ="450px";
  dialogConfig.data =  {FullName: "" , Password: ""}



  const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(
    data => {this.uzytkownik = data.FullName;
    }

);
}


openFirst() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "1050px";
  dialogConfig.height ="650px";

  const dialogRef = this.dialog.open(FirstComponent, dialogConfig);

}

}
