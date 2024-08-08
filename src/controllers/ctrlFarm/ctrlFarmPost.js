const { Farmacia, sequelize } = require("../../DB_Connection");

const ctrlFarmPost = async ({
  nombre,
  localidad,
  direccion,
  email,
  caracteristica,
  telefono,
  whatsApp,
}) => {
  const t = await sequelize.transaction();
  try {
    if (
      nombre &&
      localidad &&
      direccion &&
      email &&
      caracteristica &&
      telefono &&
      whatsApp
    ) {
      const farmCreated = await Farmacia.create(
        {
          nombre,
          localidad,
          direccion,
          email,
          caracteristica,
          telefono,
          whatsApp,
        },
        { transaction: t }
      );
      await t.commit();
      return farmCreated;
    } else {
      t.rollback();
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = ctrlFarmPost;
