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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.onemg.dtos.AddressDto;
import com.galaxe.onemg.entities.Address;
import com.galaxe.onemg.service.AddressServiceImpl;

@RestController
@CrossOrigin
public class AddressController {

	@Autowired
	AddressServiceImpl addressServiceImpl;

	@PostMapping("addaddress/{customerEmail}")
	public ResponseEntity<?> addAddress(@RequestBody Address address,@PathVariable("customerEmail") String customerEmail) {
		ResponseEntity<?> responseEntity = null;
		String message = addressServiceImpl.addUserAddress(address,customerEmail);
		responseEntity = new ResponseEntity<String>(message,HttpStatus.ACCEPTED);
		return responseEntity;
	}
	
	@PutMapping("editaddress/{customerEmail}/{customerName}")
	public ResponseEntity<?> editAddress(@RequestBody Address address,@PathVariable ("customerEmail") String customerEmail,@PathVariable("customerName") String customerName){
		ResponseEntity<?> responseEntity = null;
		String message = addressServiceImpl.editUserAddress(address,customerEmail,customerName);
		responseEntity = new ResponseEntity<String>(message,HttpStatus.ACCEPTED);
		return responseEntity;
	}

	@GetMapping("getalladdress/{customerEmail}")
	public ResponseEntity<?> getAddress(@PathVariable("customerEmail") String customerEmail) {
		ResponseEntity<?> responseEntity = null;
		List<AddressDto> listaddress = addressServiceImpl.getAllUserAddress(customerEmail);
		responseEntity = new ResponseEntity<List<AddressDto>>(listaddress, HttpStatus.ACCEPTED);
		return responseEntity;
	}
	
	@DeleteMapping("deleteaddress/{customerEmail}/{customerName}")
	public ResponseEntity<?> deleteAddress(@PathVariable("customerEmail") String customerEmail,@PathVariable("customerName") String customerName){
		ResponseEntity<?> responseEntity = null;
		String message = addressServiceImpl.deleteUserAddress(customerEmail, customerName);
		responseEntity = new ResponseEntity<String>(message,HttpStatus.ACCEPTED);
		return responseEntity;
	}
}
