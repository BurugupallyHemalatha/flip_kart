import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }
topics=["angular","React","Vue"]
userModel=new User('vijay','vijay@email.com',9154329530,'','lbnagar','hyderabed','telangana',500074,'morning',true);
cli=true;//this is user to ddisplay
  ngOnInit() {

  }

  onClick(message:any){
    console.log(message)
  }

}
