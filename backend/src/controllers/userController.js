const User = require('../models/userModel');
const fs = require('fs/promises'); // Módulo FileSystem para trabalhar com arquivos
const path = require('path');

const updateBiografia = async (req, res) => {
    try {
        // Obtém o ID do usuário autenticado a partir do token
        const userId = req.user.id;

        // Verifica se o usuário existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verifica se a biografia foi enviada na requisição
        if (!req.body.biografia) {
            return res.status(400).json({ message: 'Biografia não fornecida' });
        }

        // Atualiza a biografia do usuário
        user.biografia = req.body.biografia;
        await user.save();

        res.status(200).json({ message: 'Biografia atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateFotoPerfil = async (req, res) => {
    try {
        // Obtém o ID do usuário autenticado a partir do token
        const userId = req.user.id;

        // Verifica se o usuário existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Remove a foto antiga se existir
        if (user.fotoPerfil && user.fotoPerfil !== 'C:/Users/User/OneDrive/Área de Trabalho/MyGallery/backend/src/upload/foto-user/user_icon-icons.com_66546.png') {
            const fotoAntigaPath = user.fotoPerfil;
            await fs.unlink(fotoAntigaPath); // Remove a foto antiga
        }

        // Verifica se a foto foi enviada na requisição
        if (!req.file) {
            return res.status(400).json({ message: 'Foto de perfil não fornecida' });
        }

        // Atualiza a foto de perfil do usuário
        user.fotoPerfil = req.file.path; // Caminho da nova foto
        await user.save();

        res.status(200).json({ message: 'Foto de perfil atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeFotoPerfil = async (req, res) => {
    try {
        // Obtém o ID do usuário autenticado a partir do token
        const userId = req.user.id;

        // Verifica se o usuário existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verifica se o usuário já tem uma foto de perfil
        if (!user.fotoPerfil || user.fotoPerfil === 'C:/Users/User/OneDrive/Área de Trabalho/MyGallery/backend/src/upload/foto-user/user_icon-icons.com_66546.png') {
            return res.status(400).json({ message: 'Usuário não possui uma foto de perfil para remover' });
        }

        // Remove a foto antiga
        const fotoAntigaPath = user.fotoPerfil;
        await fs.unlink(fotoAntigaPath); // Remove a foto antiga

        // Atribui a foto base como foto de perfil
        user.fotoPerfil = 'C:/Users/User/OneDrive/Área de Trabalho/MyGallery/backend/src/upload/foto-user/user_icon-icons.com_66546.png'; // Caminho da foto base
        await user.save();

        res.status(200).json({ message: 'Foto de perfil removida com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAccount = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ message: 'Usuarios não encontrado' });
        }

        res.status(200).json({ user });
    } catch (error) {
        return res.status(403).json({ message: 'Erro ao procurar usuario' });
    }
}


module.exports = { updateBiografia, updateFotoPerfil, removeFotoPerfil, getAccount };
