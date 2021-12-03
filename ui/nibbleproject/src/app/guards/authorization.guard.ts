import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  currentUser?: User;
  constructor(private userService: UserService, public router: Router) {
    this.userService.loadUser();
    this.userService.currentUser.subscribe((data: User) => {
      this.currentUser = data;
    }, (err) => {
      console.log('No user details');
    });
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    let allowedRoles = route.data.expectedRole as string[];
    let roles: string[] = [];
    if (this.currentUser) {
      roles = this.currentUser.roles??[];
    }
    if (this.checkRole(allowedRoles, roles)) {
      console.log('allowed')
      return true;
    }
    else {
      this.router.navigate(['']);
    }

    return false;
  }
  checkRole(allowed: string[], current: string[]): boolean {
    let roles: any = {};
    for (let i = 0; i < current.length; i++) {
      roles[current[i]] = true;
    }
    for (let i = 0; i < allowed.length; i++) {
      if (roles[allowed[i]]) {
        return true;
      }
    }
    return false;
  }
}
