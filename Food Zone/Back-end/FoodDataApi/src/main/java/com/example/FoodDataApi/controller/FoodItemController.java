package com.example.FoodDataApi.controller;


import com.example.FoodDataApi.entity.FoodItem;
import com.example.FoodDataApi.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/food-items")
public class FoodItemController {

    @Autowired
    private FoodItemService foodItemService;

    public FoodItemController(FoodItemService foodItemService) {
        this.foodItemService = foodItemService;
    }

    @PostMapping
    public ResponseEntity<String> addFoodItem(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile imageFile,
            @RequestParam("type") String type) throws IOException {
        FoodItem foodItem = foodItemService.saveFoodItem(name, description, imageFile, type);
        return ResponseEntity.status(HttpStatus.OK).body("Food item saved");
    }


    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getFoodItemImage(@PathVariable Long id) {
        Optional<FoodItem> foodItemOptional = foodItemService.getFoodItemById(id);

        if (foodItemOptional.isPresent()) {
            FoodItem foodItem = foodItemOptional.get();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + foodItem.getName() + ".jpg\"")
                    .body(foodItem.getImage());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
