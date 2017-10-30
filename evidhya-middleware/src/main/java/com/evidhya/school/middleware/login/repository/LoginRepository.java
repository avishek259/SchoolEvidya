package com.evidhya.school.middleware.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evidhya.school.middleware.login.domain.User;



public interface LoginRepository extends JpaRepository<User, String>{

}
