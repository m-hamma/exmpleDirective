import { Component, OnInit } from '@angular/core';
interface User {
  id:number,
  name:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public users : User[] = [
                          {
                            id:1,
                            name:"hamma"
                          },
                          {
                            id:2,
                            name:"autre"
                          }
                        ];
  constructor() { }
  ngOnInit(): void {
  }

}
