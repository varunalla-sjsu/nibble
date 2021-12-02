import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { User } from './models/user';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  currentUser?: User;
  title = 'nibbleproject';
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  ngOnInit() {
    this.userService.loadUser();
    this.userService.currentUser.subscribe((data: User) => {
      this.currentUser = data;
    }, (err) => {
      console.log('No user details');
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  checkAccess(allowed: string[]) {
    if (this.currentUser) {
      if (this.checkRole(allowed, this.currentUser.roles))
        return true;
      else
        return false;
    }
    else
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
