'use strict'

const Router = require('express').Router
const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

<<<<<<< HEAD:lib/auth/twitter/index.js
const config = require('../../config')
const { setReturnToFromReferer, passportGeneralCallback } = require('../utils')
=======
const config = require('../../../config')
const { passportGeneralCallback } = require('../utils')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/twitter/index.js

const twitterAuth = module.exports = Router()

passport.use(new TwitterStrategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.serverURL + '/auth/twitter/callback'
}, passportGeneralCallback))

twitterAuth.get('/auth/twitter', function (req, res, next) {
  passport.authenticate('twitter')(req, res, next)
})

// twitter auth callback
twitterAuth.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successReturnToOrRedirect: config.serverURL + '/',
    failureRedirect: config.serverURL + '/'
  })
)
