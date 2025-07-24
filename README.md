# Lucas Wang Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
2. **Navigate to project directory**
   \`\`\`bash
   cd lucas-portfolio
   \`\`\`

3. **Run setup script**
   
   **On Windows (PowerShell):**
   ```powershell
   .\setup.ps1
   \`\`\`
   
   **On Mac/Linux:**
   \`\`\`bash
   chmod +x setup.sh
   ./setup.sh
   \`\`\`
   
   **Manual setup:**
   \`\`\`bash
   npm install
   npm install tailwindcss-animate
   npx shadcn@latest add button card input textarea badge toast --yes
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open browser**
   Go to `http://localhost:3000`

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **next-themes** - Dark/light mode

## 📁 Project Structure

\`\`\`
lucas-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   └── theme-provider.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
└── package.json
\`\`\`

## 🎨 Features

- ✅ Responsive design
- ✅ Dark/light mode toggle
- ✅ Smooth scroll animations
- ✅ Contact form with toast notifications
- ✅ Professional layout
- ✅ SEO optimized

## 🚀 Deployment

Deploy to Vercel:
\`\`\`bash
npm run build
\`\`\`

## 📝 Customization

1. Update personal information in `app/page.tsx`
2. Modify colors in `tailwind.config.ts`
3. Add/remove sections as needed
4. Update contact information

## 🐛 Troubleshooting

If you encounter issues:

1. **Delete node_modules and reinstall:**
   \`\`\`bash
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`

2. **Clear Next.js cache:**
   \`\`\`bash
   rm -rf .next
   npm run dev
   \`\`\`

3. **Check Node.js version:**
   \`\`\`bash
   node --version  # Should be 18+
   \`\`\`

## 📞 Support

If you need help, check the troubleshooting section or create an issue.
