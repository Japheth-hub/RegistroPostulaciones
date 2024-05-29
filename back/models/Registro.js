const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

  sequelize.define('Registro',  {
    vacante : {
      type: DataTypes.STRING,
      allwNull : false
    },
    empresa : {
      type : DataTypes.STRING,
      allowNull : false
    },
  })
} 