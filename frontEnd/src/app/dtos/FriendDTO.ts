
export class FriendDTO {
    public friendName: string;
    public dOB: string;
    public picture: string;
    public bio: string;
    public typeOfRelation: string;
    public memories: string[];
    public images: string[];
    public id: any;

  
    constructor( ) {
      this.friendName = '';
      this.dOB = '';
      this.picture = '';
      this.bio = '';
      this.typeOfRelation = '';
      this.memories = [];
      this.images = [];
    }
  }
  