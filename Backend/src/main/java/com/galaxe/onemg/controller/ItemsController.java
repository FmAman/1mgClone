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
import org.springframework.web.bind.annotation.RestController;

import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.exceptions.ItemAlreadyExistsException;
import com.galaxe.onemg.exceptions.ItemDoesNotExistException;
import com.galaxe.onemg.service.ItemsServiceImpl;

@CrossOrigin
@RestController
public class ItemsController {

	@Autowired
	ItemsServiceImpl itemsServiceImpl;

	@PostMapping("additems")
	public ResponseEntity<?> saveItems(@RequestBody Items items) throws ItemAlreadyExistsException {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = itemsServiceImpl.addItem(items);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);

		} catch (ItemAlreadyExistsException e) {
			throw new ItemAlreadyExistsException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@PutMapping("edititems")
	public ResponseEntity<?> editItem( @RequestBody Items items) throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = itemsServiceImpl.editItems(items);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);

		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@GetMapping("getitems/Relevance")
	public ResponseEntity<?> getItems() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItems();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	
	@GetMapping("getitems/NameDsc")
	public ResponseEntity<?> getItemsByNameDesc() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItemsSortNameDesc();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	@GetMapping("getitems/NameAsc")
	public ResponseEntity<?> getItemsByNameAsc() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItemsSortNameAsc();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	@GetMapping("getitems/Discount")
	public ResponseEntity<?> getItemsByDiscount() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItemsSortDiscount();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	@GetMapping("getitems/PriceLH")
	public ResponseEntity<?> getItemsByPriceLowHigh() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItemsSortPriceLowHigh();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	@GetMapping("getitems/PriceHL")
	public ResponseEntity<?> getItemsByPriceHighLow() throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.getItemsSortPriceHighLow();
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
	@GetMapping("searchitems/{itemName}")
	public ResponseEntity<?> searchItems(@PathVariable("itemName") String itemname) throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			List<ItemsDto> listItems = itemsServiceImpl.searchItemByName(itemname);
			responseEntity = new ResponseEntity<List<ItemsDto>>(listItems, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}

	@DeleteMapping("deleteitem/{itemName}")
	public ResponseEntity<?> removeItem(@PathVariable("itemName") String itemName) throws ItemDoesNotExistException {
		ResponseEntity<?> responseEntity = null;
		try {
			String message = itemsServiceImpl.deleteItem(itemName);
			responseEntity = new ResponseEntity<String>(message, HttpStatus.ACCEPTED);
		} catch (ItemDoesNotExistException e) {
			throw new ItemDoesNotExistException(e.getMessage());
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return responseEntity;
	}
}
