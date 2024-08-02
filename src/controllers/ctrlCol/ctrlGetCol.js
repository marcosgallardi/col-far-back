const { Colegio } = require("../../DB_Connection");

const ctrlGetCol = async () => {
  try {
    const data = await Colegio.findAll();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = ctrlGetCol;
