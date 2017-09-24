package com.sample.evidhya.school.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.evidhya.school.login.domain.Users;

public interface UsersRepository extends JpaRepository<Users, Integer>{

}
