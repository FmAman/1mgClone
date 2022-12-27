package com.galaxe.onemg.mapper;

import org.mapstruct.Mapper;

import org.mapstruct.Mapping;

import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.entities.Items;

@Mapper
public interface ItemsMapper {
	@Mapping(target = "imageUrl", source = "ItemsDto.imageUrl")
	@Mapping(target = "itemName", source = "ItemsDto.itemName")
	@Mapping(target = "quantity", source = "ItemsDto.quantity")
	@Mapping(target = "mrpPrice", source = "ItemsDto.mrpPrice")
	@Mapping(target = "discount", source = "ItemsDto.discount")
	@Mapping(target = "sellingPrice", source = "ItemsDto.sellingPrice")
	public Items convertToEntity(ItemsDto itemsDto);
	
	@Mapping(target = "ItemsDto.imageUrl", source="imageUrl")
	@Mapping(target = "ItemsDto.itemName", source="itemName")
	@Mapping(target = "ItemsDto.quantity", source="quantity")
	@Mapping(target = "ItemsDto.mrpPrice", source="mrpPrice")
	@Mapping(target = "ItemsDto.discount", source="discount")
	@Mapping(target = "ItemsDto.sellingPrice", source="sellingPrice")
	public ItemsDto convertToDto(Items items);

}
