package com.galaxe.onemg.exceptions;

import java.time.ZoneId;

import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ItemExceptionHandler {
	
	@ExceptionHandler(value = { ItemDoesNotExistException.class })
	public ResponseEntity<Object> handleUserDoesNotExistsException(ItemDoesNotExistException e) {
		HttpStatus notfound = HttpStatus.NOT_FOUND;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, notfound,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, notfound);
	}
	@ExceptionHandler(value = { ItemAlreadyExistsException.class })
	public ResponseEntity<Object> handleUserDoesNotExistsException(ItemAlreadyExistsException e) {
		HttpStatus conflict = HttpStatus.CONFLICT;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, conflict,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, conflict);
	}
	
}
