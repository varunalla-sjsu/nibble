import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  constructor(private httpClient:HttpClient) { 
      
  }
  loadUser() {
    this.httpClient.get('/api/user')
      .subscribe(
        (data:any) => this.setUser(data),
        err => this.removeUser()
      );
  }
  setUser(user:User){
      this.currentUserSubject.next(user);
  }
  removeUser() {
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
  }
  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
