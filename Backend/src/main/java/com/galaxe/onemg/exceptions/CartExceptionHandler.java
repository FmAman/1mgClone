package com.galaxe.onemg.exceptions;

import java.time.ZoneId;

import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CartExceptionHandler {
	
	@ExceptionHandler(value = { CartDoesNotExistException.class })
	public ResponseEntity<Object> handleUserDoesNotExistsException(CartDoesNotExistException e) {
		HttpStatus notfound = HttpStatus.NOT_FOUND;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, notfound,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, notfound);
	}
	
}
