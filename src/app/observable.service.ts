import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ObservableService {

   private _url : string = "https://jsonplaceholder.typicode.com/posts";
  constructor( private _http : Http) { }

  getDataa(){
    return this._http.get(this._url)
    .map((res:Response) => res.json()); 
  }


}
