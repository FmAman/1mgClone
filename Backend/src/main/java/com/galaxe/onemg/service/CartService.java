 package com.galaxe.onemg.service;

import java.util.List;


import com.galaxe.onemg.dtos.CartDto;
import com.galaxe.onemg.exceptions.CartDoesNotExistException;

public interface CartService {
public String deleteCartItem(String customerEmail,String itemName,Integer cartQuantity)throws CartDoesNotExistException ;
public String incrementCartItem(String customerEmail,String itemName,Integer cartQuantity)throws CartDoesNotExistException ;
public String deleteWholeCartItem(String customerEmail,String itemName) throws CartDoesNotExistException ;
public String addItemsToCart(String customerEmail,String itemName,Integer cartQuantity);
public List<CartDto> getAllCartItems(String customerEmail)throws CartDoesNotExistException;
}
