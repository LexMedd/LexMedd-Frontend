import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/model/user.entity';
import { BaseService } from '../../../shared/services/base.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  isEditMode: boolean = false;

  constructor(private userService: BaseService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    try {
      this.user = await firstValueFrom(this.userService.getCurrentUser());
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  async saveChanges() {
    try {
      this.user = await firstValueFrom(this.userService.update('users', this.user));
      this.isEditMode = false;
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  isLawyer(): boolean {
    return this.user.userType === 'lawyer';
  }

  isDoctor(): boolean {
    return this.user.userType === 'doctor';
  }
}
