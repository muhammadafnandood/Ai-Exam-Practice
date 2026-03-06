# AI-Exam Practice Platform

An AI-powered exam preparation platform built with Next.js to help students practice and improve their exam skills.

## 🚀 Features

- **Interactive Exam Interface**: Real-time exam practice with timer
- **Dashboard**: Track your progress and performance
- **Results Analysis**: Detailed feedback on your exams
- **User Authentication**: Secure login with Email/Password and Google OAuth
- **Responsive Design**: Works on all devices with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: [Next.js 14.2.3](https://nextjs.org/)
- **Frontend**: [React 18.3.1](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4.3](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Setup

```bash
# Clone the repository
git clone https://github.com/muhammadafnandood/Ai-Exam-Practice.git

# Navigate to project directory
cd Ai-Exam-Practice

# Install dependencies
npm install

# Create .env.local file and add Google OAuth credentials
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🔐 Setting Up Google OAuth (Required for Google Login)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Set **Authorized redirect URI**:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production (Vercel): `https://your-app.vercel.app/api/auth/callback/google`
6. Copy **Client ID** and **Client Secret** to `.env.local`

```env
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. **Add Environment Variables** in Vercel dashboard:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET` (generate with: `openssl rand -base64 32`)
   - `NEXTAUTH_URL` (your Vercel app URL)
5. Vercel will auto-detect Next.js and deploy

**Demo URL**: [Add your Vercel deployment URL here]

## 📁 Project Structure

```
exam/
├── components/          # Reusable React components
├── context/            # React context for state management
├── data/               # Static data and configurations
├── pages/              # Next.js pages and API routes
├── public/             # Static assets
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Muhammad Afnan**

- GitHub: [@muhammadafnandood](https://github.com/muhammadafnandood)
- Project: [Ai-Exam-Practice](https://github.com/muhammadafnandood/Ai-Exam-Practice)

---

Built with ❤️ using Next.js
