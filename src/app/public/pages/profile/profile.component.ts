import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/base.service';
import { User } from '../../user/model/user.entity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  isLawyer: boolean = false;
  isDoctor: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.isLawyer = this.user.role === 'LAWYER';
    this.isDoctor = this.user.role === 'DOCTOR';
  }
}
