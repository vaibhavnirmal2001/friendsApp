import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseTestComponent } from './components/expense-test/expense-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditExpenseComponent } from './components/edit-expense/edit-expense/edit-expense.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponenetComponent } from './components/home-component/home-componenet/home-componenet.component';
import { RouterModule, Routes } from '@angular/router';
import { AllFriendsComponent } from './components/allFriends/all-friends/all-friends.component';
import { ViewFriendComponent } from './components/viewFriend/view-friend/view-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTestComponent,
    EditExpenseComponent,
    HomeComponenetComponent,
    AllFriendsComponent,
    ViewFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
