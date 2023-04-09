import bodyParser from 'body-parser';
import express from 'express';
import { createTransport } from 'nodemailer';
const { json, urlencoded } = bodyParser;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.post('/sendmail', (req, res) => {
  const { name, email, problem } = req.body;

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }

});
res.send('Спасибо за ваш заказ, мы свяжемся с вами в ближайшее время');

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New repair request',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Problem: ${problem}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent');
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});