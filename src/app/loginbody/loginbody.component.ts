import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth-service/auth.service';
import { UserLogin } from '../Classes/UserLogin';

@Component({
  selector: 'app-loginbody',
  templateUrl: './loginbody.component.html',
  styleUrls: ['./loginbody.component.css']
})

export class LoginbodyComponent implements OnInit {

  user:UserLogin = new UserLogin();
  error = '';
  loading:boolean = false;

  constructor(	
  	private router:Router,
    private authService:AuthService
  ) { 

  }

  ngOnInit() {
  	this.authService.logout();
  }

  login() {
    this.loading = true;
    if (this.authService.login(this.user)){
    	//this.header.login();
    	this.router.navigate(['/condiciones']);
    }
    else{
    	this.user.login = "";
    	this.user.password = "";
    	this.loading = false;
    }
    //this.authService.login(this.user)
     // .subscribe(result => {
      //  if(result == true){
          //Cambiar header
        //  this.router.navigate(['/condiciones']);
        //}else{
         // this.error = 'Fallo en la autenticación';
         // this.loading = false;
        //}
      //}, e => {
        //this.error = 'Fallo en la autenticación';
        //this.loading = false;
      //});
  }

}
