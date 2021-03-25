import { Component, OnInit } from '@angular/core';
import {AlimentService} from  '../aliment.service';
@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {
   public user = {id:1,name:'lala'};
   public aliments:string[];
    constructor(private alimentService : AlimentService) {
    this.aliments = this.alimentService.aliments;
    }
  public removeAliment (index:number){
  this.alimentService.rmoveOne(index);
  }
  ngOnInit(): void {
  }

}
