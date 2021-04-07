const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolarPanel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  SolarPanel.init({
    section: DataTypes.STRING,
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    yearInstalled: DataTypes.INTEGER,
    material: DataTypes.STRING,
    isTracking: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'SolarPanel',
  });

  return SolarPanel;
};
