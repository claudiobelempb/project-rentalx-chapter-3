package br.com.surb.SpringDesignPatterns.modules.user.infra.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Entity
@Table(name = "user")
public class User {

	@Id
	private String id;

	private String name;
	private String email;

	@Column(name = "zip_code")
	private String zipCode;

	private String address;
	private String district;
	private String city;
	private String state;

	@Column(name = "created_at")
	private LocalDateTime createdAt;

}
