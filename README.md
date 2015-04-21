# React/Flux/Rails Skeleton

Use this project to get started with Flux and React very quickly. You can deploy to Heroku within seconds of cloning this repository.

You can see this project running [here](http://react-flux-rails.herokuapp.com/).

## Why?

Flux without frameworks (and with!) has lots of boilerplate code. Getting JSX/commonJS/Rails playing nicely can be a challenge - This does it all for you using a sustainable approach.

## Requirements

Ruby 2.0+ should work fine. NPM/bundler are required. To deploy to Heroku, use the Heroku toolbelt.

## Installing

Clone this repository:

    git clone https://github.com/timminkov/react-flux-rails

Install gems:

    bundle

Install node modules:

    npm install

_Optional_: Download and install the postgres app [found here](http://postgresapp.com/).

## Running

Make sure Postgres is running with a fresh database. Run with:

    rails s

Then, visit [localhost:3000](localhost:3000) in your browser.

## Deploying to Heroku

Create a new heroku app (You'll need to install the Heroku toolbelt):

    heroku create your-app-name-here

Add the app to your git remotes (using the URL returned after creating the app)

    git remote add heroku https://your-heroku-git-repo-url.com

Add the multi-buildpack tool to heroku (used for Browserify):

    heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git

Push to Heroku

    git push heroku master

## Contributing

Please open a pull request.
