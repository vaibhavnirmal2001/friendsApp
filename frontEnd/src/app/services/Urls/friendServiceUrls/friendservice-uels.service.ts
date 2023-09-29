import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendserviceUrlsService {

  private readonly baseFriendUrl='/api/friend';

  constructor() { }

  getAllFriendsUrl(){
    return this.baseFriendUrl;
  }
  getFriendByNameUrl(name:any){
    return this.baseFriendUrl+"/"+name;
  }

  createFriendUrl(){
    return this.baseFriendUrl;
  }

  deleteFriend(id:any){
    return this.baseFriendUrl+'/'+id;
  }

  getUpdateUrl(){
    return this.baseFriendUrl;

  }
}
