package com.sample.evidhya.school.login.endpoint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.evidhya.school.login.domain.Users;
import com.sample.evidhya.school.login.repository.UsersRepository;

@RestController
@RequestMapping(value="/rest/users")
public class UsersEndPoint {
	
	@Autowired
	UsersRepository usersRepo;
	
	@GetMapping(value="/all")
	public List<Users> getAll(){
		return usersRepo.findAll();
	}
	
	@PostMapping(value="/load")
	public List<Users> saveUser(@RequestBody final Users users){
		usersRepo.save(users);
		return usersRepo.findAll();
	}
}
