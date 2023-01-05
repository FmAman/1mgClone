package com.galaxe.onemg.mapper;

import com.galaxe.onemg.dtos.AddressDto;
import com.galaxe.onemg.entities.Address;

public class AddressMapperImpl implements AddressMapper{

	@Override
	public Address convertToEntity(AddressDto addressDto) {
		if(addressDto==null) {
			return null;
		}
		Address address = new Address();
		address.setCityName(addressDto.getCityName());
		address.setPincode(addressDto.getPincode());
		address.setStreetName(addressDto.getStreetName());
		address.setUser(addressDto.getUser());
		address.setCustomerName(addressDto.getCustomerName());
		address.setStateName(addressDto.getStateName());
		address.setPhoneNumber(addressDto.getPhoneNumber());

		return address;
	}

	@Override
	public AddressDto convertToDto(Address address){
		if(address==null) {
			return null;
		}
		AddressDto addressDto = new AddressDto();
		addressDto.setCityName(address.getCityName());
		addressDto.setPincode(address.getPincode());
		addressDto.setStreetName(address.getStreetName());
		addressDto.setUser(address.getUser());
		addressDto.setCustomerName(address.getCustomerName());
		addressDto.setStateName(address.getStateName());
		addressDto.setPhoneNumber(address.getPhoneNumber());

		return addressDto;
	}

}
