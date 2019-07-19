import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatFormFieldModule,  MatInputModule, MatButtonModule } from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListViewComponent } from './components/team-list-view/team-list-view.component';
import { TeamMemberViewComponent } from './components/team-member-view/team-member-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListViewComponent,
    TeamMemberViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
