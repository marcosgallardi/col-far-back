const { Farmacia, sequelize } = require("../../DB_Connection");
const ctrlFarmDelete = async (id) => {
  const t = await sequelize.transaction();
  try {
    if (id) {
      const data = await Farmacia.destroy(
        {
          where: { id },
        },
        { transaction: t }
      );
      await t.commit();
      return data;
    } else {
      await t.rollback();
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = ctrlFarmDelete;
