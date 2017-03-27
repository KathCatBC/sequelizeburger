
// Creating our User model

// CREATE DATABASE burger_db;

// USE burger_db;


// CREATE TABLE burgers(
//   id INT NOT NULL AUTO_INCREMENT,
//   burger_name VARCHAR(45) NULL,
//   devoured TINYINT(1) NOT NULL DEFAULT 0,
//   date_created TIMESTAMP(6) NOT NULL DEFAULT current_timestamp(6),
//   date_devoured TIMESTAMP(6) NULL ON UPDATE CURRENT_TIMESTAMP(6),
//   PRIMARY KEY (id));

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // timestamps: false,
    // The email cannot be null, and must be a proper email before creation
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,

    },

  })

  return Burger;

};
