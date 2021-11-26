import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async (req, res) => {
  const msg = {
    to: 'info@futuredeeptech.com',
    from: req.body.email,
    subject: req.body.firstName +  ' | FDT',
    text: req.body.content,
  };

  console.log(msg)

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    console.log(error)
  }
}