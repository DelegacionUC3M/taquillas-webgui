import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,	
        private router:Router,
        private authService:AuthService
    ) { 

    }

    ngOnInit() {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/condiciones';
    }

    login() {
        this.loading = true;
        this.authService.login(this.user).subscribe(
            result => {
                //Cambiar header
                this.isError = false;
                this.router.navigateByUrl(this.returnUrl);      
            }, 
            e => {
                this.error = e;
                this.loading = false;
                this.isError = true;
            }
        );
    }

}
