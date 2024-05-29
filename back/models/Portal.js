const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

  sequelize.define('Portal',  {
    name : {
      type: DataTypes.STRING,
      allwNull : false
    }
  },
{timestamps : false})
} 