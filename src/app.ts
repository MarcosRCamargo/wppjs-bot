import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import taskRouter from './routes/task.router';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rotas
app.use('/tasks', taskRouter);

// Rota padrão (pode ser removida ou modificada)
app.get('/', (req: Request, res: Response) => {
    res.send('API está funcionando');
});

// Tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
