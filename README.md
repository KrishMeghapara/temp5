# ASP.NET Core Web API Documentation

A professional React-based documentation site for ASP.NET Core Web API implementation.

## Features

- 📱 Responsive design
- 🎨 Modern UI with smooth animations
- 📋 Interactive navigation
- 💻 Syntax-highlighted code blocks
- 🎯 Clean, professional layout

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Sidebar.css
│   ├── Content.tsx       # Main content area
│   └── Content.css
├── App.tsx               # Main application component
├── App.css               # Global styles
└── index.tsx             # Entry point
```

## Customization

You can easily customize the documentation by editing:

- **Content**: Modify `src/components/Content.tsx` to update documentation sections
- **Navigation**: Update `src/components/Sidebar.tsx` to add/remove sections
- **Styling**: Adjust colors and layout in the CSS files

## Technologies

- React 18 with TypeScript
- CSS3 with modern features
- Responsive design principles
