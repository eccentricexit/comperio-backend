# Comperio Backend

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Persist data and broadcast update requests.

This app was built for educational purposes, part of my nanodegree program.

This nodejs server is a companion project to the [Comperio](https://github.com/mtsalenc/comperio) app. It is a firebase cloud messaging server and handles persistance on mongodb.

## Features
- Firebase Cloud Messaging
- Mongoose

## Requirements

- You must have your firebase console and account properly configured for this app to work.
- You must have your fcm key ready to be used on installation step 2.

See the [oficial documentation](https://firebase.google.com/docs/admin/setup) on how to do these things.

- You should also have a mongodb instance running. Paste [this](https://github.com/mtsalenc/comperio-backend/blob/master/fakeData) on your mongodb CLI if you want some fake data.

### Install

1. On the root, `npm install`
2. `cd api && touch fcm.json`
3. Paste your fcm key inside this file and save. See the [oficial documentation](https://firebase.google.com/docs/admin/setup) for instructions on how to generate this file.

### Usage

1. On the root `npm start server.js`.
2. `GET`and `POST` to [http://localhost:3000/v1/schedules](http://localhost:3000/v1/schedules). More information on routes [here](https://github.com/mtsalenc/comperio-backend/blob/master/api/routes/comperioRoutes.js).

## Contribute

PRs accepted.

## License

 AGPL
