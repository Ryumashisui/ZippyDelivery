package com.capstone.service;

import com.capstone.exception.CuisineAlreadyExistException;
import com.capstone.exception.RestaurantAlreadyExistException;
import com.capstone.exception.RestaurantNotFoundException;
import com.capstone.model.Cuisine;
import com.capstone.model.Restaurant;

import java.util.List;

public interface RestaurantService {

    public  Restaurant addRestaurant(Restaurant restaurant) throws RestaurantAlreadyExistException;

    public  List<Restaurant> getAllRestaurants();

    public  List<Restaurant> getRestaurantByLocation(String location) throws RestaurantNotFoundException;
    public  List<Restaurant> getRestaurantByCuisineName(String cuisineName) throws RestaurantNotFoundException;
    public  List<Restaurant> getRestaurantByRestaurantName(String restaurantName) throws RestaurantNotFoundException;

    public  List<Restaurant> getRestaurantByLocationAndCuisineName(String location, String cuisineName) throws RestaurantNotFoundException;
    public  List<Restaurant> getRestaurantByLocationAndRestaurantName(String location, String restaurantName) throws RestaurantNotFoundException;

    Boolean deleteRestaurant(int restaurantId);

    Boolean addRestaurantCuisine(Cuisine cuisine, int restaurantId) throws  CuisineAlreadyExistException;

    Boolean deleteCuisine(int restaurantId, String cuisineName) throws RestaurantNotFoundException;

    List<Cuisine> getAllCuisineOfARestaurant(int restaurantId) throws RestaurantNotFoundException;

    Restaurant   getRestaurantById(int restaurantId) throws RestaurantNotFoundException;

}
