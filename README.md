![HedgeDoc Logo](docs/images/hedgedoc_logo_horizontal.png)
[![build status][travis-image]][travis-url]

# HedgeDoc
[![#HedgeDoc on matrix.org][matrix.org-image]][matrix.org-url]
[![version][github-version-badge]][github-release-page]
[![Gitter][gitter-image]][gitter-url]
[![POEditor][poeditor-image]][poeditor-url]
[![Mastodon][social-mastodon-image]][social-mastodon]

CodiMD lets you collaborate in real-time with markdown.
Built on [HackMD](https://hackmd.io) source code, CodiMD lets you host and control your team's content with speed and ease.

![screenshot](https://raw.githubusercontent.com/hackmdio/codimd/develop/public/screenshot.png)

## Deploy to Cloud.gov

```bash
$ git clone https://github.com/18f/paas-codimd
$ cd paas-codimd
$ git checkout -b some-test-branch
$ cp config.json.sample config.json
# ^ this file is git ignored and is where you will copy and paste the github oauth tokens
```

**Install Node/NPM**
[Check to see what is working in upstream](https://travis-ci.com/github/hackmdio/codimd)
* [v10 LTS Dubnium](https://nodejs.org/download/release/latest-dubnium/)
* [v12 LTS Erbium](https://nodejs.org/download/release/latest-erbium/)

**Install yarn and build app**
```bash
$ npm install -g yarn
$ yarn install
$ yarn run build
```

**Setup a cloud.gov account, follow instructions to install the cf-cli, and login on the command line:**
* https://cloud.gov/docs/getting-started/accounts/
* https://cloud.gov/docs/getting-started/setup/

```bash
cf login -a api.fr.cloud.gov  --sso
```
* Copy and Paste the [Temporary Authentication Code](https://login.fr.cloud.gov/passcode) when prompted
* Setup a demo application `space`
* Create a small shared postgresql database for testing
* Update manifest.yml file to rename `applications: - name:`

```bash
$ cf target -o sandbox-gsa create-space paas-codimd
$ cf marketplace
$ cf create-service aws-rds shared-psql paas-codimd-db
$ cf create-service-key paas-codimd-db paas-codimd-db-test
$ cf push
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [HedgeDoc](#hedgedoc)
  - [Deploy to Cloud.gov](#deploy-to-cloudgov)
- [Table of Contents](#table-of-contents)
  - [HackMD](#hackmd)
  - [CodiMD - The Open Source HackMD](#codimd---the-open-source-hackmd)
  - [Documentation](#documentation)
    - [Deployment](#deployment)
    - [Configuration](#configuration)
    - [Upgrading and Migration](#upgrading-and-migration)
    - [Developer](#developer)
  - [Contribution and Discussion](#contribution-and-discussion)
  - [Browser Support](#browser-support)
  - [License](#license)
  - [Community and Contributions](#community-and-contributions)
  - [Installation / Upgrading](#installation--upgrading)
  - [Configuration](#configuration-1)
  - [Browser support](#browser-support-1)
  - [Backup/restore your instance](#backuprestore-your-instance)
  - [Related Tools](#related-tools)
  - [License](#license-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## HackMD

[HackMD](https://hackmd.io) helps developers write better documents and build active communities with open collaboration.
HackMD is built with one promise - **You own and control all your content**:
- You should be able to easily [download all your online content at once](https://hackmd.io/c/news/%2Fs%2Fr1cx3a3SE).
- Your content formatting should be portable as well. (That's why we choose [markdown](https://hackmd.io/features#Typography).)
- You should be able to control your content's presentation with HTML, [slide mode](https://hackmd.io/p/slide-example), or [book mode](https://hackmd.io/c/book-example/).

## CodiMD - The Open Source HackMD

CodiMD is the free software version of [HackMD](https://hackmd.io), developed and opened source by the HackMD team with reduced features (without book mode), you can use CodiMD for your community and own all your data. *(See the [origin of the name CodiMD](https://github.com/hackmdio/hackmd/issues/720).)* 

CodiMD is perfect for open communities, while HackMD emphasizes on permission and access controls for commercial use cases. 

HackMD team is committed to keep CodiMD open source. All contributions are welcome!

## Documentation
You would find all documentation here: [CodiMD Documentation](https://hackmd.io/c/codimd-documentation)

### Deployment
If you want to spin up an instance and start using immediately, see [Docker deployment](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-docker-deployment).
If you want to contribute to the project, start with [manual deployment](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-manual-deployment).

### Configuration
CodiMD is highly customizable, learn about all configuration options of networking, security, performance, resources, privilege, privacy, image storage, and authentication in [CodiMD Configuration](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-configuration).

### Upgrading and Migration
Upgrade CodiMD from previous version? See [this guide](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-upgrade)<br>
Migrating from Etherpad? Follow [this guide](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-migration-etherpad)

### Developer
Join our contributor community! Start from deploying [CodiMD manually](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-manual-deployment), [connecting to your own database](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-db-connection), [learn about the project structure](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-project-structure), to [build your changes](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-webpack) with the help of webpack.

## Contribution and Discussion
All contributions are welcome! Even asking a question helps.

| Project | Contribution Types | Contribution Venue |
| ------- | ------------------ | ------------------ |
|**CodiMD**|:couple: Community chat|[Gitter][gitter-url]|
||:bug: Issues, bugs, and feature requests|[Issue tracker](https://github.com/hackmdio/codimd/issues)|
||:books: Improve documentation|[Documentations](https://hackmd.io/c/codimd-documentation)|
||:pencil: Translation|[POEditor][poeditor-url]|
||:coffee: Donation|[Buy us coffee](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KDGS4PREHX6QQ&lc=US&item_name=HackMD&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)|
|**HackMD**|:question: Issues related to [HackMD](https://hackmd.io/)|[Issue tracker](https://github.com/hackmdio/hackmd-io-issues/issues)|
||:pencil2: Translation|[hackmd-locales](https://github.com/hackmdio/hackmd-locales/tree/master/locales)|

## Browser Support

CodiMD is a service that runs on Node.js, while users use the service through browsers. We support your users using the following browsers: 
- <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> Chrome >= 47, Chrome for Android >= 47
- <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /> Safari >= 9, iOS Safari >= 8.4
- <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /> Firefox >= 44
- <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /> IE >= 9, Edge >= 12
- <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /> Opera >= 34, Opera Mini not supported
- Android Browser >= 4.4

To stay up to date with your installation it's recommended to subscribe the [release feed][github-release-feed].

## License
HedgeDoc lets you create real-time collaborative markdown notes. You can test-drive
it by visiting our [HedgeDoc demo server][hedgedoc-demo].

It is inspired by Hackpad, Etherpad and similar collaborative editors. This
project originated with the team at [HackMD](https://hackmd.io) and now forked
into its own organisation. [A longer writeup can be read in the history doc](docs/history.md).

[![HedgeDoc 1.7.0 with its feature demonstration page open](docs/images/HedgeDoc-1.7.0-features.png)][hedgedoc-demo-features]

## Community and Contributions

We welcome contributions! There's a lot to do: If you would like to report bugs,
the [issue tracker][github-issue-tracker] is the right place. If you can help
translating, find us on [POEditor][poeditor-url]. To get started developing,
take a look at the [docs/dev](docs/dev) directory. In any case: come talk to us,
we'll be delighted to help you with the first steps.

To stay up to date with our work or get support it's recommended to join our
[Matrix channel][matrix.org-url], stop by our [community forums][hedgedoc-community]
or subscribe to the [release feed][github-release-feed]. We also engage in
regular [community calls][hedgedoc-community-calls] ([RSS](https://community.hedgedoc.org/t/codimd-community-call/19.rss)) which you are very welcome to join.

## Installation / Upgrading

You can run HedgeDoc in a number of ways, and we created setup instructions for
all of these:

- [Docker](docs/setup/docker.md)
- [Kubernetes](docs/setup/kubernetes.md)
- [Cloudron](docs/setup/cloudron.md)
- [LinuxServer.io (multi-arch docker)](docs/setup/docker-linuxserver.md)
- [Heroku](docs/setup/heroku.md)
- [Manual setup](docs/setup/manual-setup.md)

## Configuration

Theres two main ways to [configure](docs/configuration.md) your HedgeDoc instance:
config file or environment variables. You can choose what works best for you.

HedgeDoc can integrate with

- facebook, twitter, github, gitlab, mattermost, dropbox, google, ldap, saml and [oauth2](docs/guides/auth/oauth.md) **for login**
- imgur, s3, minio, azure **for image/attachment storage** (files can also be local!)
- dropbox **for export and import**

More info about that can be found in the configuration docs above.

## Browser support

To use HedgeDoc, your browser should match or exceed these versions:

- ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/chrome/chrome_24x24.png) Chrome >= 47, ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/chrome/chrome_24x24.png) Chrome for Android >= 47
- ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/safari/safari_24x24.png) Safari >= 9, ![iOS Safarai](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/safari-ios/safari-ios_24x24.png) iOS Safari >= 8.4
- ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/firefox/firefox_24x24.png) Firefox >= 44
- ![IE](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/archive/internet-explorer_9-11/internet-explorer_9-11_24x24.png) IE >= 9, ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/edge/edge_24x24.png) Edge >= 12
- ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/opera/opera_24x24.png) Opera >= 34, ![Opera Mini](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/opera-mini/opera-mini_24x24.png) Opera Mini not supported
- ![Android Browser](https://raw.githubusercontent.com/alrra/browser-logos/HEAD/src/android-webview-beta/android-webview-beta_24x24.png) Android Browser >= 4.4

## Backup/restore your instance

To backup HedgeDoc, you should:

- backup your database
- backup your custom config file if you have one
- backup the upload folder (see the [uploadsPath](./docs/configuration.md#hedgedoc-paths-stuff) config directive) 

Restoring an existing instance of HedgeDoc is then just a matter of restoring these elements.

## Related Tools

Our community has created related tools, we'd like to highlight [hedgedoc-cli](https://github.com/hedgedoc/cli)
which lets you use HedgeDoc from the comfort of your command line.

## License

Licensed under AGPLv3. For our list of contributors, see [AUTHORS](AUTHORS).

The license does not include the HedgeDoc logo, whose terms of usage can be found in the [github repository](https://github.com/hedgedoc/hedgedoc-logo).

[matrix.org-image]: https://img.shields.io/matrix/hedgedoc:matrix.org?logo=matrix&server_fqdn=matrix.org
[matrix.org-url]: https://chat.hedgedoc.org
[github-version-badge]: https://img.shields.io/github/release/hedgedoc/hedgedoc.svg
[github-release-page]: https://github.com/hedgedoc/hedgedoc/releases
[github-release-feed]: https://github.com/hedgedoc/hedgedoc/releases.atom
[github-issue-tracker]: https://github.com/hedgedoc/hedgedoc/issues/
[poeditor-image]: https://img.shields.io/badge/POEditor-translate-blue.svg
[poeditor-url]: https://poeditor.com/join/project/1OpGjF2Jir
[hedgedoc-demo]: https://demo.hedgedoc.org
[hedgedoc-demo-features]: https://demo.hedgedoc.org/features
[hedgedoc-community]: https://community.hedgedoc.org
[hedgedoc-community-calls]: https://community.hedgedoc.org/t/codimd-community-call/19
[social-mastodon]: https://social.hedgedoc.org/mastodon
[social-mastodon-image]: https://img.shields.io/mastodon/follow/49593?domain=https%3A%2F%2Fsocial.snopyta.org&style=social
