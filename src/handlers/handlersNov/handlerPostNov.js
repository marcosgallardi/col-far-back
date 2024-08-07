const ctrlNovPost = require("../../controllers/ctrlNov/ctrlNovPost");

const handlerPostNov = async(req, res) => {
    const {imgNov,titulo,subtitulo,description} = req.body;
    try {
        const data = await ctrlNovPost(imgNov,titulo,subtitulo,description)
        console.log(data)
        if (data) {
            res.status(200).json({message:"novedad creada con exito"});
        } else {
            res.status(400).json({message:"no se pudo crear la novedad"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        throw new Error(error.message);
    }
};

module.exports = handlerPostNov;