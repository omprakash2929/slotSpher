
# SlotSpher - Modern Scheduling Platform

📹 [Watch Demo](https://youtu.be/5tdAVeLTeyY)
=======
# Full Stack Scheduling Booking app with Next JS, React, Tailwind CSS, Prisma, Neon, Clerk, Shadcn UI  🔥🔥


## 🚀 Overview

**SlotSpher** is a powerful, full-stack scheduling platform inspired by Calendly. Built with modern technologies, it enables users to create, manage, and share their availability for seamless appointment booking.

## ✨ Features

- **User Authentication** – Secure sign-up and login with Clerk
- **Customizable Event Types** – Create different event durations and descriptions
- **Availability Management** – Set your weekly schedule and time preferences
- **Booking System** – Let others book time slots based on your availability
- **Responsive Design** – Works perfectly on all devices
- **Real-time Updates** – Instant notifications for bookings
- **Analytics** – Track page views and booking statistics

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI  
- **Backend**: Next.js API Routes  
- **Database**: PostgreSQL (via Neon)  
- **ORM**: Prisma  
- **Authentication**: Clerk  
- **Styling**: Tailwind CSS  
- **Deployment**: Vercel (recommended)  

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Neon PostgreSQL database
- Clerk accounts for authentication



## 🚀 Getting Started

Clone the project

```bash
 git clone https://github.com/yourusername/slotSpher.git
```

Go to the project directory

```bash
 cd slotSpher

```

Install dependencies

```bash
 npm install
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=your_neon_postgresql_connection_string`

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key`

` CLERK_SECRET_KEY=your_clerk_secret_key`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`


Run database migrations
```bash
 npx prisma migrate dev
```


Start the development server
```bash
  npm run start
```


## 📚 Database Schema

SlotSpher uses a relational database with the following main models:

- **User** – Stores user information and authentication details  
- **Event** – Defines event types that users can create  
- **Availability** – Manages the user's overall availability settings  
- **DayAvailability** – Specifies availability for each day of the week  
- **Booking** – Records scheduled appointments  

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Neon](https://neon.tech/)
- [Clerk](https://clerk.dev/)
- [Shadcn UI](https://ui.shadcn.com/)

---

Built with ❤️ by **omprakash chauhan**

