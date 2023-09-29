package com.programming.mongoDBcon.service;

import com.programming.mongoDBcon.model.FriendModel;
import com.programming.mongoDBcon.repository.FriendRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FriendService {
    private final FriendRepository friendRepository;

    public FriendService(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    public void addFriend(FriendModel friend){
        friendRepository.save(friend);
    }

    public List<FriendModel> getAllFriends(){
        return friendRepository.findAll();
    }

    public void updateFriend(FriendModel friend){
        FriendModel savedFriend = friendRepository.findById(friend.getId()).orElseThrow(() -> new RuntimeException(String.format("Cannot Find Expense by ID %s", friend.getId())));
        savedFriend.setFriendName(friend.getFriendName());
        savedFriend.setdOB(friend.getdOB());
        savedFriend.setPicture(friend.getPicture());
        savedFriend.setBio(friend.getBio());
        savedFriend.setTypeOfRelation(friend.getTypeOfRelation());
        savedFriend.setMemories(friend.getMemories());
        savedFriend.setImages(friend.getImages());
    }

    public FriendModel getFriend(String name){
        return friendRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException(String.format("Cannot Find Friend by Name - %s", name)));
    }

    public void deleteFriend(String id){
        friendRepository.deleteById(id);
    }
}
