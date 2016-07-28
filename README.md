# Sanigo
An Angular application to find public bathrooms according to one's location. It is a user generated application, meaning data stored in the database are created by users. Bathrooms will show reviews and comments from other users.

## Deployment
The application is deployed using heroku. Accessible here: https://kristinmaripasive.github.io/sanigo/sanigo_angular/#/

## Contributing
1. Fork it!
2. Open your terminal
3. Clone the repository: `$ git clone git@github.com:kristinmaripasive/sanigo.git`
4. Go inside the directory: `$ cd sanigo`
5. Create your feature branch: `$ git checkout -b my-new-feature`
6. Commit your changes: `$ git commit -m 'Add some feature'`
7. Push to the branch: `$ git push origin my-new-feature`
8. Submit a pull request :D


## History
The application was created to serve public sanitation needs. As a group, we thought it was a good idea to have a user-generated interactive app to share individual experiences using public bathrooms.

## Planning
We started with functionality in mind. We listed some user stories and then started sketching some wireframes for the app idea.

We came up with the following user stories:

- As a user I would want to view an index page when I visit the web page
- As a user I would want to see a link on the index page to view the map
- As a user I would want to be able to add a bathroom location to the map
- As a user I would want to be able to edit a bathroom location to the map
- As a user I would want to be able to delete a bathroom location to the map
- As a user I would want to be able to see the bathroom location I added on the map
- As a user I would want to be able to click the location and redirect me to a show page
- As a user I would want to add comments to a bathroom location
- As a user I would want to edit comments to a bathroom location
- As a user I would want to delete comments to a bathroom location

## Process
We had a few roadblocks every now and then. The google map API that was used for the application definitely took the majority of the time. It is the core of our application so it was our focus functionality wise.

Another very complex thing we had to tackle was nesting the comments under the locations and saving them on the database.

Overall, we enjoyed the process and working as a team.

## Features to build in future
- We would like to add dynamic centering of the map so a user can enter their location and have the map automatically focused on that particular location.

- Build the CRUD for comments on the front-end since it is already working in the back-end.

- Add user sessions with sign-up, sign-in, and sign-out functionalities.

- Add a ratings feature to make it convenient for users to have a quick glimpse of what other users think about a particular bathroom.

## Specs
* Ruby version: ruby 2.3.1p112 (2016-04-26 revision 54768)

* Technologies used: Atom text editor, AngularJS, Rails, HTML, CSS
