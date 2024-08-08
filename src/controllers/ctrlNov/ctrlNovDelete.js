
const { Novedades, sequelize } = require("../../DB_Connection");

const ctrlNovDelete = async ( id ) => {
  const t = await sequelize.transaction();
  try {
    if (id) {
      const novDelete = await Novedades.destroy(
        {
          where: {
            id: id,
          },
        },
        {
          transaction: t,
        }
      );
      await t.commit();
      console.log(novDelete, "aca!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      return novDelete;
    } else {
      return false;
    }
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = ctrlNovDelete;
