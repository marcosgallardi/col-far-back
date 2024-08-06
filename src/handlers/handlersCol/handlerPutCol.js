const ctrlPutCol = require("../../controllers/ctrlCol/ctrlPutCol");

const handlerPutCol = async(req, res) => {
  const {
    id,
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
    contraseña,
  } = req.body;
  try {
    const data = await ctrlPutCol({
      id,
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
      contraseña,
    });
    console.log(data,"aca!!!!!!!!!!!!!!!")
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "error al actualizar" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error);
  }
};

module.exports = handlerPutCol;
