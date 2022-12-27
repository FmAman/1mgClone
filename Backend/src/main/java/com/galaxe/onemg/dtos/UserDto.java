package com.galaxe.onemg.dtos;


import com.galaxe.onemg.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private String customerName;
	private String customerEmail;
	private String customerPassword;
	private Role userRole;
	
//	private Cart cart;

}
