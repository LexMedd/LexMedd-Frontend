import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {LawyerService} from "./lawyers/services/lawyer.service";
import { LawyerListComponent } from './public/pages/lawyer-list/lawyer-list.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LawyerProfileComponent } from './lawyers/pages/lawyer-profile/lawyer-profile.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { ProfileComponent } from './public/pages/profile/profile.component';
import { EditProfileComponent } from './public/pages/edit-profile/edit-profile.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    LawyerListComponent,
    PageNotFoundComponent,
    LawyerProfileComponent,
    FooterContentComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        NgOptimizedImage,
    ],
  providers: [
    provideAnimationsAsync(),
    LawyerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
