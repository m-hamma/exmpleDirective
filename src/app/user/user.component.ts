import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public id:string;
  public name:string;
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = paramMap.get('id');
      this.name = paramMap.get('name');
    });
  }
}
