package com.galaxe.onemg.exceptions;

public class UserCredentialsMismatchException extends Exception {

	public UserCredentialsMismatchException(String message) {
		super(message);
	}

	public UserCredentialsMismatchException(String message, Throwable cause) {
		super(message, cause);
	}

}
