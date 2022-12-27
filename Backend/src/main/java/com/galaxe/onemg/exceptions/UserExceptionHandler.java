package com.galaxe.onemg.exceptions;

import java.time.ZoneId;

import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler {
	@ExceptionHandler(value = { UserAlreadyExistsException.class })
	public ResponseEntity<Object> handleUserExistsException(UserAlreadyExistsException e) {
		HttpStatus badrequest = HttpStatus.BAD_REQUEST;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, badrequest,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, badrequest);
	}
	@ExceptionHandler(value = { UserDoesNotExistsException.class })
	public ResponseEntity<Object> handleUserDoesNotExistsException(UserDoesNotExistsException e) {
		HttpStatus notfound = HttpStatus.NOT_FOUND;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, notfound,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, notfound);
	}
	@ExceptionHandler(value = { UserCredentialsMismatchException.class })
	public ResponseEntity<Object> handleUserMismatchException(UserCredentialsMismatchException e) {
		HttpStatus unauthorized = HttpStatus.UNAUTHORIZED;
		ExceptionEntity exceptionEntity = new ExceptionEntity(e.getMessage(), e, unauthorized,
				ZonedDateTime.now(ZoneId.of("Asia/Kolkata")));

		return new ResponseEntity<>(exceptionEntity, unauthorized);
	}
}
