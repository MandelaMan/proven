require("dotenv").config();

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = req.body;

  // Welcome to Proven!

  // Hi Nelson!

  // Thanks for the request made on {date}. This is to confirm that your request has been successfully received and is currently under process. Attached to this is a copy of your invoice, which includes details of your order.
  // Delivery normally takes up to {duration}; therefore, our technical team should be there no later than {date}. We will notify you in the event of any unexpected delay.
  // Proven values your business and is continuously looking for ways to better satisfy its customers. Please do share with us if there is a way we can serve you better.

  // Sincerely,
  // Yvonne
  // Sales lead.
  // Proven

  const message = `<p>
                    Dear Proven,\r\n\n
                    You have recieved a new client request\r\n
                    Client Name: ${body.name}\r\n
                    Client Email: ${body.email}\r\n
                    Client Phone: ${body.mobile_no}\r\n
                    Service Category: ${body.service}\r\n
                    Service sub category: ${body.sub_category_service}\r\n
                    </p>
                  `;

  const data = {
    to: [
      // "enquiries@proven.africa",
      "nelsonomoro@gmail.com",
      // "kevkiruthu@gmail.com",
      // "susan@proven.co.ke",
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
