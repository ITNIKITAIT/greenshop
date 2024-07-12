import express, { Request, Response } from 'express';
import router from './routes/main';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
