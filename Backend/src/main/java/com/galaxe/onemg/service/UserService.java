package com.galaxe.onemg.service;

import com.galaxe.onemg.dtos.UserDto;
import com.galaxe.onemg.enums.Role;
import com.galaxe.onemg.exceptions.UserAlreadyExistsException;
import com.galaxe.onemg.exceptions.UserCredentialsMismatchException;
import com.galaxe.onemg.exceptions.UserDoesNotExistsException;

public interface UserService {
public String addUser(UserDto userDto)throws UserAlreadyExistsException;
public UserDto loginRequest(String customerEmail,String customerPassword)throws UserDoesNotExistsException,UserCredentialsMismatchException;

}
