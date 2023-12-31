import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth : AuthService, private router : Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean{
      const token = this.auth.getToken();
      if(token){
        return true;
      }else{
        this.router.navigateByUrl('/auth/login')
        return false;
      }
  }
}
