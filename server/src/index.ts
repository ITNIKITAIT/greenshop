import express, { Request, Response } from 'express';
import router from './routes/main';
import mailjetClient from './email/mailjet';
import { sendEmail } from './utils/sendEmail';
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api', router);

// app.get('/send', async (req: Request, res: Response) => {
//     // const request = mailjetClient.post('send', { version: 'v3.1' }).request({
//     //     Messages: [
//     //         {
//     //             From: {
//     //                 Email: 'ads425363@gmail.com', // Your verified Mailjet sender email
//     //                 Name: 'GreenShop',
//     //             },
//     //             To: [
//     //                 {
//     //                     Email: 'nikito4ka281205@gmail.com',
//     //                     Name: 'test',
//     //                 },
//     //             ],
//     //             Subject: 'Your email flight plan!',
//     //             TextPart:
//     //                 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
//     //             HTMLPart: `<h3>Hello)</h3>`,
//     //         },
//     //     ],
//     // });
//     // request
//     //     .then((result: any) => {
//     //         res.status(200).json({
//     //             message: 'Email sent successfully',
//     //             result: result.body,
//     //         });
//     //     })
//     //     .catch((err: any) => {
//     //         console.error('Error sending email:', err.statusCode, err.message);
//     //         res.status(500).json({ error: 'Error sending email' });
//     //     });
//     const result = await sendEmail('nikito4ka281205@gmail.com', 'test');
//     res.json(result.body);
// });

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
