package com.galaxe.onemg.mapper;

import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.dtos.UserDto;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.entities.User;

public class UserMapperImpl implements UserMapper{

	@Override
	public User convertToEntity(UserDto userDto) {
		if(userDto==null) {
			return null;
		}
		User user = new User();
		user.setCustomerEmail(userDto.getCustomerEmail());
		user.setCustomerName(userDto.getCustomerName());
		user.setCustomerPassword(userDto.getCustomerPassword());
		user.setUserRole(userDto.getUserRole());
		return user;
	}

	@Override
	public UserDto convertToDto(User user){
		if(user==null) {
			return null;
		}
		UserDto userDto = new UserDto();
		userDto.setCustomerEmail(user.getCustomerEmail());
		userDto.setCustomerName(user.getCustomerName());
		userDto.setCustomerPassword(user.getCustomerPassword());
		userDto.setUserRole(user.getUserRole());
		return userDto;
	}

}
