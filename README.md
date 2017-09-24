# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

Mobile web version of the Evidya School App
1.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

Checkout the project in your desktop in some folder 
Configure maven above version 3.0
Move to that Folder 
Run a Maven clean 
Run a Maven install
Move the generated war file in the Local JBoss
Accessible over the http://localhost:8080/schoolapp

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

Contact :- hhamlani89@gmail.com


DB : Details

Sample :
connectionName: schoolEVidhya_sample
hostName: localhost (27.0.0.1:330)
User : root
pass : root
schema : evidhyasample

table : 

CREATE TABLE `evidhyasample`.`users` (
  `userid` INT NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userid`));
  
  INSERT INTO `evidhyasample`.`users` (`userid`, `firstname`, `lastname`, `password`) VALUES ('101', 'phalgun', 'dandu', 'test@123');
INSERT INTO `evidhyasample`.`users` (`userid`, `firstname`, `lastname`, `password`) VALUES ('102', 'Avi', 'shek', 'done@123');


http://localhost:8080/rest/users/all 
res : [{"userId":101,"firstName":"phalgun","lastName":"dandu","password":"test@123"},{"userId":102,"firstName":"Avi","lastName":"shek","password":"done@123"}]
