### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?  
RESTful routing stands for Representational State Transfer. It is a convention in programming that creates efficient and reusable routes. In most cases HTTP methods are used (GET, POST, PATCH, PUT, DELETE. It helps developers navigate and understand  an application whether they are looking at their own or someone else's code.

- What is a resource?  
A Flask resource are built on top of Flask view and allows for access to multiple HTTP methods. 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?  
Creating a route that renders a form as well as creates a new user would not be modular. Form creation is not apart of the the API as it is made with seperate extensions. They are not connected therefore should not be included together. 

- What does idempotent mean? Which HTTP verbs are idempotent?  
 Idempotent operations can be performed repeated with the same data and the results will be the same regardless. 
- What is the difference between PUT and PATCH?  
PUT updates an entire resource while PATCH only updates part of a resource.

- What is one way encryption?  
One way encryption prevents using a value and reverse engineering to obtain the starting data/function. Data passed into one way encryption are ideally not able to be obtained once encrypted. 

- What is the purpose of a `salt` when hashing a password?  
Salt are bits of extra data passed into the input password before a password is hashed into a database.

- What is the purpose of the Bcrypt module?  
Bcrypt module introduces algorithms that are used in security and other encryption areas. Introduces other types of cryptographic hashes and compares them to Bcrypt. 

- What is the difference between authorization and authentication?  
Authorization is allowing certain cases to have certain functions like a admin having admin views. Authentication is checking if information being passed in matches what is in the databases,therefore allowing access to further content.
