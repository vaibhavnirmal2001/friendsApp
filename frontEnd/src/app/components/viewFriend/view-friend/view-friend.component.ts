import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FriendDTO } from 'src/app/dtos/FriendDTO';
import { HomeComponenetComponent } from '../../home-component/home-componenet/home-componenet.component';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.scss']
})
export class ViewFriendComponent implements OnInit {
friend:any;
  constructor(
    public dialogRef: MatDialogRef<ViewFriendComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.friend = this.data;
  }
  openEditFriendDialog(friend: FriendDTO) {
    const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height = "85%";
      dialogConfig.data = friend;
      
      const dialogRef = this.dialog.open(HomeComponenetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  
  openRemoveFriendDialog(friend: FriendDTO){

  }
  closeDilogue(){
    this.dialogRef.close();
  }
}
