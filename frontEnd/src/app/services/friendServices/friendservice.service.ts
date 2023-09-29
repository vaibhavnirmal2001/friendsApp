import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/restAPI/rest-api.service';
import { FriendserviceUrlsService } from '../Urls/friendServiceUrls/friendservice-uels.service';

@Injectable({
  providedIn: 'root'
})
export class FriendserviceService {

  constructor(
    private restApiService: RestApiService,
    private friendUrl:FriendserviceUrlsService

  ) { }

  createFriend(payload:any) {
    return this.restApiService.post(
      this.friendUrl.createFriendUrl(),
      payload
    )
  }
  updateFriend(payload:any){
    return this.restApiService.put(
      this.friendUrl.getUpdateUrl(),
      payload
    )
  }
  getAllFriend() {
    return this.restApiService.get(
      this.friendUrl.getAllFriendsUrl()
    )
  }
  getFriendByName(name:any) {
    return this.restApiService.get(
      this.friendUrl.getFriendByNameUrl(name)
    )
  }
  deleteFriend(id: any) {
    return this.restApiService.delete(
      this.friendUrl.deleteFriend(id)
    )
  }
}
