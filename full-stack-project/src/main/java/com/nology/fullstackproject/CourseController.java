package com.nology.fullstackproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    CourseRepo courseRepo;

    @ExceptionHandler
    public ResponseEntity<String> handleException(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses() {
    List<Course> courseList = courseRepo.findAll();
    return ResponseEntity.status(HttpStatus.FOUND).body(courseList);
    }

    @GetMapping("/courses/:{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        Course foundCourse = courseRepo.findByid(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(foundCourse);
    }
}
