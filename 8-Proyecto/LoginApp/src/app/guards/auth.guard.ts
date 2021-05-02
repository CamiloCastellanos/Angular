import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { }

  canActivate(): boolean {
    console.log("Guard")
    console.log(this.authService.estadoAutenticado());
    if (this.authService.estadoAutenticado()) {
      return true;
    }else{
      this.route.navigateByUrl('/login');
      return false;
    }
  }

}
