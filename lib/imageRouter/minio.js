'use strict'
const fs = require('fs')
const path = require('path')

<<<<<<< HEAD:lib/imageRouter/minio.js
const config = require('../config')
const { getImageMimeType } = require('../utils')
const logger = require('../logger')
=======
const config = require('../../config')
const { getImageMimeType } = require('../../utils')
const logger = require('../../logger')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/imageRouter/minio.js

const Minio = require('minio')
const minioClient = new Minio.Client({
  endPoint: config.minio.endPoint,
  port: config.minio.port,
  useSSL: config.minio.secure,
  accessKey: config.minio.accessKey,
  secretKey: config.minio.secretKey
})

exports.uploadImage = function (imagePath, callback) {
  if (!imagePath || typeof imagePath !== 'string') {
    callback(new Error('Image path is missing or wrong'), null)
    return
  }

  if (!callback || typeof callback !== 'function') {
    logger.error('Callback has to be a function')
    return
  }

  fs.readFile(imagePath, function (err, buffer) {
    if (err) {
      callback(new Error(err), null)
      return
    }

    const key = path.join('uploads', path.basename(imagePath))
    const protocol = config.minio.secure ? 'https' : 'http'

    minioClient.putObject(config.s3bucket, key, buffer, buffer.size, getImageMimeType(imagePath), function (err, data) {
      if (err) {
        callback(new Error(err), null)
        return
      }
<<<<<<< HEAD:lib/imageRouter/minio.js
      const hidePort = [80, 443].includes(config.minio.port)
      const urlPort = hidePort ? '' : `:${config.minio.port}`
=======
      let hidePort = [80, 443].includes(config.minio.port)
      let urlPort = hidePort ? '' : `:${config.minio.port}`
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/imageRouter/minio.js
      callback(null, `${protocol}://${config.minio.endPoint}${urlPort}/${config.s3bucket}/${key}`)
    })
  })
}
