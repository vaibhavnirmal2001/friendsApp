package com.programming.mongoDBcon.repository;

import com.programming.mongoDBcon.model.FriendModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FriendRepository extends MongoRepository<FriendModel, String> {
    @Query("{'name': ?0}")
    Optional<FriendModel> findByName(String name);

}
