const ctrlNovPut = require("../../controllers/ctrlNov/ctrlNovPut");

const handlerPutNov = async (req, res) => {
  const { id, imgNov, titulo, subtitulo, description } = req.body;
  try {
    const data = await ctrlNovPut({
      imgNov,
      titulo,
      subtitulo,
      description,
      id,
    });
    if (data) {
      res.status(200).json({ message: "novedad actualizada con exito" });
    } else {
      res.status(400).json({ message: "no se pudo actualizar la novedad" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerPutNov;
