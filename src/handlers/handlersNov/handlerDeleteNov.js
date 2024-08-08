const ctrlNovDelete = require("../../controllers/ctrlNov/ctrlNovDelete");

const handlerDeleteNov = async (req, res) => {
  const { id } = req.params;
  try {
    const novDelete = await ctrlNovDelete(id);
    if (novDelete) {
      res.status(200).json({ message: "novedad eliminada con exito" });
    } else {
      res.status(400).json({ message: "no se pudo eliminar la novedad" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = handlerDeleteNov;
