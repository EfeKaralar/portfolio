// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';

// Email service configuration
// You can use services like SendGrid, Resend, or Nodemailer with SMTP

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Option 1: Using Resend (Recommended - Simple and Free tier available)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Change this to your verified domain
        to: process.env.CONTACT_EMAIL || 'karalar.alpefe@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
    }
    // // Option 2: Using SendGrid
    // else if (process.env.SENDGRID_API_KEY) {
    //   const sgMail = await import('@sendgrid/mail');
    //   sgMail.default.setApiKey(process.env.SENDGRID_API_KEY);

    //   await sgMail.default.send({
    //     to: process.env.CONTACT_EMAIL || 'karalar.alpefe@gmail.com',
    //     from: process.env.SENDGRID_FROM_EMAIL || 'noreply@alpkaralar.com',
    //     replyTo: email,
    //     subject: `Portfolio Contact: ${subject}`,
    //     text: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    //     html: `
    //       <h2>New Contact Form Submission</h2>
    //       <p><strong>From:</strong> ${name} (${email})</p>
    //       <p><strong>Subject:</strong> ${subject}</p>
    //       <h3>Message:</h3>
    //       <p>${message.replace(/\n/g, '<br>')}</p>
    //     `,
    //   });
    // }
    // // Option 3: Using Nodemailer with SMTP (Gmail, etc.)
    // else if (process.env.SMTP_HOST) {
    //   const nodemailer = await import('nodemailer');

    //   const transporter = nodemailer.default.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: parseInt(process.env.SMTP_PORT || '587'),
    //     secure: process.env.SMTP_SECURE === 'true',
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASS,
    //     },
    //   });

    //   await transporter.sendMail({
    //     from: process.env.SMTP_FROM || 'noreply@alpkaralar.com',
    //     to: process.env.CONTACT_EMAIL || 'karalar.alpefe@gmail.com',
    //     replyTo: email,
    //     subject: `Portfolio Contact: ${subject}`,
    //     text: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    //     html: `
    //       <h2>New Contact Form Submission</h2>
    //       <p><strong>From:</strong> ${name} (${email})</p>
    //       <p><strong>Subject:</strong> ${subject}</p>
    //       <h3>Message:</h3>
    //       <p>${message.replace(/\n/g, '<br>')}</p>
    //     `,
    //   });
    // }
    // Fallback: Log to console (development only)
    else {
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`From: ${name} (${email})`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('===================================');

      // In production without email service, you might want to return an error
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: 'Email service not configured' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
