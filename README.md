# Personal Hub - Digital Portfolio & Social Media Hub

<!-- repo-intro:start -->
**Project snapshot:** Personal Hub is a modern portfolio and social-presence dashboard designed to bring projects, skills, platforms, recent content, and personal brand touchpoints into one responsive site.

**What it demonstrates:** Next.js · Tailwind CSS · Framer Motion · portfolio UX · multi-platform presentation.
<!-- repo-intro:end -->

A modern, responsive personal hub built with Next.js 15, featuring a beautiful interface to showcase your social media presence, projects, skills, and content across all platforms.

## ✨ Features

- **🎨 Modern Design**: Beautiful gradient backgrounds, smooth animations, and responsive layout
- **📱 Multi-Platform Integration**: Connect all your social media accounts (GitHub, YouTube, Twitter, Twitch, TikTok, LinkedIn, Instagram)
- **📊 Stats Dashboard**: Display your impressive numbers and achievements
- **🎯 Latest Content**: Showcase your recent videos, blog posts, and projects
- **💻 Skills Showcase**: Organized technical skills by category
- **📧 Newsletter Signup**: Collect email subscriptions with a beautiful form
- **🌙 Dark Mode Support**: Automatic dark/light theme switching
- **⚡ Performance Optimized**: Built with Next.js 15 and Tailwind CSS
- **🎬 Smooth Animations**: Powered by Framer Motion

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your personal hub!

## 🎨 Customization

### Personal Information
Edit `src/app/page.tsx` to update:
- Your name and title
- Bio/description
- Location and availability status
- Contact email

### Social Media Links
Update the `socialLinks` array in `src/app/page.tsx`:
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username', // Replace with your URL
    icon: Github,
    color: 'hover:bg-gray-700 hover:text-white',
    description: 'Open source projects & code'
  },
  // Add more platforms...
];
```

### Skills & Technologies
Modify the skills in `src/components/SkillsSection.tsx`:
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript'] // Add your skills
  },
  // Update categories...
];
```

### Projects
Update your featured projects in `src/app/page.tsx`:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    link: 'https://github.com/your-username/project',
    demo: 'https://your-project.com'
  }
];
```

### Latest Content
Customize your content showcase in `src/components/LatestContent.tsx`:
```javascript
const contentItems = [
  {
    title: 'Your Latest Video/Post',
    description: 'Description of your content',
    platform: 'YouTube',
    link: 'https://your-content-url'
  }
];
```

### Stats & Metrics
Update your achievements in `src/components/StatsSection.tsx`:
```javascript
const stats = [
  {
    label: 'Total Followers',
    value: '10K+', // Update with your numbers
    icon: Users
  }
];
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Components

- `StatsSection`: Display impressive numbers and metrics
- `LatestContent`: Showcase recent content across platforms
- `SkillsSection`: Organized technical skills display
- `Newsletter`: Email subscription component

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click!

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
