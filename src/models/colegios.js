const { DataTypes, UUIDV4 } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  sequelize.define(
    "Colegio",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nosotrosImg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nosotros: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cantFarm: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantProf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantHab: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      horarios: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (colegio) => {
          if (colegio.password) {
            const salt = await bcrypt.genSalt(10);
            colegio.password = await bcrypt.hash(colegio.password, salt);
          }
        },
        beforeUpdate: async (colegio) => {
          if (colegio.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            colegio.password = await bcrypt.hash(colegio.password, salt);
          }
        },
      },
    }
  );
};