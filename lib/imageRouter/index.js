'use strict'

const Router = require('express').Router
const formidable = require('formidable')

<<<<<<< HEAD:lib/imageRouter/index.js
const config = require('../config')
const logger = require('../logger')
const response = require('../response')
=======
const config = require('../../config')
const logger = require('../../logger')
const errors = require('../../errors')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/imageRouter/index.js

const imageRouter = module.exports = Router()

// upload image
imageRouter.post('/uploadimage', function (req, res) {
  var form = new formidable.IncomingForm()

  form.keepExtensions = true

  if (config.imageUploadType === 'filesystem') {
    form.uploadDir = config.uploadsPath
  }

  form.parse(req, function (err, fields, files) {
    if (err || !files.image || !files.image.path) {
<<<<<<< HEAD:lib/imageRouter/index.js
      response.errorForbidden(req, res)
=======
      logger.error(`formidable error: ${err}`)
      errors.errorForbidden(res)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/imageRouter/index.js
    } else {
      logger.debug(`SERVER received uploadimage: ${JSON.stringify(files.image)}`)

      const uploadProvider = require('./' + config.imageUploadType)
      logger.debug(`imageRouter: Uploading ${files.image.path} using ${config.imageUploadType}`)
      uploadProvider.uploadImage(files.image.path, function (err, url) {
        if (err !== null) {
          logger.error(err)
          return res.status(500).end('upload image error')
        }
        logger.debug(`SERVER sending ${url} to client`)
        res.send({
          link: url
        })
      })
    }
  })
})
