package com.galaxe.onemg.exceptions;

public class ItemAlreadyExistsException extends Exception {

	public ItemAlreadyExistsException(String message) {
		super(message);
	}

	public ItemAlreadyExistsException(String message, Throwable cause) {
		super(message, cause);
	}

}
