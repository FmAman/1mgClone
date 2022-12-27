package com.galaxe.onemg.mapper;

import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.entities.Items;

public class ItemsMapperImpl implements ItemsMapper{

	@Override
	public Items convertToEntity(ItemsDto itemsDto) {
		if(itemsDto==null) {
			return null;
		}
		Items items = new Items();
		items.setImageUrl(itemsDto.getImageUrl());
		items.setItemName(itemsDto.getItemName());
		items.setQuantity(itemsDto.getQuantity());
		items.setMrpPrice(itemsDto.getMrpPrice());
		items.setDiscount(itemsDto.getDiscount());
		items.setSellingPrice(itemsDto.getSellingPrice());		
		return items;
	}

	@Override
	public ItemsDto convertToDto(Items items) {
		if(items==null) {
			return null;
		}
		ItemsDto itemsDto = new ItemsDto();
		itemsDto.setImageUrl(items.getImageUrl());
		itemsDto.setDiscount(items.getDiscount());
		itemsDto.setItemName(items.getItemName());
		itemsDto.setMrpPrice(items.getMrpPrice());
		itemsDto.setQuantity(items.getQuantity());
		itemsDto.setSellingPrice(items.getSellingPrice());
		return itemsDto;
	}

}
