# My Book Space
![My Book Space](https://i.imgur.com/qguxL5k.png)

My Book Space is a React/Sinatra app that helps users log and track the books that they’ve been reading.

Our backend is a [Sinatra API backend](https://github.com/conniedc1206/phase-3-project-sinatra-backend) that uses Active Record to access and persist data in a database.

## Users will be able to:
* signup for a new account or login to an existing account
* see their dashboard once they are logged containing all their previous logs
* select a previous log to display more details and edit/update that log
* create a new log by adding title, author, star rating, and a comment 
    * an image will automatically be fetched from the Google Book API for this book title
* delete a log 
* log out when done

## Technologies/Skills
* React.js
* Sinatra
* Active Record
* Object-Oriented Design
* [Domain Modeling](https://dbdiagram.io/home)
* [Material UI](https://mui.com/)
* Debugging: Postman, binding.pry, Network Tab in the Dev Tools
* RESTful API endpoints
* Github
* [Google Books API](https://developers.google.com/books/docs/v1/using#PerformingSearch)

## Goals
Our goal was to build a React/Sinatra application while simulating a professional work environment by:
* planning out our wireframes and features
* pitching our app in a project proposal
* using Git/Github for our source control system to track code changes and collaborate with team
* building a Sinatra API backend that uses Active Record to access and persist data in a database
* building a separate React frontend that interacts with the database via the API
* utilizing Material UI for our CSS styling

## Accomplishments
* Use good OO design patterns (separate classes for each of our models & create instance and class methods as necessary)
* Use Active Record to interact with our database
* Have two models: User and Log
    * User can have many logs (“has_many” relationship)
    * A log belongs to a user (“belongs_to” relationship)
![Domain Modeling ERD](https://i.imgur.com/dUuYL38.png)
* Set up API routes in Sinatra that enabled us to:
    * create and read actions for both models
    * full CRUD capability for log model
* Build a separate React frontend application that interacts with the API to perform CRUD actions.
* Organized our code into purposeful components in order to keep it dry
* Incorporated a UI framework for our styling with Material UI
* Used Google Books API to make GET requests for a book's thumbnail URL (performed search by title)

## Challenges/Future Improvements


## Avaliable Scripts
* Fork and clone our [frontend repository](https://github.com/conniedc1206/phase-3-project-react-frontend) onto your local environment:
    * In the project directory, install the dependencies by running: npm install
    * In the project directory, you can run: npm start
    * Runs the app in the development mode: open http://localhost:3000 to view it in your browser

* Fork and clone our [backend repository](https://github.com/conniedc1206/phase-3-project-sinatra-backend) onto your local environment:
    * Install the dependencies by running: bundle install
    * You can start your server with: bundle exec rake server
    * This will run your server on port http://localhost:9292. Check it out in the browser to make sure your server works!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Creators
---
Samantha Navarro [Github](https://github.com/samantha-navarro)  [Linkedin](https://www.linkedin.com/in/samantha-navarro8/)  
Connie Park [Github](https://github.com/conniedc1206)  [Linkedin](https://www.linkedin.com/in/conniepark2)  
Harrison Sabean [Github](https://github.com/Hsabes)  [Linkedin](https://www.linkedin.com/in/harrison-sabean/)  
