'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('todos',
      'user_id', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'todos', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },


  async down(queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('todos','user_id');
     
  }
};
