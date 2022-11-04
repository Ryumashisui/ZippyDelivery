package com.capstone.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Cuisine NotFound Exception")

public class CuisineNotFoundException extends  Exception {
}
