interface OrderResponse {
    order_id: string;
    order_amount: string;
    order_fullName: string;
}

export const SuccesOrder = (order: OrderResponse) => {
    return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Спасибо за покупку!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .header {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px 20px;
            text-align: center;
            font-size: 0.9em;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thanks for your purchase!</h1>
        </div>
        <div class="content">
            <p>Hello, ${order.order_fullName}!</p>
            <p>Thank you for your purchase in our store! We are pleased to inform you that your order has been successfully placed and is already being processed.</p>
            
            <h2>Order details:</h2>
            <ul>
                <li><strong>Order number:</strong> ${order.order_id}</li>
                <li><strong>Total:</strong> ${order.order_amount}$</li>
            </ul>
            
            <p>We will notify you as soon as your order has been shipped. You can track the status of your order in your personal account on our website.</p>
            <p>If you have any questions, please contact our support team and we will be happy to help you.</p>
        </div>
        <div class="footer">
            <p>Thank you for choosing us!</p>
            <p>Sincerely,<br>Team GreenShop</p>
        </div>
    </div>
</body>
</html>
`;
};
