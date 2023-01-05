package com.galaxe.onemg.service;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.onemg.dtos.CartDto;
import com.galaxe.onemg.entities.Cart;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.entities.User;
import com.galaxe.onemg.exceptions.CartDoesNotExistException;
import com.galaxe.onemg.mapper.CartMapper;
import com.galaxe.onemg.repository.CartRepository;
import com.galaxe.onemg.repository.ItemRepository;
import com.galaxe.onemg.repository.UserRepository;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	CartMapper cartMapper;

	@Override
	public String deleteCartItem(String customerEmail, String itemName, Integer cartQuantity)
			throws CartDoesNotExistException {
		// TODO Auto-generated method stub
		Integer cartquantity = cartQuantity;
		User user = userRepository.findByCustomerEmail(customerEmail);
		Items item = itemRepository.findByItemName(itemName);
		Cart cart = cartRepository.findByItemsAndUser(item, user);
		if (cart != null) {
			cartquantity = cart.getCartQuantity() - cartQuantity;
			if (cartquantity <= 0) {
				cartRepository.delete(cart);
			} else {
				cart.setCartQuantity(cartquantity);
				cartRepository.save(cart);
			}
		} else {
			throw new CartDoesNotExistException("Cart Does Not Exists");
		}
		return "Item removed from cart";
	}

	@Override
	public String addItemsToCart(String customerEmail, String itemName, Integer cartQuantity) {
		Integer cartquantity = cartQuantity;
		User user = userRepository.findByCustomerEmail(customerEmail);
		Items items = itemRepository.findByItemName(itemName);
		Cart cart = cartRepository.findByItemsAndUser(items, user);
		if (cart != null) {
			cartquantity = cartQuantity + cart.getCartQuantity();
			cart.setCartQuantity(cartquantity);
			cartRepository.save(cart);
		} else {
			Cart newCart = new Cart();
			newCart.setCartQuantity(cartquantity);
			newCart.setItems(items);
			newCart.setUser(user);
			cartRepository.save(newCart);
		}
		return "Cart Items Added";
	}

	public List<CartDto> getAllCartItems(String customerEmail) throws CartDoesNotExistException {
		User user = userRepository.findByCustomerEmail(customerEmail);
		List<Cart> cart = cartRepository.findByUser(user);
		if (cart.isEmpty()) {
			throw new CartDoesNotExistException("No Items In Cart Exists");
		}
		List<Cart> allCartList = cartRepository.findByUser(user);
		List<CartDto> listDtoCart = new ArrayList<CartDto>();
		for (Cart cartIter : allCartList) {
			listDtoCart.add(cartMapper.convertToDto(cartIter));}
		return listDtoCart;

	}

	@Override
	public String incrementCartItem(String customerEmail, String itemName, Integer cartQuantity)
			throws CartDoesNotExistException {
		// TODO Auto-generated method stub
		Integer cartquantity = cartQuantity;
		User user = userRepository.findByCustomerEmail(customerEmail);
		Items item = itemRepository.findByItemName(itemName);
		Cart cart = cartRepository.findByItemsAndUser(item, user);
		if (cart != null) {
			cartquantity = cart.getCartQuantity() + cartQuantity;

			cart.setCartQuantity(cartquantity);
			cartRepository.save(cart);

		} else {
			throw new CartDoesNotExistException("Cart Does Not Exists");
		}
		return "Item added from cart";
	}

	@Override
	public String deleteWholeCartItem(String customerEmail, String itemName) throws CartDoesNotExistException {
		User user = userRepository.findByCustomerEmail(customerEmail);
		Items item = itemRepository.findByItemName(itemName);
		Cart cart = cartRepository.findByItemsAndUser(item, user);
		if(cart==null) {
			throw new CartDoesNotExistException("Cart Not Found");
		}
		cartRepository.delete(cart);
		return "Item deleted from cart";
	}

}
