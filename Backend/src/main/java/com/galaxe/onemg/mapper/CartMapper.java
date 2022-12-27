package com.galaxe.onemg.mapper;

import org.mapstruct.Mapper;



import org.mapstruct.Mapping;

import com.galaxe.onemg.dtos.CartDto;
import com.galaxe.onemg.entities.Cart;

@Mapper
public interface CartMapper {
	@Mapping(target = "cartQuantity", source = "CartDto.cartQuantity")
	@Mapping(target = "items", source = "CartDto.items")
	@Mapping(target = "user", source = "CartDto.user")
	public Cart convertToEntity(CartDto cartDto);
	
	@Mapping(target = "CartDto.cartQuantity", source="cartQuantity")
	@Mapping(target = "CartDto.items", source="items")
	@Mapping(target = "CartDto.user", source="user")
	public CartDto convertToDto(Cart cart);

}
