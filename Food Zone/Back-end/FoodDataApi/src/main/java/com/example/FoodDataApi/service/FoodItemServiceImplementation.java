package com.example.FoodDataApi.service;

import com.example.FoodDataApi.entity.FoodItem;
import com.example.FoodDataApi.repo.FoodItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


public class FoodItemServiceImplementation {

    @Autowired
    private FoodItemRepo foodItemRepo;

    public FoodItem saveFoodItem(String name, String description, MultipartFile imageFile, String type) throws IOException {
        FoodItem foodItem = new FoodItem();
        foodItem.setName(name);
        foodItem.setDescription(description);
        foodItem.setType(type);

        if (imageFile != null && !imageFile.isEmpty()) {
            foodItem.setImage(imageFile.getBytes());
        }

        return foodItemRepo.save(foodItem);
    }

    public Optional<FoodItem> getFoodItemById(Long id) {
        return foodItemRepo.findById(id);
    }
}
