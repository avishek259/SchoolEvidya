package com.evidhya.school.middleware.registration.endpoint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evidhya.school.middleware.registration.domain.UserRegistration;
import com.evidhya.school.middleware.registration.helper.Status;
import com.evidhya.school.middleware.registration.repository.RegistrationRepository;

@RestController
@RequestMapping(value="/rest/users")
public class UsersRegistrationEndPoint {
	
	@Autowired
	RegistrationRepository usersRepo;
	
	@GetMapping(value="/all")
	public List<UserRegistration> getAll(){
		return usersRepo.findAll();
	}
	
	@PostMapping(value="/register")
	public List<UserRegistration> saveUser(@RequestBody final UserRegistration users){
		users.setVerificationStatus(Status.PENDING.getValue());
		users.setUserStatus(Status.INACTVIE.getValue());
		usersRepo.save(users);
		return usersRepo.findAll();
	}
}
