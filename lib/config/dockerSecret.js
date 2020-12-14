'use strict'

const fs = require('fs')
const path = require('path')

const basePath = path.resolve('/run/secrets/')

function getSecret (secret) {
  const filePath = path.join(basePath, secret)
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf-8')
  return undefined
}

if (fs.existsSync(basePath)) {
  module.exports = {
<<<<<<< HEAD
    dbURL: getSecret('dburl'),
    // ssl path
=======
    dbURL: getSecret('dbURL'),
    sessionSecret: getSecret('sessionsecret'),
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
    sslKeyPath: getSecret('sslkeypath'),
    sslCertPath: getSecret('sslcertpath'),
    sslCAPath: getSecret('sslcapath'),
    dhParamPath: getSecret('dhparampath'),
<<<<<<< HEAD
    // session
    sessionSecret: getSecret('sessionsecret'),
    imgur: {
      clientID: getSecret('imgur_clientid')
    },
=======
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
    s3: {
      accessKeyId: getSecret('s3_acccessKeyId'),
      secretAccessKey: getSecret('s3_secretAccessKey')
    },
    minio: {
      accessKey: getSecret('minio_accessKey'),
      secretKey: getSecret('minio_secretKey')
    },
    azure: {
      connectionString: getSecret('azure_connectionString')
    },
    oauth2: {
      clientID: getSecret('oauth2_clientID'),
      clientSecret: getSecret('oauth2_clientSecret')
    },
    facebook: {
      clientID: getSecret('facebook_clientID'),
      clientSecret: getSecret('facebook_clientSecret')
    },
    twitter: {
      consumerKey: getSecret('twitter_consumerKey'),
      consumerSecret: getSecret('twitter_consumerSecret')
    },
    github: {
      clientID: getSecret('github_clientID'),
      clientSecret: getSecret('github_clientSecret')
    },
    gitlab: {
      clientID: getSecret('gitlab_clientID'),
      clientSecret: getSecret('gitlab_clientSecret')
    },
    mattermost: {
      clientID: getSecret('mattermost_clientID'),
      clientSecret: getSecret('mattermost_clientSecret')
    },
    dropbox: {
      clientID: getSecret('dropbox_clientID'),
      clientSecret: getSecret('dropbox_clientSecret'),
      appKey: getSecret('dropbox_appKey')
    },
    google: {
      clientID: getSecret('google_clientID'),
      clientSecret: getSecret('google_clientSecret'),
      hostedDomain: getSecret('google_hostedDomain')
    },
    ldap: {
      bindCredentials: getSecret('ldap_bindCredentials'),
      tlsca: getSecret('ldap_tlsca')
    },
    saml: {
      idpCert: getSecret('saml_idpCert')
    }
  }
}
