import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

   userDataa = [];
  
  constructor(private _data : ObservableService) {}

  ngOnInit(){

    this._data.getDataa()
    .subscribe(res => this.userDataa = res);

  }

}
