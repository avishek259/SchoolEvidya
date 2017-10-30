package com.evidhya.school.middleware.login.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_table")
public class User implements Serializable{

	@Id
	@Column(name="parent_id")
	private Integer parentId;
	
	@Id
	@Column(name="device_token")
	private String deviceToken;
	
	@Column(name="mobile_no")
	private String mobileNumber;
	
	@Column(name="acces_token")
	private String accesToken;
	
	@Column(name="password")
	private String password;
	
	@Column(name="login_timestamp")
	private String loginTimestamp;
	
	
	@Column(name="createddate")
	private String createdDate = LocalDateTime.now().toString();
	
}
