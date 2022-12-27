package com.galaxe.onemg.exceptions;

public class UserDoesNotExistsException extends Exception {

	public UserDoesNotExistsException(String message) {
		super(message);
	}

	public UserDoesNotExistsException(String message, Throwable cause) {
		super(message, cause);
	}

}
