const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const dbconfig = require('./config/dbconfig');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173/'
};

const upload = multer({ 

    storage: multer.diskStorage({

        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'upload', 'foto-user'));
        },

        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + Date.now() + ext);
        }

    })
});

app.use('/auth', upload.single('fotoPerfil'), authRoutes);
app.use(cors(corsOptions));
app.use(express.json());

app.listen(3333, () => {
    console.log(`Servidor rodando na porta 3333`);
});