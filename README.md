# chat-28-server
Individual project - Chat app server built with node, express, sequelize, server-sent-events and postgreSQL

## What can it do?

-   Basic actions:
    -   Create database if it does not exist
    -   Fetch all channels and all the messages in the channels
    -   Create new channels
    -   Create new messages 

## Primarily used technologies

-   [Node.js](https://nodejs.org/en/)
-   [Express.js](https://expressjs.com)
-   [Sequelize](https://sequelize.org)
-   [PostgreSQL](https://www.postgresql.org/)

## Endpoints

| Route                          | HTTP Verb | Description                                                 |
| ------------------------------ | --------- | ----------------------------------------------------------- |
| `/stream`                      | `GET`     | Find all channels including messages                        |
| `/channel`                     | `POST`    | Create new channel                                          |
| `/message`                     | `POST`    | Find channel and create and add message to the channel      |

## Installation

-   Make sure you have installed all these prerequisites on your development machine.

    -   [Node.js](https://nodejs.org/en/download/)
    -   [PostgreSQL](https://www.postgresql.org/download/)
   
```bash
> git clone git@github.com:zorawar1090/chat-28-server.git
> cd chat-28-server
> npm install
```
-   Change databaseUrl to your database url in index.js

```bash
> npm start
```
-   That's all, enjoy!
