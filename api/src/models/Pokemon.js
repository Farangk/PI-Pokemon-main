const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {

    id: {
   type: DataTypes.UUID, 
   defaultValue: DataTypes.UUIDV4,
   allowNull: false, 
   primaryKey: true,

    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img: {
      type: DataTypes.STRING
    },
    hp: {
      type: DataTypes.DECIMAL(5, 2),
      // validate:  {
      //   max: 200
      // }
    },
    attack: {
      type: DataTypes.DECIMAL(5, 2),
    },
    defense: {
      type: DataTypes.DECIMAL(5, 2)
    },
    speed: {
      type: DataTypes.DECIMAL(5, 2)
    },
    height: {
      type: DataTypes.DECIMAL(5, 2)
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
    } ,
         create: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },{
    timestamps: false
  });
};
