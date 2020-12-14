'use strict'

const Router = require('express').Router
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

<<<<<<< HEAD:lib/auth/facebook/index.js
const config = require('../../config')
const { setReturnToFromReferer, passportGeneralCallback } = require('../utils')
=======
const config = require('../../../config')
const { passportGeneralCallback } = require('../utils')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/facebook/index.js

const facebookAuth = module.exports = Router()

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.serverURL + '/auth/facebook/callback'
}, passportGeneralCallback))

facebookAuth.get('/auth/facebook', function (req, res, next) {
  passport.authenticate('facebook')(req, res, next)
})

// facebook auth callback
facebookAuth.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successReturnToOrRedirect: config.serverURL + '/',
    failureRedirect: config.serverURL + '/'
  })
)
