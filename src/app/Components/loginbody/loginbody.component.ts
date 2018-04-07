import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service/auth.service';
import { UserLogin } from '../../Classes/UserLogin';

@Component({
    selector: 'app-loginbody',
    templateUrl: './loginbody.component.html',
    styleUrls: ['./loginbody.component.css']
})

export class LoginbodyComponent implements OnInit {

    user:UserLogin = new UserLogin();
    error = '';
    isError:boolean = false; 
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
        this.authService.login(this.user).subscribe(
            result => {
                //Cambiar header
                this.isError = false;
                this.router.navigate(['/condiciones']);      
            }, 
            e => {
                this.error = e;
                this.loading = false;
                this.isError = true;
            }
        );
    }

}
