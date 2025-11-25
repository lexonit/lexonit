
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This is the Backend API Route that runs on the server
export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transporter with your SMTP details
    // You need to set these environment variables in your .env.local file
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or use 'smtp.host.com' for custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email (e.g., admin@lexonit.com)
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });

    // Email Content Structure
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hr@lexonit.com', // The email where you want to receive leads
      replyTo: email,
      subject: `New Inquiry: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #7c3aed; text-align: center;">New Website Lead</h2>
          <hr style="border: 1px solid #f0f0f0; margin: 20px 0;" />
          
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Interest:</td>
              <td style="padding: 8px 0;"><span style="background: #ede9fe; color: #5b21b6; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${service}</span></td>
            </tr>
          </table>
          
          <br />
          <p style="font-weight: bold;">Message:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed; line-height: 1.5;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <hr style="border: 1px solid #f0f0f0; margin: 30px 0 20px;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            Sent automatically from the LexonIT Website Contact Form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
