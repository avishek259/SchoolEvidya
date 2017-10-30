package com.evidhya.school.middleware.registration.domain;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.ObjectMapper;

@Entity
@Table(name = "user_registration")
public class UserRegistration implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="parentID")
	private Integer parentId;
	@Column(name="firstname")
	private String firstName;
	@Column(name="lastname")
	private String lastName;
	@Column(name="password")
	private String password;
	@Column(name="username")
	private String userName;
	@Column(name="emailid")
	private String emailId;
	@Column(name="userstatus")
	private String userStatus;
	@Column(name="verificationstatus")
	private String verificationStatus;
	@Column(name="createddate")
	private String createdDate = LocalDateTime.now().toString();
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserStatus() {
		return userStatus;
	}
	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}
	public String getVerificationStatus() {
		return verificationStatus;
	}
	public void setVerificationStatus(String verificationStatus) {
		this.verificationStatus = verificationStatus;
	}
	public String getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	/*public static void main(String[] args) {
		ObjectMapper mapper = new ObjectMapper();
		UserRegistration obj = new UserRegistration();

		//Object to JSON in file
		try {
			//mapper.writeValue(new File("c:\\file.json"), obj);
			//Object to JSON in String
			String jsonInString = mapper.writeValueAsString(obj);
			System.out.println(jsonInString);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}*/
	
}
