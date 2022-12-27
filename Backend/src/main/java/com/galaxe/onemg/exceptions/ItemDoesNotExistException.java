package com.galaxe.onemg.exceptions;

public class ItemDoesNotExistException extends Exception {

	public ItemDoesNotExistException(String message) {
		super(message);
	}

	public ItemDoesNotExistException(String message, Throwable cause) {
		super(message, cause);
	}

}
