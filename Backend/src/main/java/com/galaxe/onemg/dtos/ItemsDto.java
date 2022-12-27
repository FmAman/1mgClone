package com.galaxe.onemg.dtos;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemsDto {
	private String imageUrl;
	private String itemName;
	private String quantity;
	private int mrpPrice;
	private int discount;
	private int sellingPrice;
}
