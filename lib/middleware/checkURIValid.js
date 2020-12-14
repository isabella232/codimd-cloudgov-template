'use strict'

<<<<<<< HEAD:lib/middleware/checkURIValid.js
const logger = require('../logger')
const response = require('../response')
=======
const logger = require('../../logger')
const errors = require('../../errors')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/middleware/checkURIValid.js

module.exports = function (req, res, next) {
  try {
    decodeURIComponent(req.path)
  } catch (err) {
    logger.error(err)
<<<<<<< HEAD:lib/middleware/checkURIValid.js
    return response.errorBadRequest(req, res)
=======
    return errors.errorBadRequest(res)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/middleware/checkURIValid.js
  }
  next()
}
