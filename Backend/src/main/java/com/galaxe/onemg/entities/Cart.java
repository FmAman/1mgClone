package com.galaxe.onemg.entities;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	private int cartQuantity;

	@ManyToOne(cascade = {CascadeType.MERGE,CascadeType.PERSIST, CascadeType.REFRESH} )
	@JoinColumn(name="cartItemId",referencedColumnName = "itemId")
	private Items items;
	
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="cartUserId",referencedColumnName = "customerEmail")
	private User user;

}
