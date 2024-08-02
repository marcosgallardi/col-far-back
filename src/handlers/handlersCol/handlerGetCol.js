const ctrlGetCol = require("../../controllers/ctrlCol/ctrlGetCol");

const handlerGetCol = async (req, res) => {
  try {
    const  data  = await ctrlGetCol();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "colegio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerGetCol;
