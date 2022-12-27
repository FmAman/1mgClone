package com.galaxe.onemg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.onemg.dtos.CartDto;
import com.galaxe.onemg.entities.Cart;
import com.galaxe.onemg.exceptions.CartDoesNotExistException;
import com.galaxe.onemg.service.CartServiceImpl;

@CrossOrigin
@RestController
public class CartController {

	@Autowired
	CartServiceImpl cartServiceImpl;

	
	@PostMapping("addtocart/{customerEmail}/{itemName}/{cartQuantity}")
	public ResponseEntity<?> addToCart(@PathVariable("customerEmail") String customerEmail,
			@PathVariable("itemName") String itemName, @PathVariable("cartQuantity") Integer cartQuantity) {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = cartServiceImpl.addItemsToCart(customerEmail, itemName, cartQuantity);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@GetMapping("getallcartitems/{customerEmail}")
	public ResponseEntity<?> getCartItems(@PathVariable("customerEmail") String customerEmail)throws CartDoesNotExistException  {
		ResponseEntity<?> responseEntity = null;
		try {
			List<CartDto> message = cartServiceImpl.getAllCartItems(customerEmail);
			responseEntity = new ResponseEntity<List<CartDto>>(message, HttpStatus.ACCEPTED);
		} 
		catch(CartDoesNotExistException e) {
			throw new CartDoesNotExistException(e.getMessage());
		}
		catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@DeleteMapping("removecartitem/{customerEmail}/{itemName}/{cartQuantity}")
	public ResponseEntity<?> removeFromCart(@PathVariable("customerEmail") String customerEmail,
			@PathVariable("itemName") String itemName, @PathVariable("cartQuantity") Integer cartQuantity)throws CartDoesNotExistException  {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = cartServiceImpl.deleteCartItem(customerEmail, itemName, cartQuantity);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		} 
		catch(CartDoesNotExistException e) {
			throw new CartDoesNotExistException(e.getMessage());
		}
		catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@PostMapping("addcartitem/{customerEmail}/{itemName}/{cartQuantity}")
	public ResponseEntity<?> addQuantityToCart(@PathVariable("customerEmail") String customerEmail,
			@PathVariable("itemName") String itemName, @PathVariable("cartQuantity") Integer cartQuantity)  {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = cartServiceImpl.addItemsToCart(customerEmail, itemName, cartQuantity);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		}
		
		catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@DeleteMapping("deleteitemcart/{customerEmail}/{itemName}")
	public ResponseEntity<?> deleteFromCart(@PathVariable("customerEmail") String customerEmail,
			@PathVariable("itemName") String itemName) throws CartDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = cartServiceImpl.deleteWholeCartItem(customerEmail, itemName);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		}
		catch(CartDoesNotExistException e) {
			throw new CartDoesNotExistException(e.getMessage());
		}
		catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
}
