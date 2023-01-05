package com.galaxe.onemg.service;

import java.util.List;

import com.galaxe.onemg.dtos.AddressDto;
import com.galaxe.onemg.entities.Address;

public interface AddressService {
public String addUserAddress(Address address,String customerEmail);
public String deleteUserAddress(String customerEmail, String customerName);
public String editUserAddress(Address address, String customerEmail, String customerName);
public List<AddressDto> getAllUserAddress(String customerEmail);
}
