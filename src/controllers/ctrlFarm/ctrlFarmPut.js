const { Farmacia, sequelize } = require("../../DB_Connection");

const ctrlFarmPut = async ({
  id,
  nombre,
  localidad,
  direccion,
  email,
  caracteristica,
  telefono,
  active,
}) => {
  const t = await sequelize.transaction();
  try {
    const farmacia = await Farmacia.findByPk(id, { transaction: t });
    if (!farmacia) {
      throw new Error("farmacia no encontrada");
    }

    if (nombre) farmacia.nombre = nombre;
    if (localidad) farmacia.localidad = localidad;
    if (direccion) farmacia.direccion = direccion;
    if (email) farmacia.email = email;
    if (caracteristica) farmacia.caracteristica = caracteristica;
    if (telefono) farmacia.telefono = telefono;
    if (active) farmacia.active = active;

    await farmacia.save({ transaction: t });
    await t.commit();

    return farmacia;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = ctrlFarmPut;
