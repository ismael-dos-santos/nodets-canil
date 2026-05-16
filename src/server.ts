import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index.js';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(import.meta.dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(import.meta.dirname, '../public')));

// Rotas
server.use(mainRouter);

server.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT || 4000);