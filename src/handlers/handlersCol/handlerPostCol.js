const ctrlPostCol = require("../../controllers/ctrlCol/ctrlPostCol");

const handlerPostCol = async (req, res) => {
  const {
    ciudad,
    logo,
    nosotrosImg,
    nosotros,
    cantFarm,
    cantProf,
    cantHab,
    direccion,
    telefono,
    horarios,
    email,
    password,
  } = req.body;
  try {
    const data = await ctrlPostCol({
      ciudad,
      logo,
      nosotrosImg,
      nosotros,
      cantFarm,
      cantProf,
      cantHab,
      direccion,
      telefono,
      horarios,
      email,
      password,
    });
    if (data) {
      res.status(200).json({ message: "Usuario creado con exito" });
    } else {
      res.status(400).json({ message: "error al cargar datos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error);
  }
};

module.exports = handlerPostCol;
