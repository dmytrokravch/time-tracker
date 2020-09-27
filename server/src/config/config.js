const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
      database: process.env.DB_NAME || 'timetracker',
      user: process.env.DB_USER || 'timetracker',
      password: process.env.DB_PASS || 'timetracker',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../timetracker.sqlite')
      }
  }
}