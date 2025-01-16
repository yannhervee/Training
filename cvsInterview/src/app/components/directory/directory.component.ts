import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserserviceService } from '../../services/userservice.service';
import { User } from '../../services/interfaces/user';

@Component({
  selector: 'app-directory',
  imports: [CommonModule, UserComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent implements OnInit{
  constructor(private userService: UserserviceService){}
  users : User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      console.log("result ", response);
      this.users = response;
    })
  }

}
