module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      
    },
    // email: {
    //   config: {
    //     provider: 'nodemailer',
    //     providerOptions: {
    //       host: env('SMTP_HOST'),
    //       port: env('SMTP_PORT'),
    //       auth: {
    //         user: env('SMTP_USERNAME'),
    //         pass: env('SMTP_PASSWORD'),
    //       },
    //       pool: true,
    //       logger: true,
    //       debug: true,
    //       maxConnections: 10000,
    //       secure: false,
    //       tls: {
    //         rejectUnauthorized: false,
    //       },
    //     },
  
    //     settings: {
    //       defaultFrom: env('SMTP_FROM'),
    //       defaultReplyTo: env('SMTP_REPLY_TO'),
    //     },
    //   },
    // },
  });