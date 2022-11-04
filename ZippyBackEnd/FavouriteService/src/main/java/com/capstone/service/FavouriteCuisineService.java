package com.capstone.service;

import com.capstone.entity.FavouriteCuisine;
import com.capstone.exception.CuisineAlreadyExistException;
import com.capstone.exception.CuisineNotFoundException;

import java.util.List;

public interface FavouriteCuisineService {

    public  FavouriteCuisine addFavCuisine(FavouriteCuisine favouriteCuisine) throws CuisineAlreadyExistException, CuisineNotFoundException;

    public  List<FavouriteCuisine> getAllCuisine();

    public  List<FavouriteCuisine> getAllFavCuisineByEmailId(String emailId);

    public  boolean deleteByCuisineId(int cuisineId);

    public  boolean deleteByEmailId(String emailId);
}