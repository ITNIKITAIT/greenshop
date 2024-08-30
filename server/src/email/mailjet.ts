const mailjet = require('node-mailjet');

const mailjetClient = mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

export default mailjetClient;
