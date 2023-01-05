package com.galaxe.onemg.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.onemg.dtos.AddressDto;
import com.galaxe.onemg.entities.Address;
import com.galaxe.onemg.entities.User;
import com.galaxe.onemg.mapper.AddressMapper;
import com.galaxe.onemg.repository.AddressRepository;
import com.galaxe.onemg.repository.UserRepository;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	AddressRepository addressRepository;

	@Autowired
	AddressMapper addressMapper;

	@Autowired
	UserRepository userRepository;

	@Override
	public String addUserAddress(Address address, String customerEmail) {
		// TODO Auto-generated method stub
		User user = userRepository.findByCustomerEmail(customerEmail);
		if (user != null)
			address.setUser(user);
		addressRepository.save(address);
		return "Address Added";
	}

	@Override
	public String editUserAddress(Address address, String customerEmail, String customerName) {
		// TODO Auto-generated method stub
		User user = userRepository.findByCustomerEmail(customerEmail);
		Address userAddress = addressRepository.findByCustomerName(customerName);

		if (user.getCustomerEmail().equalsIgnoreCase(customerEmail)
				&& userAddress.getCustomerName().equalsIgnoreCase(customerName))
			userAddress.setCityName(address.getCityName());
		userAddress.setCustomerName(address.getCustomerName());
		userAddress.setPhoneNumber(address.getPhoneNumber());
		userAddress.setStreetName(address.getStreetName());
		userAddress.setStateName(address.getStateName());
		userAddress.setPincode(address.getPincode());

		addressRepository.save(userAddress);
		return "Address Edit Saved";

	}

	@Override
	public String deleteUserAddress(String customerEmail, String customerName) {
		// TODO Auto-generated method stub
		User user = userRepository.findByCustomerEmail(customerEmail);
		Address address = addressRepository.findByCustomerName(customerName);
		if (user.getCustomerEmail().equals(customerEmail) && address.getCustomerName().equalsIgnoreCase(customerName))
			addressRepository.delete(address);
		return "Address Deleted";
	}

	@Override
	public List<AddressDto> getAllUserAddress(String customerEmail) {
		// TODO Auto-generated method stub
		User user = userRepository.findByCustomerEmail(customerEmail);

		List<Address> listUser = addressRepository.findByUser(user);
		if (listUser.isEmpty()) {
			// exception
		}
		List<AddressDto> listDtoAddress = new ArrayList<AddressDto>();
		for (Address address : listUser)
			listDtoAddress.add(addressMapper.convertToDto(address));
		return listDtoAddress;
	}

}
