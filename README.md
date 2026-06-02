# Airbnb-Style Bed & Breakfast Booking Platform

A modern, responsive, and interactive web application for managing a one-bedroom Bed & Breakfast accommodation business.

## Features

- 🏠 Modern, responsive design (Mobile-first)
- 📅 Complete booking system with date selection
- 🖼️ Interactive gallery with lightbox functionality
- 🔐 Secure admin dashboard
- 📧 Instant email notifications for bookings
- 🌙 Dark/Light mode toggle
- 📱 WhatsApp integration
- ⭐ Guest testimonials and reviews
- 🗺️ Location map integration
- 📊 Admin booking management

## Tech Stack

- **Frontend**: Next.js 14+ | React | TypeScript | Tailwind CSS
- **Backend**: Node.js with Next.js API Routes
- **Database**: PostgreSQL (with Supabase option)
- **Authentication**: NextAuth.js
- **Email**: Resend or SendGrid
- **Hosting**: Vercel

## Project Structure

```
bnb-booking/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── gallery/
│   │   ├── contact/
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   ├── types/
│   └── styles/
├── public/
├── prisma/
├── .env.local
├── package.json
└── tailwind.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- SendGrid/Resend API key
- GitHub account (optional, for deployment)

### Installation

1. Clone the repository
```bash
git clone https://github.com/mulza-prog/A.git
cd A
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
```
DATABASE_URL=your_postgresql_url
NEXTAUTH_SECRET=your_secret_key
SENDGRID_API_KEY=your_sendgrid_key
NEXTAUTH_URL=http://localhost:3000
```

5. Set up database
```bash
npx prisma migrate dev
npx prisma db seed
```

6. Run development server
```bash
npm run dev
```

Visit http://localhost:3000

## Database Schema

See `prisma/schema.prisma` for the complete schema including:
- Users (Admin/Host)
- Rooms
- Bookings
- Reviews
- Amenities

## Booking Flow

1. Guest selects dates and number of guests
2. System checks availability
3. Guest fills booking request form
4. Booking details stored in database
5. Email notification sent to host
6. Booking confirmation shown to guest
7. Host reviews and accepts/rejects booking
8. Guest receives confirmation email

## API Routes

- `POST /api/bookings` - Create booking
- `GET /api/bookings` - List bookings (admin)
- `PATCH /api/bookings/:id` - Update booking status
- `GET /api/rooms` - Get rooms
- `POST /api/auth/signin` - Admin login
- `POST /api/emails/send` - Send email notifications

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/bnb_db

# Authentication
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=generate_a_random_secret

# Email Service
SENDGRID_API_KEY=your_api_key
ADMIN_EMAIL=admin@yourbnb.com

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

```bash
vercel deploy
```

### Docker

```bash
docker build -t bnb-booking .
docker run -p 3000:3000 bnb-booking
```

## Admin Dashboard

- **URL**: `/admin`
- **Login**: Secure authentication via NextAuth.js
- Features:
  - View all booking requests
  - Accept/Reject bookings
  - Manage availability
  - Upload/manage photos
  - View statistics

## Booking Pricing

- **Price per night**: $80
- **Maximum guests**: 2 people
- **Payment**: Offline after confirmation

## Support

For issues and questions, please contact:
- **Email**: support@yourbnb.com
- **WhatsApp**: [Link in footer]
- **Phone**: Available on contact page

## License

MIT License - see LICENSE file for details

## Author

Created with ❤️ for a modern BnB experience