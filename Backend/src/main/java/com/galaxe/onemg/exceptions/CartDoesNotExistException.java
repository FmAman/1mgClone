package com.galaxe.onemg.exceptions;

public class CartDoesNotExistException extends Exception {

	public CartDoesNotExistException(String message) {
		super(message);
	}

	public CartDoesNotExistException(String message, Throwable cause) {
		super(message, cause);
	}

}
