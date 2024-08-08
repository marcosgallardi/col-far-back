const ctrlFarmGet = require("../../controllers/ctrlFarm/ctrlFarmGet");

const handlerGetFarm = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ctrlFarmGet(id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "error al traer las farmacias" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerGetFarm;
