import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{
  constructor() {
  }

  canActivate() :boolean | Observable<boolean>{
  return true;}
   canActivateChild() :boolean | Observable<boolean>{
    return false;}
}
