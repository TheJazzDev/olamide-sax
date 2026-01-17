# Olamide Sax Portfolio Website

A professional portfolio website for UK-based Nigerian saxophonist, vocalist, and keyboardist Olamide Sax. Built with Next.js 16, Prisma, and PostgreSQL, featuring an admin panel for content management.

## Tech Stack

- **Framework:** Next.js 16.1.1 with App Router
- **Database:** PostgreSQL with Prisma ORM
- **Storage:** Vercel Blob Storage for images
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Features

- 🎵 Video categorization by instrument (Saxophone, Vocal, Keyboard)
- 📸 Image upload with Vercel Blob Storage
- 📰 Press coverage management
- 🎼 Music releases showcase
- 📱 Fully responsive design
- 🔐 Admin panel for content management
- ⚡ Server-side rendering for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database (NeonDB recommended)
- Vercel account (for Blob Storage)

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Vercel Blob Storage (Required for image uploads)
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."

# Node Environment
NODE_ENV="development"
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd olamide-sax
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma Client
   bunx prisma generate

   # Run migrations
   bunx prisma migrate dev
   ```

4. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

   Open [http://localhost:5050](http://localhost:5050) to view the site.

### Admin Panel

Access the admin panel at `/admin/login` (default credentials to be configured).

## Deploy on Vercel

### 1. Database Setup

Create a PostgreSQL database on [NeonDB](https://neon.tech) or your preferred provider.

### 2. Vercel Blob Storage Setup

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Create Database** → **Blob**
3. Create a new Blob store
4. Copy the `BLOB_READ_WRITE_TOKEN` from the **Settings** tab

### 3. Deploy to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Configure environment variables:
     - `DATABASE_URL` - Your PostgreSQL connection string
     - `BLOB_READ_WRITE_TOKEN` - Your Vercel Blob token

3. **Deploy**
   - Vercel will automatically:
     - Run `bunx prisma generate` (via `postinstall` script)
     - Build your Next.js application
     - Deploy to production

### 4. Run Database Migrations

After first deployment, run migrations using Vercel's terminal or locally:

```bash
# Connect to your production database
DATABASE_URL="your_production_url" bunx prisma migrate deploy
```

## Build Scripts

The project includes optimized build scripts:

```json
{
  "scripts": {
    "dev": "next dev -p 5050",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "eslint",
    "postinstall": "prisma generate"
  }
}
```

- **`postinstall`:** Automatically generates Prisma Client after dependency installation
- **`build`:** Generates Prisma Client and builds Next.js application
- **`dev`:** Runs development server on port 5050

## Project Structure

```
├── app/
│   ├── (site)/           # Public-facing pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── media/        # Media gallery with video filters
│   │   ├── press/        # Press coverage
│   │   └── contact/      # Contact page
│   ├── admin/            # Admin panel
│   │   ├── videos/       # Video management
│   │   ├── photos/       # Photo upload with Blob Storage
│   │   ├── music/        # Music releases
│   │   └── press/        # Press items
│   └── api/              # API routes
│       ├── upload/       # Image upload to Vercel Blob
│       ├── videos/       # Video CRUD
│       ├── photos/       # Photo CRUD
│       ├── music/        # Music CRUD
│       └── press/        # Press CRUD
├── components/           # Reusable components
├── lib/                  # Utility functions
├── prisma/              # Database schema and migrations
└── public/              # Static assets
```

## Database Schema

- **Videos:** YouTube/platform videos with categories (Saxophone, Vocal, Keyboard)
- **Photos:** Images stored in Vercel Blob Storage
- **Music:** Music release links (Audiomack, Spotify, etc.)
- **Press:** Press coverage and publications

## Image Upload System

The photo upload system uses Vercel Blob Storage:

1. **Upload**: Files are uploaded through the admin panel at `/admin/photos`
2. **Processing**: Images are validated (type, size) and uploaded to Vercel Blob
3. **Storage**: Files are stored with public access at `https://*.blob.vercel-storage.com`
4. **Display**: Images are automatically optimized using Next.js Image component

**File Requirements:**
- **Formats:** JPEG, PNG, WEBP, GIF
- **Max Size:** 5MB per image
- **Storage:** Vercel Blob (see pricing at [vercel.com/docs/storage/vercel-blob/usage-and-pricing](https://vercel.com/docs/storage/vercel-blob/usage-and-pricing))

## Troubleshooting

### Build Fails with Prisma Error

**Error:** `Module '@prisma/client' has no exported member 'PrismaClient'`

**Solution:** Ensure Prisma Client is generated before build:
```bash
bunx prisma generate
bun run build
```

### Images Not Uploading

**Error:** Upload fails or returns 500

**Solution:** Verify `BLOB_READ_WRITE_TOKEN` is set correctly in environment variables.

### Database Connection Issues

**Error:** `Can't reach database server`

**Solution:** Check your `DATABASE_URL` format:
```
postgresql://username:password@host:port/database?sslmode=require
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

© 2026 Olamide Sax. All rights reserved.
