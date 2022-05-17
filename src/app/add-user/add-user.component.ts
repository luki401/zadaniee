import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  user = new User();
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    this.user.userId = Math.floor((Math.random() * 1000) + 1);
    this.userService.postUser(this.user).subscribe((data)=>{console.log(data)})
  }

}
