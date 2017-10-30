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

db : evidhya_db
User : sa
pass : Evidhya@123

table : 

CREATE TABLE user_registration (
  parentID INT NOT NULL IDENTITY(1,1),
  firstname VARCHAR(256) NOT NULL,
  lastname VARCHAR(256) NULL,
  username VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  emailid VARCHAR(45) NULL,
  createddate DATETIME NULL,
  userstatus VARCHAR(45) NULL DEFAULT 'inactive',
  verificationstatus VARCHAR(45) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (parentID));
  

Hit register service using postman on http://localhost:8080/rest/users/register
{
  "firstName": "testFirst",
  "lastName": "testLast",
  "password": "testPass",
  "userName": "testUser",
  "emailId": "test@test.com"
}

http://localhost:8080/rest/users/all 
res : [{"parentId":1,"firstName":"testFirst","lastName":"testLast","password":"testPass","userName":"testUser","emailId":"test@test.com","userStatus":"inactive","verificationStatus":"pending","createdDate":"2017-10-30 21:30:04.157"}]
