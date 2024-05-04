const User = require('../models/userModel');

const getAllAccount = async (req, res) => {
    try {
        const user = await User.find();
         
        if(!user){
            return res.status(404).json({ message: 'Usuarios não encontrados' });
        }

        res.status(200).json({ user });

    } catch (error) {
        return res.status(403).json({ message: 'Erro ao procurar usuarios' });
    }
}

module.exports = { getAllAccount };