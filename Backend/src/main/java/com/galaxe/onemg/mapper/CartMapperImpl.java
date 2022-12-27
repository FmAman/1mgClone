package com.galaxe.onemg.mapper;

import com.galaxe.onemg.dtos.CartDto;
import com.galaxe.onemg.entities.Cart;

public class CartMapperImpl implements CartMapper{

	@Override
	public Cart convertToEntity(CartDto cartDto) {
		if(cartDto==null) {
			return null;
		}
		Cart cart = new Cart();
		cart.setCartQuantity(cartDto.getCartQuantity());
		cart.setItems(cartDto.getItems());
		cart.setUser(cartDto.getUser());		
		return cart;
	}

	@Override
	public CartDto convertToDto(Cart cart) {
		if(cart==null) {
			return null;
		}
		CartDto cartDto = new CartDto();
		cartDto.setCartQuantity(cart.getCartQuantity());
		cartDto.setItems(cart.getItems());
		cartDto.setUser(cart.getUser());
		return cartDto;
	}

}
