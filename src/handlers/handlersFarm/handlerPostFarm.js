const ctrlFarmPost = require("../../controllers/ctrlFarm/ctrlFarmPost");

const handlerPostFarm = async (req, res) => {
  const {
    nombre,
    localidad,
    direccion,
    email,
    caracteristica,
    telefono,
    whatsApp,
  } = req.body;
  try {
    const data = await ctrlFarmPost({
      nombre,
      localidad,
      direccion,
      email,
      caracteristica,
      telefono,
      whatsApp,
    });
    if (data) {
      res.status(200).json({ message: "Farmacia creada con exito" });
    } else {
      res.status(400).json({ message: "no se pudo crear la farmacia" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerPostFarm;
