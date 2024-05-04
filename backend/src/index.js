const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const dbconfig = require('./config/dbconfig');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', authRoutes);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});