module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SolarPanels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      section: {
        type: Sequelize.STRING,
      },
      row: {
        type: Sequelize.INTEGER,
      },
      column: {
        type: Sequelize.INTEGER,
      },
      yearInstalled: {
        type: Sequelize.INTEGER,
      },
      material: {
        type: Sequelize.STRING,
      },
      isTracking: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SolarPanels');
  },
};
