Development Startup for ORBS
===================


The project is relatively easy to setup. You will only need a few things to begin.

----------


Getting setup for Development
-------------


> **Initial Setup:**

> - Change the .env.example file to a .env file and add in your environment information. This file will not be pushed out, except on the production server.
> - Install [Composer](https://getcomposer.org/) to keep Laravel up to date. Run `composer update` to install dependent php code.
> - The database tables are already set up inside the project as migrations. After your database name is set and you can connect to it successfully: Inside your project directory run `php artisan migrate` in your terminal to obtain the tables for the database. Also, you need to generate a key for the .env file. Run `php artisan key:generate` to automatically generate a key for you.
> - In order to have better css/js, we are going to use NodeJS as a package manager. NodeJS also will allow us to use gulp and elixir which compile all our css/js into one file for production. Linux = `sudo apt-get install node` or Mac = `sudo brew install node` or go to the website to download it [manually](https://nodejs.org/en/). After it is installed run `npm install` to install all dependencies.
> - Also in order to run gulp with NodeJS, we will need to globally install gulp. Run `npm install --global gulp-cli` to download the package. To run gulp after the install, simply run `gulp` to run all its tasks and compile the js and sass. Alternatively, run `gulp --production` to minify all js/css files if it's going to the production server. If you want gulp to continuously compile after you change the js/sass files, run `gulp watch`.
> - Point your local server to the public directory to display the GUI of the application

That's it! You should be good to go to continue development. If you need help with the framework, check out [Laravel's Website](https://laravel.com/docs/5.3) to view the full documentation.
