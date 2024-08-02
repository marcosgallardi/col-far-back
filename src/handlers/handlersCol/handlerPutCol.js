const handlerPutCol = (req, res) => {
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
    contraseña,
  } = req.body;
  try {
    const { data } = ctrlPutCol({
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
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "error al actualizar" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerPutCol;
