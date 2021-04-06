module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SolarPanels', [
      {
        section: 'The Ridge',
        row: 1,
        column: 1,
        yearInstalled: 2020,
        material: 'poly-Si',
        isTracking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'The Ridge',
        row: 1,
        column: 2,
        yearInstalled: 2019,
        material: 'mono-Si',
        isTracking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Flats',
        row: 1,
        column: 1,
        yearInstalled: 2017,
        material: 'a-Si',
        isTracking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Flats',
        row: 2,
        column: 6,
        yearInstalled: 2017,
        material: 'CdTe',
        isTracking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Flats',
        row: 3,
        column: 7,
        yearInstalled: 2000,
        material: 'CIGS',
        isTracking: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SolarPanels', null, {});
  },
};
