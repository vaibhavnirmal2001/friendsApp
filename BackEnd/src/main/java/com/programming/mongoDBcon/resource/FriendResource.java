package com.programming.mongoDBcon.resource;

import com.programming.mongoDBcon.model.FriendModel;
import com.programming.mongoDBcon.service.FriendService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/friend")
public class FriendResource {
    private final FriendService friendService;
    public FriendResource(FriendService friendService) {
        this.friendService = friendService;
    }

    @PostMapping
    public ResponseEntity addFriend(@RequestBody FriendModel friend){
        friendService.addFriend(friend);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<FriendModel>> getAllFriends(){
        return ResponseEntity.ok(friendService.getAllFriends());
    }
    @PutMapping
    public ResponseEntity updateFriend(@RequestBody FriendModel friend){
        friendService.updateFriend(friend);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/{name}")
    public ResponseEntity getFriendByName(@PathVariable String name){
        return ResponseEntity.ok(friendService.getFriend(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFriend(@PathVariable String id){
        friendService.deleteFriend(id);
        return ResponseEntity.noContent().build();
    }

}















