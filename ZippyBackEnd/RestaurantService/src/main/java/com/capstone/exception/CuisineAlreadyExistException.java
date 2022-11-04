package com.capstone.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Cuisine already Exist")


public class CuisineAlreadyExistException extends Throwable {
}
