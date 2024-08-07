const { Novedades, sequelize } = require("../../DB_Connection");

const ctrlNovPost = async (imgNov, titulo, subtitulo, description) => {
  const t = await sequelize.transaction();
  try {
    if (imgNov && titulo && subtitulo && description) {
      const data = await Novedades.create(
        {
          imgNov,
          titulo,
          subtitulo,
          description,
        },
        { transaction: t }
      );
      await t.commit();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    await t.rollback();
    throw error.message;
  }
};

module.exports = ctrlNovPost;
