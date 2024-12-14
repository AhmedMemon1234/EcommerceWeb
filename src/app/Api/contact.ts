import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Twilio configuration (Use your Twilio account SID and Auth Token)
    const accountSid = 'your_twilio_account_sid';
    const authToken = 'your_twilio_auth_token';
    const client = twilio(accountSid, authToken);

    // Send WhatsApp message
    try {
      await client.messages.create({
        body: `New message from ${name} (${email}):\n\n${message}`,
        from: 'whatsapp:+14155238886',  // Use your Twilio WhatsApp sandbox number or your Twilio number
        to: 'whatsapp:+923368952826', // Replace with your WhatsApp number
      });
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending message:', error);

      let errorMessage;
      
      if (error instanceof Error) {
        // If it's an Error object, use the message
        errorMessage = error.message || 'Unknown error occurred';
      } else if (typeof error === 'string') {
        // If the error is a string, just use it directly
        errorMessage = error;
      } else {
        // For other unknown error types, log the entire object and set a fallback message
        errorMessage = 'Unknown error occurred';
        console.error('Error details:', error);
      }
      
      res.status(500).json({ message: 'Failed to send message', error: errorMessage });
      
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
