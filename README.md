# Reactform SaaS Feedback App

This project is a Full-Stack SaaS application that allows users to collect feedback from their websites through an embeddable widget. The application includes an admin dashboard and a subscription model for users. It’s built with modern web technologies and follows best practices for performance, security, and scalability.

![ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/f7e17bc8-c25c-48e5-ae25-072335fd4dca)

https://reactform-dashboard.vercel.app/

## Features

- **Embeddable Web Component**: A custom feedback widget that users can embed into their websites.
- **Authentication**: Integrated with [Clerk](https://clerk.dev/) for user authentication and management.
- **Database**: Powered by Supabase and Drizzle ORM for creating, querying, and managing feedback data.
- **TypeScript**: Ensures type safety across the entire app, including server and client code.
- **Payment Integration**: Stripe integration for handling subscriptions and payments.
- **Admin Dashboard**: A dashboard where users can manage feedback and their subscription.
- **Mobile Responsiveness**: A fully responsive design to ensure the app works smoothly on mobile devices.
- **Pagination & Filtering**: Manage feedback with advanced table pagination and filtering features.
- **Next.js**: Utilized for efficient routing, layouts, and server-side rendering.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Supabase (PostgreSQL), Drizzle ORM
- **Authentication**: Clerk
- **Payments**: Stripe
- **UI**: Shadcn UI Components

## Setup Instructions

1. Clone the repository

2. Install dependencies

3. Set up environment variables

5. Run the development server

## Database

The database is hosted on Supabase and managed using Drizzle ORM.
To push new schema changes: npm run db

## Deployment 

This app can be easily deployed to platforms like Vercel, and includes all the necessary environment configurations.

License: This project is licensed under the MIT License.
