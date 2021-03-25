import { Component, OnInit } from '@angular/core';
import {AlimentService} from  '../aliment.service';
@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent implements OnInit {
 public aliment:string='Aliment';
  constructor(private alimentService : AlimentService) { }

  ngOnInit(): void {
  }
   public addAliment() {
     this.alimentService.addOne(this.aliment);
   }
}
