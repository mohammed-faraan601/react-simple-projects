package com.example.FoodDataApi.service;

import com.example.FoodDataApi.entity.FoodItem;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public interface FoodItemService {


    public FoodItem saveFoodItem(String name, String description, MultipartFile imageFile, String type);
    public Optional<FoodItem> getFoodItemById(Long id);

}
