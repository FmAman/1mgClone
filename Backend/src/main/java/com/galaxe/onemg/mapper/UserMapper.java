package com.galaxe.onemg.mapper;

import org.mapstruct.Mapper;


import org.mapstruct.Mapping;

import com.galaxe.onemg.dtos.UserDto;
import com.galaxe.onemg.entities.User;

@Mapper
public interface UserMapper {
	@Mapping(target = "customerName", source = "UserDto.customerName")
	@Mapping(target = "customerEmail", source = "UserDto.customerEmail")
	@Mapping(target = "customerPassword", source = "UserDto.customerPassword")
	@Mapping(target = "userRole", source ="UserDto.userRole")
	public User convertToEntity(UserDto userDto);
	
	@Mapping(target = "UserDto.customerName", source="customerName")
	@Mapping(target = "UserDto.customerEmail", source="customerEmail")
	@Mapping(target = "UserDto.customerPassword", source="customerPassword")
	@Mapping(target = "UserDto.userRole", source ="userRole")

	public UserDto convertToDto(User user);

}
