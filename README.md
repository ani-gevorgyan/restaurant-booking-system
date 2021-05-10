Restaurant-Booking-System

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required packages.

## Create booking_system database

### 1. `sudo -u postgres psql`

### 2. `CREATE DATABASE booking_system;`

### 3. `\connect booking_system;`

## Run Migrations

### `npm run typeorm migration:run`

Runs migrations

## Add data in DB

### `npm run create-data`

Saves dummy data to Meals and Tables tables.<br />

## Start app

### `npm run start-dev`

Runs the app in the development mode on port 4000.<br />

The server will reload if you make edits.<br />

## Postman link

#### https://www.getpostman.com/collections/caaaf83009949ac92348


## Running Tests

#### Create new database for testing `booking_system_testing`

#### Run the migrations `npm run typeorm migration:run`
###  Run Tests `npm run test`



