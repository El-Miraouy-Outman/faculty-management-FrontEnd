import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../login/serviceAuth/auth.service";

export class authorisationGuard implements CanActivate{
  constructor(private authService : AuthService,private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated) {
      console.log("hello mzyn ");

      return true;
    }
    else
    {
      this.router.navigateByUrl("/login");
      console.log("hello jjkjkjkjkjk");
      return false;
    }
  }

}
