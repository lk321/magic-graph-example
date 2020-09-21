# Example

This is a simple example of how to use the [magic-graph](https://github.com/lk321/magic-graph) library 

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

## Config file example

Create a file called `config.json` in the root folder and copy this code:

```sh
{
    "env": "dev",
    "dev": {
        "port": 3001,
        "db": {
            "logger": false,
            "dialect": "mysql",
            "host": "localhost",
            "database": "DB",
            "user": "USER",
            "password": "PASSWORD",
            "port": 3306,
            "force_sync": false,
            "alter_sync": false
        },
        "secret": "crypto-signing"
    }
}
```

## Dependencies

- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [mysql2](https://ghub.io/mysql2): fast mysql driver. Implements core protocol, prepared statements, ssl and compression in native JS
- [sequelize](https://ghub.io/sequelize): Multi dialect ORM for Node.JS

## Dev Dependencies

- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.

## License

MIT
