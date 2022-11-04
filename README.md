Quizzer App
=========

Quizzer is a full stack web application that allows users to create, take and share multiple choice quizzes. 

It is built using Javascript, jQuery, EJS, Node.js and SASS.

Quizzer was completed by Jeremy Buist and Jillian Aubrey as a part of our learning at [Lighthouse Labs](https://www.lighthouselabs.ca/). We carried out the complete back and front-end development of the application, given some client specifications. 


## Final Product

#### Home page (logged out)

!["Screenshot of home page"](https://github.com/JillianAubrey/quizz_app/blob/master/docs/HomePage.png)


#### Viewing and taking quizzes

https://user-images.githubusercontent.com/79812985/200088291-d82d3fe2-2405-4991-a702-8c5df7958e2d.mov


#### Viewing my account information

https://user-images.githubusercontent.com/79812985/200088329-fb17472f-b9ed-4d1c-89b5-8c5a65ac767e.mov


#### Making a quiz

https://user-images.githubusercontent.com/79812985/200088350-06362edd-1fdb-4130-903e-33e6a80e3e3f.mov


## Dependencies
- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- bcryptjs 2.x
- chalk 2.x
- cookie-session 2.x
- dotenv 2.x
- ejs 4.x
- morgan 1.x
- sass 1.x

## Getting Started
1. Clone the repository using `git clone git@github.com:JillianAubrey/quizz_app.git`
2. Create a local psql database, and a user with a password and read/write access.
3. Create a `.env` file using `.env.example` as a reference: `cp .env.example .env`
4. Update the .env file with the information feom the database/user in step 2:
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
5. Install dependencies: `npm i`
6. Fix to binaries for sass: `npm rebuild node-sass`
7. Reset database: `npm run db:reset`
8. Run the server: `npm run start`
9. Visit `http://localhost:8080/`
