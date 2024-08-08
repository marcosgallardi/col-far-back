
const { Novedades, sequelize } = require("../../DB_Connection");
const ctrlNovPut = async ({ id, imgNov, titulo, subtitulo, description }) => {
  const t = await sequelize.transaction();
  try {
    const novedad = await Novedades.findOne(
      {
        where: {
          id: id,
        },
      },
      { transaction: t }
    );
    if (!novedad) return "Novedad no encontrada";
    if (imgNov) novedad.imgNov = imgNov;
    if (titulo) novedad.titulo = titulo;
    if (subtitulo) novedad.subtitulo = subtitulo;
    if (description) novedad.description = description;

    await novedad.save({ transaction: t });

    await t.commit();

    return novedad;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = ctrlNovPut;
