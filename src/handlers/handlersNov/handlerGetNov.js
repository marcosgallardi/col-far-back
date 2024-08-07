const ctrlNovGet = require("../../controllers/ctrlNov/ctrlNovGet");

const handlerGetNov = async(req, res) => {
    const {id} = req.params;
    try {
        
        const data = await ctrlNovGet(id)
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(400).json({message:"error al conseguir los datos"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        throw new Error(error.message);
    }
};

module.exports = handlerGetNov;