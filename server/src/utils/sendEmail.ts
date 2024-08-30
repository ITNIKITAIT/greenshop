import mailjetClient from '../email/mailjet';

export const sendEmail = async (
    to: string,
    subject: string,
    HTMLElement: string
) => {
    const request = await mailjetClient
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: 'ads425363@gmail.com',
                        Name: 'GreenShop',
                    },
                    To: [
                        {
                            Email: to,
                            Name: 'Payment',
                        },
                    ],
                    Subject: subject,
                    HTMLPart: HTMLElement,
                },
            ],
        });

    return request;
};
