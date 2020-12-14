'use strict'

const Router = require('express').Router
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy
<<<<<<< HEAD:lib/auth/google/index.js
const config = require('../../config')
const { setReturnToFromReferer, passportGeneralCallback } = require('../utils')
=======
const config = require('../../../config')
const { passportGeneralCallback } = require('../utils')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/google/index.js

const googleAuth = module.exports = Router()

passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: config.serverURL + '/auth/google/callback',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
}, passportGeneralCallback))

googleAuth.get('/auth/google', function (req, res, next) {
<<<<<<< HEAD:lib/auth/google/index.js
  setReturnToFromReferer(req)
  passport.authenticate('google', {
    scope: ['profile'],
    hostedDomain: config.google.hostedDomain
  })(req, res, next)
=======
  passport.authenticate('google', { scope: ['profile'], hostedDomain: config.google.hostedDomain })(req, res, next)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/google/index.js
})
// google auth callback
googleAuth.get('/auth/google/callback',
  passport.authenticate('google', {
    successReturnToOrRedirect: config.serverURL + '/',
    failureRedirect: config.serverURL + '/'
  })
)
