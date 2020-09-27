const AutenticationController = require('./controllers/AutenticationController')

const AutenticationControllerPolicy = require('./policies/AutenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
   AutenticationControllerPolicy.register,
   AutenticationController.register)
}
