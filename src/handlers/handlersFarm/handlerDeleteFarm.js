const ctrlFarmDelete = require("../../controllers/ctrlFarm/ctrlFarmDelete");

const handlerDeleteFarm = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ctrlFarmDelete(id);
    console.log(data,"aca!!!!!!!!!!!!!!!!!!!")
    if (data) {
      res.status(200).json({ message: "farmacia borrada con existo" });
    } else {
      res.status(400).json({ message: "no se pudo borrar la farmacia" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerDeleteFarm;
