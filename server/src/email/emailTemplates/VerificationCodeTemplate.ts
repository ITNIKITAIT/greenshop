export const VerificationCodeTemplate = (code: string) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        /* Общие стили для письма */
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #dddddd;
        }
        .email-body {
            padding: 20px 0;
            text-align: center;
        }
        .email-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #dddddd;
            font-size: 12px;
            color: #777777;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #4CAF50;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            color: #ffffff !important;
        }
        .btn:hover {
            background-color: #45a049;
        }
        p {
            line-height: 1.6;
        }
        a {
        color: #ffffff !important;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Email confirmation</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>Thanks for registering! Please click the button below to confirm your email address:</p>
            <a href="${
                process.env.BASE_URL + `/api/auth/verify/${code}`
            }" class="btn">Confirm email</a>
            <p>If you have not registered on our website, simply ignore this letter.</p>
        </div>
        <div class="email-footer">
            <p>Best regards, GreenShop</p>
            <p>&copy; 2024 GreenShop. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
};
