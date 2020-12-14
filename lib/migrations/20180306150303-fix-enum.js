'use strict'

module.exports = {
<<<<<<< HEAD
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Notes', 'permission', { type: Sequelize.ENUM('freely', 'editable', 'limited', 'locked', 'protected', 'private') })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Notes', 'permission', { type: Sequelize.ENUM('freely', 'editable', 'locked', 'private') })
=======
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Notes', 'permission', { type: Sequelize.ENUM('freely', 'editable', 'limited', 'locked', 'protected', 'private') })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Notes', 'permission', { type: Sequelize.ENUM('freely', 'editable', 'locked', 'private') })
>>>>>>> 276ae10c7fbef7b9f6cfa872d261660d7bd10870
  }
}
