const { Novedades, sequelize } = require("../../DB_Connection");
const ctrlNovGet = async (id) => {
  const t = await sequelize.transaction();

  try {
    if (id) {
      const data = await Novedades.findByPk(id, { transaction: t });
      await t.commit();
      return data;
    } else {
      const data = await Novedades.findAll({ transaction: t });
      await t.commit();
      return data;
    }
  } catch (error) {
    await t.rollback();
    throw error.message;
  }
};

module.exports = ctrlNovGet;
