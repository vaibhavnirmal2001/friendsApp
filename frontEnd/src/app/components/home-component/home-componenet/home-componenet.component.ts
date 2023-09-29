import { Component, Inject, OnInit } from '@angular/core';
import { FriendserviceService } from 'src/app/services/friendServices/friendservice.service';
import { FriendDTO } from 'src/app/dtos/FriendDTO';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home-componenet',
  templateUrl: './home-componenet.component.html',
  styleUrls: ['./home-componenet.component.scss']
})
export class HomeComponenetComponent implements OnInit {
  newFriend = new FriendDTO();
  friendForm!: FormGroup;
  friendData: FriendDTO | undefined;
  newMemory: string[] = [];
  friendRelationshipTypes: string[] = [
    'Close Friends / Best Friends',
    'Casual Friends',
    'Work Friends / School Friends',
    'Childhood Friends',
    'Online Friends',
    'Adventure Buddies',
    'Supportive Friends',
    'Inspiring Friends',
    'Hobby or Interest Friends',
    'Party Friends',
    'Long-Distance Friends',
    'Mentors or Role Models',
    'Travel Friends',
    'Family Friends',
    'Other'
  ];
  imagePreviews: string[] = [];
  editMode: boolean=false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private friendService: FriendserviceService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<HomeComponenetComponent>,

  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.editMode = this.data?true:false;
    this.friendData = this.data;
    this.createForm();
    this.friendService.getAllFriend().subscribe(response => {
      console.log(response.body);
    });
  }

 
  createForm() {
    this.friendForm = this.formBuilder.group({
      friendName: [this.friendData?.friendName || '', Validators.required],
      dOB: [this.friendData?.dOB || '', Validators.required],
      picture: [this.friendData?.picture || '', Validators.required],
      bio: [this.friendData?.bio || '', [Validators.required, Validators.minLength(10)]],
      typeOfRelation: [this.friendData?.typeOfRelation || '', Validators.required],
      memories: this.formBuilder.array([], Validators.required),
      images: ['']
    });
  
    if (this.friendData?.memories) {
      this.friendData.memories.forEach(memory => {
        this.addMemoryWithDefault(memory);
      });
    }
  
    if (this.friendData?.images) {
      this.imagePreviews = [...this.friendData.images];
    }
  }
  addMemoryWithDefault(value: string = '') {
    this.memories.push(new FormControl(value, Validators.minLength(10)));
  }
  

  closeDilogue(){
    this.dialogRef.close();
  }

  onSubmit() {
    debugger
    this.newFriend.friendName = this.friendForm.value.friendName;
    this.newFriend.dOB = this.friendForm.value.dOB;
    this.newFriend.picture = this.friendForm.value.picture;
    this.newFriend.bio = this.friendForm.value.bio;
    this.newFriend.typeOfRelation = this.friendForm.value.typeOfRelation;
    this.newFriend.memories = this.friendForm.value.memories;
    this.newFriend.images = this.imagePreviews;
    this.newFriend.id = this.friendData?.id;
    console.log(this.newFriend);
    if(this.editMode){
      this.friendService.updateFriend(this.newFriend).subscribe(res => {
        console.log(this.newFriend)
        console.log("successfull")
        this.dialogRef.close();
      });
    }else{
      this.friendService.createFriend(this.newFriend).subscribe(res => {
        console.log(this.newFriend)
        console.log("successfull")
        this.dialogRef.close();
      });
    }
    
    this.friendForm.reset();
  }

  get memories(): FormArray {
    return this.friendForm.get('memories') as FormArray;
  }
  
  addMemory() {
    this.memories.push(new FormControl('', Validators.minLength(10)));
  }

  removeMemory(index: number) {
    this.memories.removeAt(index);
  }
  
  onImagesChange(event: any): void {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const base64String = e.target.result;
          this.imagePreviews.push(base64String);
          this.friendForm.get('images')?.setValue(this.imagePreviews);
        };
        reader.readAsDataURL(file);
      }
    }
    console.log(this.imagePreviews)

  }
  
  onPictureChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      const file = files[0];
  
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.friendForm.get('picture')?.setValue(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  createImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreviews.push(e.target.result);
      this.friendForm.get('images')?.setValue(this.imagePreviews);
    };
    reader.readAsDataURL(file);
  }
  

  removeImage(image: string): void {
    const index = this.imagePreviews.indexOf(image);
    if (index !== -1) {
      this.imagePreviews.splice(index, 1);
    }
  }
  
}
