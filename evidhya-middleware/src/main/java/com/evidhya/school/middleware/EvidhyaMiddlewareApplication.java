package com.evidhya.school.middleware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = {"com.evidhya.school.middleware.registration.repository"})
@SpringBootApplication
public class EvidhyaMiddlewareApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvidhyaMiddlewareApplication.class, args);
	}
}
