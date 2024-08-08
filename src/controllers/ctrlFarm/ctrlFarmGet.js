const { Farmacia } = require("../../DB_Connection");

const ctrlFarmGet = async ( id ) => {
  try {
    if (id) {
      const farmacia = await Farmacia.findByPk(id);
      return farmacia;
    } else {
      const farmacias = await Farmacia.findAll();
      return farmacias;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = ctrlFarmGet;
