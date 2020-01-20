import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthservisService {
  jsonUzytkownika: string;
  jsonParsowany: string;
  uzytkownik: string;
  constructor() { }

  loginUser(username: string, password: string) {
    if (username === 'Jarek' && password === 'password') {
      let user= {
        role: 'admin',
        id: 'Jarek'
      };
      localStorage.setItem('user', JSON.stringify(user));
      // console.log("kom z serwisu prwada");
      return true;
    } else {
      localStorage.removeItem("user");
      // console.log("kom z serwisu false");
      return false;
    }
  }




zalogowany() {
    const token = localStorage.getItem("user");
    console.log("token z serwisu " + token);
    if (token) {
    return true;
    } else {
    return false;
    }
  }
}


