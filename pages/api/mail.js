require("dotenv").config();

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = req.body;

  const message = `Dear Proven,\r\n\n
                   You have recieved a new client request\r\n
                   Client Name: ${body.name}\r\n
                   Client Email: ${body.email}\r\n
                   Client Phone: ${body.mobile_no}\r\n
                   Service Category: ${body.service}\r\n
                   Service sub category: ${body.sub_category_service}\r\n
                  `;

  const data = {
    to: [
      "enquiries@proven.africa",
      "nelsonomoro@gmail.com",
      "kevkiruthu@gmail.com",
      "susan@proven.co.ke",
    ],
    from: "website@proven.africa",
    subject: "New Client Request",
    // text: message,
    html: message.replace(/\r\n/g, "<br/>"),
  };

  mail.send(data).then(
    () => {
      res.send(200).json("Success");
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
