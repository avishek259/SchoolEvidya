package com.evidhya.school.middleware.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evidhya.school.middleware.registration.domain.UserRegistration;


public interface RegistrationRepository extends JpaRepository<UserRegistration, String>{

}
