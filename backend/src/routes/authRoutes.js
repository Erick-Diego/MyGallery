const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/middleware');
const uploadProfilePhoto = require('../middleware/uploadPhoto');
const admController = require('../controllers/admController');

const router = express.Router();

router.post('/register', uploadProfilePhoto.single('fotoPerfil'), authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware.authenticateToken, authController.logout);

router.patch('/update-biografia', authMiddleware.authenticateToken, userController.updateBiografia);
router.patch('/update-foto-perfil', authMiddleware.authenticateToken, userController.updateFotoPerfil);

router.delete('/remove-foto-perfil', authMiddleware.authenticateToken, userController.removeFotoPerfil);
router.delete('/delete-account', authMiddleware.authenticateToken, authController.deleteAccount);

router.get('/all-users', admController.getAllAccount);
router.get('/user', authMiddleware.authenticateToken, userController.getAccount);
router.get('/user-profile-image/:imageName', authController.getImage);

module.exports = router;
