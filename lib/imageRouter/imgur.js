'use strict'
const config = require('../config')
const logger = require('../logger')

const imgur = require('@hackmd/imgur')

exports.uploadImage = function (imagePath, callback) {
  if (!callback || typeof callback !== 'function') {
    logger.error('Callback has to be a function')
    return
  }

  if (!imagePath || typeof imagePath !== 'string') {
    callback(new Error('Image path is missing or wrong'), null)
    return
  }

  imgur.setClientId(config.imgur.clientID)
  imgur.uploadFile(imagePath)
    .then(function (json) {
<<<<<<< HEAD:lib/imageRouter/imgur.js
      if (config.debug) {
        logger.info('SERVER uploadimage success: ' + JSON.stringify(json))
      }
=======
      logger.debug(`SERVER uploadimage success: ${JSON.stringify(json)}`)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/imageRouter/imgur.js
      callback(null, json.data.link.replace(/^http:\/\//i, 'https://'))
    }).catch(function (err) {
      callback(new Error(err), null)
    })
}
