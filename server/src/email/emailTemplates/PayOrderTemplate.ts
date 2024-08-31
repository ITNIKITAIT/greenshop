import { CartItem, Product } from '@prisma/client';
import { getPrice } from '../../utils/getPrice';

export const PayOrderTemplate = (
    fullName: string,
    items: (CartItem & { product: Product })[],
    totalPrice: number,
    deliveryPrice: number,
    paymentUrl: string
) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Information</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
        a {
        color: #fff !important;
        text-decoration: none;
        }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        background-color: #4CAF50;
        color: #ffffff;
        padding: 10px 0;
        border-radius: 8px 8px 0 0;
      }
      .header h1 {
        margin: 0;
      }
      .content {
        padding: 20px;
      }
      .content p {
        line-height: 1.6;
        color: #333333;
      }
      .payment-details {
        width: 100%;
        margin: 20px 0;
        border-collapse: collapse;
      }
      .payment-details th,
      .payment-details td {
        padding: 12px;
        border: 1px solid #dddddd;
        text-align: left;
      }
      .payment-details th {
        background-color: #f2f2f2;
      }
      .button-container {
        text-align: center;
        margin-top: 20px;
      }
      .button {
        background-color: #4CAF50;
        color: #fff !important;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 5px;
        display: inline-block;
      }
      .footer {
        text-align: center;
        color: #777777;
        font-size: 12px;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid #dddddd;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Payment Information</h1>
      </div>
      <div class="content">
        <p>Dear ${fullName},</p>
        <p>Thank you for your recent purchase. Here are the details of your order and payment information:</p>
        
        <table class="payment-details">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          ${items
              .map(
                  (item) => `
            <tr>
                <td>${item.product.name}</td>
                <td>${item.quantity}</td>
                <td>${getPrice(item.product.price, item.product.sale)}</td>
          </tr>`
              )
              .join('')}
            <tr>
                <td>Delivery</td>
                <td></td>
                <td><strong>$${deliveryPrice}</strong></td>
          </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td></td>
                <td><strong>$${totalPrice.toFixed(2)}</strong></td>
            </tr>
        </table>
        
        <p>Please click the button below to proceed with your payment:</p>
        
        <div class="button-container">
          <a href="${paymentUrl}" class="button">Pay Now</a>
        </div>
        
        <p>If you have any questions, feel free to contact our support team.</p>
        <p>Thank you for choosing our service!</p>
      </div>
      <div class="footer">
        &copy; 2024 GreenShop. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
};
