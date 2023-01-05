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
@NoArgsConstructor
@AllArgsConstructor
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int addressId;
	
	private String streetName;
	
	private String cityName;
	private String stateName;
	private String customerName;
	private long phoneNumber;

	private long pincode;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="userAddressId", referencedColumnName = "customerEmail")
	private User user;
	
}
