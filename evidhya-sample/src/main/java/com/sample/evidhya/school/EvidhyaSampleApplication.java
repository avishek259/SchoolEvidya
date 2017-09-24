package com.sample.evidhya.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.sample.evidhya.school.login.repository")
@SpringBootApplication
public class EvidhyaSampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvidhyaSampleApplication.class, args);
	}
}
