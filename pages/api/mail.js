require("dotenv").config();

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const message = `New service request from proven.africa`;

  const data = {
    to: "enquiries@proven.africa",
    from: "website@proven.africa",
    subject: "New Client Request",
    text: message,
    html: message.replace(/\r\n/g, "<br/>"),
  };

  mail.send(data);
};
