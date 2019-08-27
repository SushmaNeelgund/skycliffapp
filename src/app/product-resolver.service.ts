import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { productResolver } from './productdisplay/product';
import { ProductdataService } from './productdisplay/productdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<productResolver> {

  constructor(private _productdata:ProductdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'something went wrong'})
      })
    );

  }
}
