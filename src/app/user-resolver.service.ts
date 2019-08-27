import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserResolved } from './userdisplay/user';
import { UserdataService } from './userdisplay/userdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserResolved> {


  constructor(private _userdata:UserdataService) { }
  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
    return this._userdata.getAllUsers().pipe(
      map(x=> ({data:x,errormessage:''})),
      catchError(err=>{
        console.log(err);
        return of({product:null,errorMessage:err.message});

      } )
      );

  }
}
