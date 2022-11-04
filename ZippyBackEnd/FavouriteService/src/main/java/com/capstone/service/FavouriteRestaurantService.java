package com.capstone.service;

import com.capstone.entity.FavouriteRestaurant;
import com.capstone.exception.RestaurantAlreadyExistException;

import java.util.List;

public interface FavouriteRestaurantService {
    public  FavouriteRestaurant addFavRestaurant(FavouriteRestaurant favouriteRestaurant) throws RestaurantAlreadyExistException;

    public  List<FavouriteRestaurant> getAllFavRestaurant();

    public  List<FavouriteRestaurant> getAllFavRestaurantByEmailId(String emailId);


    public  boolean deleteByRestaurantId(int restaurantId);
}