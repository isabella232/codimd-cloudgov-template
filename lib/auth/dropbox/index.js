'use strict'

const Router = require('express').Router
const passport = require('passport')
const DropboxStrategy = require('passport-dropbox-oauth2').Strategy
<<<<<<< HEAD:lib/auth/dropbox/index.js
const config = require('../../config')
const { setReturnToFromReferer, passportGeneralCallback } = require('../utils')
=======
const config = require('../../../config')
const { passportGeneralCallback } = require('../utils')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/dropbox/index.js

const dropboxAuth = module.exports = Router()

passport.use(new DropboxStrategy({
  apiVersion: '2',
  clientID: config.dropbox.clientID,
  clientSecret: config.dropbox.clientSecret,
  callbackURL: config.serverURL + '/auth/dropbox/callback'
}, passportGeneralCallback))

dropboxAuth.get('/auth/dropbox', function (req, res, next) {
  passport.authenticate('dropbox-oauth2')(req, res, next)
})

// dropbox auth callback
dropboxAuth.get('/auth/dropbox/callback',
  passport.authenticate('dropbox-oauth2', {
    successReturnToOrRedirect: config.serverURL + '/',
    failureRedirect: config.serverURL + '/'
  })
)
