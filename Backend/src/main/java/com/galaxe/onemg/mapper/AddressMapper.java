package com.galaxe.onemg.mapper;

import org.mapstruct.Mapper;



import org.mapstruct.Mapping;

import com.galaxe.onemg.dtos.AddressDto;
import com.galaxe.onemg.entities.Address;

@Mapper
public interface AddressMapper {
	@Mapping(target = "streetName", source = "AddressDto.streetName")
	@Mapping(target = "cityName", source = "AddressDto.cityName")
	@Mapping(target = "pincode", source = "AddressDto.pincode")
	@Mapping(target = "user", source ="AddressDto.user")	
	@Mapping(target = "stateName", source ="AddressDto.stateName")
	@Mapping(target = "customerName", source ="AddressDto.customerName")
	@Mapping(target = "phoneNumber", source ="AddressDto.phoneNumber")

	public Address convertToEntity(AddressDto addressDto);
	
	@Mapping(target = "AddressDto.streetName", source="streetName")
	@Mapping(target = "AddressDto.cityName", source="cityName")
	@Mapping(target = "AddressDto.pincode", source="pincode")
	@Mapping(target = "AddressDto.user", source ="user")
	@Mapping(target = "AddressDto.stateName", source ="stateName")
	@Mapping(target = "AddressDto.customerName", source ="customerName")
	@Mapping(target = "AddressDto.phoneNumber", source ="phoneNumber")

	public AddressDto convertToDto(Address address);

}
