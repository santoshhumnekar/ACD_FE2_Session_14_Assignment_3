import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../promise.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {


  userData : Promise<any[]>;
  
  constructor(private _data : PromiseService) {}

  ngOnInit(){

    this.userData = this._data.getData();

  }

}
