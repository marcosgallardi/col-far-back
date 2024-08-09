const ctrlFarmPut = require("../../controllers/ctrlFarm/ctrlFarmPut");

const handlerPutFarm = async (req, res) => {
  const {
    id,
    nombre,
    localidad,
    direccion,
    email,
    caracteristica,
    telefono,
    active,
  } = req.body;
  try {
    const data = await ctrlFarmPut({
      id,
      nombre,
      localidad,
      direccion,
      email,
      caracteristica,
      telefono,
      active,
    });
    if (data) {
      res.status(200).json({ message: "farmacia actualizada correctamente" });
    } else {
      res.status(400).json({ message: "no se pudo modificar la farmacia" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerPutFarm;
