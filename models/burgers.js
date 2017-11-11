module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Burgers;
};
