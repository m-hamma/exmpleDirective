import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
  constructor(private _Route:ActivatedRoute,
                  private _Router:Router) { }
  ngOnInit(): void {
  }
  public redirection (user:User) :void{
    this._Router.navigate([user.id, user.name], {
     relativeTo: this._Route,
     queryParams: {name: user.name},
     //queryParamsHandling: 'merge',
     fragment : 'foo'
    });
  }

}
