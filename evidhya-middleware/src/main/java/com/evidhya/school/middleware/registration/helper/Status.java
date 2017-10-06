package com.evidhya.school.middleware.registration.helper;

public enum Status {
	ACTIVE("active"), INACTVIE("inactive"), VERIFIED("verified"), PENDING("pending");
	private String status;
	Status(String status){
		this.status= status;
	}
	public String getValue() {
		return status;
	}
}
