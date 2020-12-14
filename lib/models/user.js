'use strict'
// external modules
<<<<<<< HEAD
var Sequelize = require('sequelize')
var Scrypt = require('scrypt-kdf')

// core
var logger = require('../logger')
var { generateAvatarURL } = require('../letter-avatars')
=======
const Sequelize = require('sequelize')
const crypto = require('crypto')
if (!crypto.scrypt) {
  // polyfill for node.js 8.0, see https://github.com/chrisveness/scrypt-kdf#openssl-implementation
  const scryptAsync = require('scrypt-async')
  crypto.scrypt = function (password, salt, keylen, options, callback) {
    const opt = Object.assign({}, options, { dkLen: keylen })
    scryptAsync(password, salt, opt, (derivedKey) => callback(null, Buffer.from(derivedKey)))
  }
}
const scrypt = require('scrypt-kdf')

// core
const logger = require('../logger')
const { generateAvatarURL } = require('../letter-avatars')
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    profileid: {
      type: DataTypes.STRING,
      unique: true
    },
    profile: {
      type: DataTypes.TEXT
    },
    history: {
      type: DataTypes.TEXT
    },
    accessToken: {
      type: DataTypes.TEXT
    },
    refreshToken: {
      type: DataTypes.TEXT
    },
    deleteToken: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.TEXT,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.TEXT
    }
  })

<<<<<<< HEAD
  User.hashPassword = async function (plain) {
    return (await Scrypt.kdf(plain, await Scrypt.pickParams(0.1))).toString('hex')
  }

  User.prototype.verifyPassword = async function (attempt) {
    if (await Scrypt.verify(Buffer.from(this.password, 'hex'), attempt)) {
      return this
    }

    return false
  }

  User.addHook('beforeCreate', async function (user) {
    // only do hash when password is presented
    if (user.password) {
      user.password = await User.hashPassword(user.password)
    }
  })
  User.addHook('beforeUpdate', async function (user) {
    if (user.changed('password')) {
      user.password = await User.hashPassword(user.password)
    }
  })

=======
  User.prototype.verifyPassword = function (attempt) {
    return scrypt.verify(Buffer.from(this.password, 'hex'), attempt)
  }

>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
  User.associate = function (models) {
    User.hasMany(models.Note, {
      foreignKey: 'ownerId',
      constraints: false
    })
    User.hasMany(models.Note, {
      foreignKey: 'lastchangeuserId',
      constraints: false
    })
  }
  User.getProfile = function (user) {
    if (!user) {
      return null
    }
    return user.profile ? User.parseProfile(user.profile) : (user.email ? User.parseProfileByEmail(user.email) : null)
  }
  User.parseProfile = function (profile) {
    try {
      profile = JSON.parse(profile)
    } catch (err) {
      logger.error(err)
      profile = null
    }
    if (profile) {
      profile = {
        name: profile.displayName || profile.username,
        photo: User.parsePhotoByProfile(profile),
        biggerphoto: User.parsePhotoByProfile(profile, true)
      }
    }
    return profile
  }
  User.parsePhotoByProfile = function (profile, bigger) {
    var photo = null
    switch (profile.provider) {
      case 'facebook':
        photo = 'https://graph.facebook.com/' + profile.id + '/picture'
        if (bigger) photo += '?width=400'
        else photo += '?width=96'
        break
      case 'twitter':
        photo = 'https://twitter.com/' + profile.username + '/profile_image'
        if (bigger) photo += '?size=original'
        else photo += '?size=bigger'
        break
      case 'github':
<<<<<<< HEAD
        if (profile.photos && profile.photos[0]) photo = profile.photos[0].value.replace('?', '')
        else photo = 'https://avatars.githubusercontent.com/u/' + profile.id
=======
        photo = 'https://avatars.githubusercontent.com/u/' + profile.id
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
        if (bigger) photo += '?s=400'
        else photo += '?s=96'
        break
      case 'gitlab':
        photo = profile.avatarUrl
        if (photo) {
          if (bigger) photo = photo.replace(/(\?s=)\d*$/i, '$1400')
          else photo = photo.replace(/(\?s=)\d*$/i, '$196')
        } else {
          photo = generateAvatarURL(profile.username)
        }
        break
      case 'mattermost':
        photo = profile.avatarUrl
        if (photo) {
          if (bigger) photo = photo.replace(/(\?s=)\d*$/i, '$1400')
          else photo = photo.replace(/(\?s=)\d*$/i, '$196')
        } else {
          photo = generateAvatarURL(profile.username)
        }
        break
      case 'dropbox':
        photo = generateAvatarURL('', profile.emails[0].value, bigger)
        break
      case 'google':
        photo = profile.photos[0].value
        if (bigger) photo = photo.replace(/(\?sz=)\d*$/i, '$1400')
        else photo = photo.replace(/(\?sz=)\d*$/i, '$196')
        break
      case 'ldap':
        photo = generateAvatarURL(profile.username, profile.emails[0], bigger)
        break
      case 'saml':
        photo = generateAvatarURL(profile.username, profile.emails[0], bigger)
        break
<<<<<<< HEAD
      case 'oauth2':
        photo = profile.photo
        if (!photo) photo = generateAvatarURL(profile.username, profile.email, bigger)
=======
      default:
        photo = generateAvatarURL(profile.username)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
        break
    }
    return photo
  }
  User.parseProfileByEmail = function (email) {
    return {
      name: email.substring(0, email.lastIndexOf('@')),
      photo: generateAvatarURL('', email, false),
      biggerphoto: generateAvatarURL('', email, true)
    }
  }
<<<<<<< HEAD
=======

  function updatePasswordHashHook (user, options) {
    // suggested way to hash passwords to be able to do this asynchronously:
    // @see https://github.com/sequelize/sequelize/issues/1821#issuecomment-44265819

    if (!user.changed('password')) {
      return Promise.resolve()
    }

    return scrypt.kdf(user.getDataValue('password'), { logN: 15 }).then(keyBuf => {
      user.setDataValue('password', keyBuf.toString('hex'))
    })
  }

  User.beforeCreate(updatePasswordHashHook)
  User.beforeUpdate(updatePasswordHashHook)
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870

  return User
}
