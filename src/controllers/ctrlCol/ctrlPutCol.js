const { Colegio, sequelize } = require("../../DB_Connection");

const ctrlPutCol = async ({
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
}) => {
  const t = await sequelize.transaction();
  try {
    let colegio = await Colegio.findOne(
      { where: { id: id } },
      { transaction: t }
    );

    if (!colegio) {
      return "Colegio no encontrado";
    }

    if (ciudad) colegio.ciudad = ciudad;
    if (logo) colegio.logo = logo;
    if (nosotrosImg) colegio.nosotrosImg = nosotrosImg;
    if (nosotros) colegio.nosotros = nosotros;
    if (cantFarm) colegio.cantFarm = cantFarm;
    if (cantProf) colegio.cantProf = cantProf;
    if (cantHab) colegio.cantHab = cantHab;
    if (direccion) colegio.direccion = direccion;
    if (telefono) colegio.telefono = telefono;
    if (horarios) colegio.horarios = horarios;
    if (email) colegio.email = email;
    if (contraseña) colegio.contraseña = contraseña;
    
    await colegio.save({ transaction: t });

    await t.commit();
    console.log(colegio);
    return colegio;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = ctrlPutCol;
