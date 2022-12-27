package com.galaxe.onemg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.galaxe.onemg.mapper.CartMapper;
import com.galaxe.onemg.mapper.CartMapperImpl;
import com.galaxe.onemg.mapper.ItemsMapper;
import com.galaxe.onemg.mapper.ItemsMapperImpl;
import com.galaxe.onemg.mapper.UserMapper;
import com.galaxe.onemg.mapper.UserMapperImpl;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		System.out.println("1mg Running");
	}
	
	@Bean
	public ItemsMapper getItems() {
		return new ItemsMapperImpl();
	}

	@Bean
	public UserMapper addUser() {
		return new UserMapperImpl();
	}
	
	@Bean
	public CartMapper addCartItem() {
		return new CartMapperImpl();
	}
}
