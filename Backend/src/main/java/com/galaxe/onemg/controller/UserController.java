package com.galaxe.onemg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.onemg.dtos.UserDto;
import com.galaxe.onemg.exceptions.UserAlreadyExistsException;
import com.galaxe.onemg.exceptions.UserCredentialsMismatchException;
import com.galaxe.onemg.exceptions.UserDoesNotExistsException;
import com.galaxe.onemg.service.UserServiceImpl;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserServiceImpl userServiceImpl;

	@PostMapping("adduser")
	public ResponseEntity<?> addCustomer(@RequestBody UserDto userDto) throws UserAlreadyExistsException {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = userServiceImpl.addUser(userDto);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		} catch (UserAlreadyExistsException e) {
			throw new UserAlreadyExistsException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@GetMapping("loginRequest/{email}/{password}")
	public ResponseEntity<?> loginRequest(@PathVariable("email") String customerEmail,
			@PathVariable("password") String customerPassword)
			throws UserDoesNotExistsException, UserAlreadyExistsException, UserCredentialsMismatchException {
		ResponseEntity<?> responseEntity = null;
		try {
			UserDto message = userServiceImpl.loginRequest(customerEmail, customerPassword);
			responseEntity = new ResponseEntity<UserDto>(message, HttpStatus.ACCEPTED);
		} catch (UserDoesNotExistsException e) {
			throw new UserDoesNotExistsException(e.getMessage());
		} catch (UserCredentialsMismatchException e) {
			throw new UserCredentialsMismatchException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}

		return responseEntity;
	}
}
