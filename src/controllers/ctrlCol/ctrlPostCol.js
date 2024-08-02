const { Colegio } = require("../../DB_Connection");

const ctrlPostCol = async ({
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
}) => {
  try {
    if (
      ciudad &&
      logo &&
      nosotrosImg &&
      nosotros &&
      cantFarm &&
      cantProf &&
      cantHab &&
      direccion &&
      telefono &&
      horarios &&
      email &&
      password
    ) {
      const data = await Colegio.create({
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
      console.log(data)
      return data;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = ctrlPostCol;
