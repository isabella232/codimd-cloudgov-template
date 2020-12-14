'use strict'
require('babel-polyfill')
require('isomorphic-fetch')
const Router = require('express').Router
const passport = require('passport')
const MattermostClient = require('mattermost-redux/client/client4').default
const OAuthStrategy = require('passport-oauth2').Strategy
<<<<<<< HEAD:lib/auth/mattermost/index.js
const config = require('../../config')
const { setReturnToFromReferer, passportGeneralCallback } = require('../utils')
=======
const config = require('../../../config')
const { passportGeneralCallback } = require('../utils')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/mattermost/index.js

const mattermostAuth = module.exports = Router()

const mattermostClient = new MattermostClient()

const mattermostStrategy = new OAuthStrategy({
  authorizationURL: config.mattermost.baseURL + '/oauth/authorize',
  tokenURL: config.mattermost.baseURL + '/oauth/access_token',
  clientID: config.mattermost.clientID,
  clientSecret: config.mattermost.clientSecret,
  callbackURL: config.serverURL + '/auth/mattermost/callback'
}, passportGeneralCallback)

mattermostStrategy.userProfile = (accessToken, done) => {
<<<<<<< HEAD:lib/auth/mattermost/index.js
  mattermostClient.setUrl(config.mattermost.baseURL)
  mattermostClient.setToken(accessToken)
  mattermostClient.getMe()
    .then((data) => done(null, data))
    .catch((err) => done(err))
=======
  mattermost.setUrl(config.mattermost.baseURL)
  mattermost.token = accessToken
  mattermost.useHeaderToken()
  mattermost.getMe(
    (data) => {
      done(null, data)
    },
    (err) => {
      done(err)
    }
  )
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870:lib/web/auth/mattermost/index.js
}

passport.use(mattermostStrategy)

mattermostAuth.get('/auth/mattermost', function (req, res, next) {
  passport.authenticate('oauth2')(req, res, next)
})

// mattermost auth callback
mattermostAuth.get('/auth/mattermost/callback',
  passport.authenticate('oauth2', {
    successReturnToOrRedirect: config.serverURL + '/',
    failureRedirect: config.serverURL + '/'
  })
)
