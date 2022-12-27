package com.galaxe.onemg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.onemg.dtos.UserDto;
import com.galaxe.onemg.entities.User;
import com.galaxe.onemg.enums.Role;
import com.galaxe.onemg.exceptions.UserAlreadyExistsException;
import com.galaxe.onemg.exceptions.UserCredentialsMismatchException;
import com.galaxe.onemg.exceptions.UserDoesNotExistsException;
import com.galaxe.onemg.mapper.UserMapper;
import com.galaxe.onemg.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserMapper userMapper;

	@Override
	public String addUser(UserDto userDto) throws UserAlreadyExistsException {

		User user = userRepository.findByCustomerEmail(userDto.getCustomerEmail());
		if (user != null) {
			throw new UserAlreadyExistsException("User already exists!!");
		}
		user = userMapper.convertToEntity(userDto);
		if (user.getUserRole() == null) {
			user.setUserRole(Role.USER);
		}
		userRepository.save(user);
		return "User Added Successfully";
	}

	@Override
	public UserDto loginRequest(String customerEmail, String customerPassword)
			throws UserDoesNotExistsException, UserCredentialsMismatchException {
		User user = userRepository.findByCustomerEmail(customerEmail);
		if (user != null) {
			String checkPassword = user.getCustomerPassword();
			if (checkPassword.equals(customerPassword)) {
				UserDto userInfo = userMapper.convertToDto(user);
				return userInfo;
			} else {
				throw new UserCredentialsMismatchException("Credential Mismatch");
			}
		} else {
			throw new UserDoesNotExistsException("User Does Not Exist");
		}
	}
}
