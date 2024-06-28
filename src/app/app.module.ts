import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Adjust path as necessary

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user/:id', component: UserDetailsComponent }, // Route for user details with parameter
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
