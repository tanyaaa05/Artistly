# Artistly - Performing Artist Booking Platform

A modern, responsive web application built with Next.js 13.5.6 and React 18.2.0 for connecting performing artists with event organizers.

## 🚀 Features

- **Homepage**: Hero section, category cards, and featured artists
- **Artist Listing**: Filterable grid with search, category, location, and price filters
- **Artist Onboarding**: Multi-step form with validation using React Hook Form + Yup
- **Manager Dashboard**: View and manage all registered artists
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Validation**: Comprehensive validation with error handling
- **Mock Data**: Frontend-only with static JSON data

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.6 (App Router)
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Forms**: React Hook Form 7.48.2 + Yup 1.2.0
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18.18.2 (see .nvmrc)
- npm, yarn, or pnpm

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd artistly-platform
   ```

2. **Use correct Node version**
   ```bash
   nvm use
   # or
   nvm install 18.18.2 && nvm use 18.18.2
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
artistly-platform/
├── app/                    # Next.js App Router pages
│   ├── artists/           # Artist listing page
│   ├── dashboard/         # Manager dashboard
│   ├── onboarding/        # Artist registration form
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── ui/               # ShadCN UI components
│   ├── ArtistCard.tsx    # Artist display card
│   ├── ArtistFilters.tsx # Filtering controls
│   ├── CategoryCards.tsx # Homepage categories
│   ├── Hero.tsx          # Homepage hero section
│   ├── Navigation.tsx    # Main navigation
│   └── Footer.tsx        # Site footer
├── contexts/             # React Context providers
│   └── ArtistContext.tsx # Global artist state
├── data/                 # Mock data
│   └── mockArtists.ts    # Static artist data
├── types/                # TypeScript definitions
│   └── artist.ts         # Artist-related types
├── .nvmrc               # Node version specification
├── next.config.mjs      # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🎯 Key Features

### Homepage
- Responsive hero section with call-to-action buttons
- Category cards for different artist types
- Featured artists showcase
- Professional footer with links

### Artist Listing
- Grid layout with responsive design
- Advanced filtering by category, location, price range
- Real-time search functionality
- Artist cards with essential information
- "Ask for Quote" functionality

### Artist Onboarding
- Multi-section registration form
- Form validation with React Hook Form + Yup
- Multi-select checkboxes for categories and languages
- Dropdown for fee ranges
- File upload placeholder for images
- Success handling and navigation

### Manager Dashboard
- Statistics overview cards
- Complete artist listings with contact information
- Responsive table/card layout
- Action buttons for management

## 🔒 Form Validation

The onboarding form includes comprehensive validation:
- Required field validation
- Email format validation
- Minimum character requirements
- Multi-select validation
- Real-time error display

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Mobile navigation menu
- Touch-friendly interactions

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom color palette with purple/indigo theme
- ShadCN UI components for consistency
- Dark mode support (configured)
- Smooth transitions and hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set Node.js version to 18.18.2 in project settings
3. Deploy automatically on push to main branch

### Manual Build
``` bash
npm run build
npm start
```

## 📦 Package Versions (Locked)

All dependencies use exact versions (no ^ or ~):
- next: 13.5.6
- react: 18.2.0
- react-dom: 18.2.0
- tailwindcss: 3.4.1
- react-hook-form: 7.48.2
- yup: 1.2.0

## 🧪 Development Notes

- Mock data is used throughout the application
- Form submissions log to console
- Quote requests show alert dialogs
- All images use placeholder URLs
- Context API manages global state

## 🔄 Future Enhancements

- Backend API integration
- Real image upload functionality
- User authentication
- Payment processing
- Review and rating system
- Advanced search with filters
- Email notifications
- Calendar integration

## 📄 License

This project is for educational/demonstration purposes.
