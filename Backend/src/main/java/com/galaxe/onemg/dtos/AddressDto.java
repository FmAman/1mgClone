package com.galaxe.onemg.dtos;

import com.galaxe.onemg.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
	private String streetName;
	private String cityName;
	private User user;
	private String stateName;
	private String customerName;
	private long phoneNumber;
	private long pincode;
}
