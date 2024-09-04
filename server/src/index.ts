import express, { Request, Response } from 'express';
import router from './routes/main';
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
