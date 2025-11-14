# EKIPA STRATEGÓW - Frontend

Next.js 14 frontend for AI-powered website generation. Includes briefing form, chat interface, and status tracking for EKIPA STRATEGÓW.

## Features

- 📝 **Briefing Form**: Comprehensive form for collecting project requirements
- 📊 **Status Dashboard**: Real-time project progress tracking with visual indicators
- 💬 **Chat Interface**: Interactive AI assistant for project consultation
- 👁️ **Preview Panel**: Responsive preview with Desktop/Tablet/Mobile views
- 🎨 **Modern UI**: Built with Tailwind CSS for a polished look
- 🔒 **Type-Safe**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.4
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/progreswwa/ekipa-strategow-frontend.git
cd ekipa-strategow-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
ekipa-strategow-frontend/
├── app/
│   ├── api/
│   │   └── form/
│   │       └── route.ts          # API handler for form submissions
│   ├── dashboard/
│   │   └── page.tsx              # Status checker dashboard
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage with briefing form
├── components/
│   ├── BriefingForm.tsx          # Form component
│   ├── ChatInterface.tsx         # Chat component
│   └── PreviewPanel.tsx          # Preview component
├── types/
│   └── index.ts                  # TypeScript type definitions
└── ...config files
```

## Usage

### Filling the Briefing Form

1. Navigate to the homepage
2. Fill in your company details, industry, and project goals
3. Select your budget range and timeline
4. Add any additional information
5. Submit the form

### Viewing Project Status

1. Click "View Dashboard" or navigate to `/dashboard`
2. View real-time progress updates
3. Open the chat interface to interact with the AI assistant
4. Preview your website in different device modes

## API Endpoints

### POST /api/form

Submit a briefing form.

**Request Body:**
```json
{
  "companyName": "string",
  "industry": "string",
  "targetAudience": "string",
  "goals": "string",
  "budget": "string",
  "timeline": "string",
  "additionalInfo": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Briefing form submitted successfully!",
  "data": {
    "projectId": "proj_123456789"
  }
}
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to EKIPA STRATEGÓW.
