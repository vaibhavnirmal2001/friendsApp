import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FriendserviceService } from 'src/app/services/friendServices/friendservice.service';
import { HomeComponenetComponent } from '../../home-component/home-componenet/home-componenet.component';
import { ViewFriendComponent } from '../../viewFriend/view-friend/view-friend.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent implements OnInit {
  allFriends:any=[];
  constructor(
    private friendService: FriendserviceService,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getAllFriends();
  }

  getAllFriends(){
    this.allFriends=[];
    this.friendService.getAllFriend().subscribe(response => {
      console.log(response.body);
      this.allFriends=response.body;
    });
  }

  addFriend(){
    const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height = "85%";
      
      const dialogRef = this.dialog.open(HomeComponenetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.getAllFriends();
      });
  }

  viewFriend(friend:any){
    //open new screen to view friend
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height = "85%";
      dialogConfig.data=friend;
      const dialogRef = this.dialog.open(ViewFriendComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.getAllFriends();
      });
  }

}
