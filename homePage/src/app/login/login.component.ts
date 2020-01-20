import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthservisService } from '../authservis.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  hide = true;


  constructor(  private dialogRef: MatDialogRef<LoginComponent>,
                private loginService: AuthservisService,
                @Inject(MAT_DIALOG_DATA) public  data: any,
                private toastr: ToastrService
      ) { }

  ngOnInit() {
    this.ngForm = new FormGroup({
      FullName: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)


    });

    this.ngForm.patchValue({
      FullName: "Jarek",
      Password: "passwor",

    });
  }

  get FullName() {
    return this.ngForm.get("FullName");
  }

  get Password() {
    return this.ngForm.get("Password");
  }



  getErrorMessagePassword() {
    return this.Password.hasError("required") ? "You must enter a value" : "";
  }


    save() {
      if (this.loginService.loginUser(this.FullName.value, this.Password.value)) {

        this.toastr.success("OK",'User logged')


      } else {
        this.toastr.error("Wrong pass or usrename",'Try again')
        this.ngForm.patchValue({
          FullName: "",
          Password: "",

        });
      }

      this.dialogRef.close(this.ngForm.value);
    }


    close() {
      this.ngForm.patchValue({
        FullName: "",
        Password: "",
      });
      this.dialogRef.close(this.ngForm.value);
    }

}
