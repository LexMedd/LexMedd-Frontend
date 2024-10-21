import { Component, OnInit } from '@angular/core';
import { Lawyer } from '../../../lawyers/model/lawyer.entity';
import { LawyerService } from '../../../lawyers/services/lawyer.service';
import { MatDialog } from '@angular/material/dialog';
import { LawyerProfileComponent } from '../../../lawyers/pages/lawyer-profile/lawyer-profile.component';
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  lawyers: Lawyer[] = [];
  filteredLawyers: Lawyer[] = [];
  constructor(private lawyerService: LawyerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadLawyers().then(r => console.log('Lawyers loaded'));
  }

  async loadLawyers() {
    try {
      const lawyers = await firstValueFrom(this.lawyerService.getLawyers());
      this.lawyers = lawyers;
      this.filteredLawyers = lawyers;
    } catch (error) {
      console.error('Error loading lawyers:', error);
    }
  }

  openLawyerProfile(lawyerId: number) {
    this.dialog.open(LawyerProfileComponent, {
      data: { id: lawyerId }
    });
  }
}
