package com.galaxe.onemg.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDto {
	@JsonIgnore
	private User user;	
	private Items items;
	private int cartQuantity;
}
