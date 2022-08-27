export default (req, res) => {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  const { method } = req;

  switch (method) {
    case "POST":
      // res.status(200).json("Your mail has been sent");

      const transporter = nodemailer.createTransport({
        port: 26,
        host: "mail.proven.africa",
        auth: {
          user: "enquiries@proven.africa",
          pass: "18#GmAc&m&gm",
        },
        secure: true,
      });

      // const mailData = {
      //   from: "demo email",
      //   to: "your email",
      //   subject: `Message From ${req.body.name}`,
      //   text: req.body.message + " | Sent from: " + req.body.email,
      //   html: `<div>${req.body.message}</div><p>Sent from:
      //   ${req.body.email}</p>`,
      // };

      const mailData = {
        from: "enquiries@proven.africa",
        to: "nelsonomoro@gmail.com",
        subject: `Message From Proven Africa`,
        text: "This is a test message",
        html: `<div>This is a new request from proven website</div><p>Sent from:
        New principles/p>`,
      };

      transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });

      res.status(200);

      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
