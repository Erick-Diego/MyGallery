const User = require('../models/userModel');

const getAllAccount = async (req, res) => {
    try {
        const alluser = await User.find();
         
        if(!alluser){
            return res.status(404).json({ message: 'Usuarios não encontrados' });
        }

        res.status(200).json({ alluser });

    } catch (error) {
        return res.status(403).json({ message: 'Erro ao procurar usuarios' });
    }
}

module.exports = { getAllAccount };