package com.capstone.repository;

import com.capstone.entity.FavouriteRestaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRestaurantRepository extends MongoRepository<FavouriteRestaurant, Integer> {
    public  FavouriteRestaurant findByEmailIdAndRestaurantName(String emailId, String restaurantName);
    public  List<FavouriteRestaurant> findAllByEmailId(String emailId);

    @Query("{'emailId' :{$in:[?0]},'restaurantName' :{$in:[?1]}}")
    public  boolean deleteByEmailIdAndRestaurantName(String emailId , String restaurantName);
}