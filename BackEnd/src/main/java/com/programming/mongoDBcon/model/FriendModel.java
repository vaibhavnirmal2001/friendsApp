package com.programming.mongoDBcon.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;
@Document("friendsCollection")
public class FriendModel {
    @Id
    private String id;
    @Field(name = "name")
    @Indexed(unique = true)
    private String friendName;
    @Field(name = "dob")
    private String dOB;
    @Field(name = "pic")
    private String picture;
    @Field(name = "bio")
    private String bio;
    @Field(name = "relationType")
    private String typeOfRelation;
    @Field(name = "memories")
    private List<String> memories;

    @Field(name = "images")
    private List<String> images;





    public FriendModel(String id, String friendName, String dOB, String picture, String bio, String typeOfRelation, List<String> memories, List<String> images) {
        this.id = id;
        this.friendName = friendName;
        this.dOB = dOB;
        this.picture = picture;
        this.bio = bio;
        this.typeOfRelation = typeOfRelation;
        this.memories = memories;
        this.images = images;
    }

    public String getId() {
        return id;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getFriendName() {
        return friendName;
    }

    public void setFriendName(String friendName) {
        this.friendName = friendName;
    }

    public String getdOB() {
        return dOB;
    }

    public void setdOB(String dOB) {
        this.dOB = dOB;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getTypeOfRelation() {
        return typeOfRelation;
    }

    public void setTypeOfRelation(String typeOfRelation) {
        this.typeOfRelation = typeOfRelation;
    }

    public List<String> getMemories() {
        return memories;
    }

    public void setMemories(List<String> memories) {
        this.memories = memories;
    }

    @Override
    public String toString() {
        return "FriendModel{" +
                "id='" + id + '\'' +
                ", friendName='" + friendName + '\'' +
                ", dOB='" + dOB + '\'' +
                ", picture='" + picture + '\'' +
                ", bio='" + bio + '\'' +
                ", typeOfRelation='" + typeOfRelation + '\'' +
                ", memories=" + memories +
                ", images=" + images +
                '}';
    }
}
