package com.nology.fullstackproject;

import javax.persistence.EntityNotFoundException;

public class CourseNotFoundException extends EntityNotFoundException {
    public CourseNotFoundException() {
        super("Course has not been found");
    }
}

