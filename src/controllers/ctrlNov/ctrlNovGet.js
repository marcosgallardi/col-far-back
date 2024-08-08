const { Novedades } = require("../../DB_Connection");
const ctrlNovGet = async (id) => {
  try {
    if (id) {
      const data = await Novedades.findByPk(id);

      return data;
    } else {
      const data = await Novedades.findAll();

      return data;
    }
  } catch (error) {
    throw error.message;
  }
};

module.exports = ctrlNovGet;
