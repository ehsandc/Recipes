# 🍳 Recipe Discovery App

> A modern, responsive recipe discovery application built with React and Chakra UI. Browse thousands of recipes from around the world, filter by cuisine type, dietary preferences, and meal categories.

**Live Demo**: https://ehsandc.github.io/Recipes/

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.10.9-teal.svg)
![Vite](https://img.shields.io/badge/Vite-3.1.0-646CFF.svg)

## ✨ Features

### 🔍 Advanced Filtering

- **Text Search**: Search recipes by name in real-time
- **Cuisine Filters**: Filter by 9 international cuisines (Mexican, Italian, Indian, Thai, Korean, Chinese, Japanese, French, American)
- **Diet Labels**: Quick filter for Vegetarian, Vegan, and Pescatarian diets
- **Category Browsing**: 20+ interactive category pills for quick navigation

### 🎨 Design Highlights

- **Modern UI**: Beautiful gradient-based design with gold and red color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Glass Morphism**: Modern frosted-glass navbar effect

### 🚀 Performance Optimized

- **Memoized Components**: React.memo and useMemo to prevent unnecessary re-renders
- **Code Splitting**: Optimized bundle size with dynamic imports
- **Lazy Loading**: Images load on demand for better performance
- **Efficient Filtering**: Optimized filter algorithm with useMemo

### 📱 User Experience

- **Fixed Navigation**: Sticky navbar stays accessible while scrolling
- **Mobile Drawer Menu**: Slide-out navigation for mobile devices
- **Empty States**: Helpful messages when no recipes match filters
- **Recipe Detail Pages**: Full ingredient lists and nutrition information

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **UI Library**: Chakra UI 2.10.9
- **Build Tool**: Vite 3.1.0
- **Routing**: React Router DOM 7.9.1
- **Animation**: Framer Motion 7.10.3
- **Type Checking**: PropTypes for runtime validation
- **Package Manager**: npm

## 📦 Project Structure

```
Recipes-Upgraded/
├── public/
│   ├── recipes-logo.svg          # App logo
│   └── 404.html                  # 404 error page
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation component
│   │   ├── Footer.jsx            # Footer component
│   │   ├── RecipeCard.jsx        # Recipe card component
│   │   └── CategoryPill.jsx      # Reusable category button
│   ├── pages/
│   │   ├── RecipeListPage.jsx    # Main recipe listing page
│   │   └── RecipeDetailPage.jsx  # Individual recipe details
│   ├── theme/
│   │   └── constants.js          # Design tokens and constants
│   ├── utils/
│   │   ├── data.js               # Recipe data
│   │   └── slug.js               # URL slug utility
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Recipes-Upgraded
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📖 Usage

### Browsing Recipes

- Browse all recipes on the home page
- Click any recipe card to view full details
- Use the search bar to find specific recipes

### Filtering Options

1. **Search Bar**: Type any recipe name or keyword
2. **Categories Dropdown**:
   - 🌍 World Cuisines (9 options)
   - 🔥 Popular Recipes (6 options)
   - 🥗 Healthy & Diet (5 options)
   - 🎉 Holiday Recipes (5 options)
   - 🍽️ Meal Types (6 options)
3. **Diet Buttons**: Quick filter for dietary preferences
4. **Category Pills**: Click any pill in the hero section for instant filtering

### Navigation

- **Desktop**: Full navigation bar with all filters visible
- **Mobile**: Hamburger menu with drawer navigation
- **Logo**: Click logo to clear all filters and return home

## 🎯 Code Quality Features

### Best Practices Implemented

- ✅ **Component Reusability**: DRY principle with reusable components
- ✅ **PropTypes Validation**: Runtime type checking for all props
- ✅ **Design Tokens**: Centralized color and spacing constants
- ✅ **JSDoc Comments**: Comprehensive documentation for all components
- ✅ **Performance Optimization**: Memoization and lazy loading
- ✅ **Accessibility**: ARIA labels and keyboard navigation
- ✅ **Semantic HTML**: Proper HTML5 structure
- ✅ **Error Handling**: Graceful error states and fallbacks

### Architecture Decisions

- **Single Source of Truth**: Category data centralized in constants
- **Separation of Concerns**: Components, pages, utils, and theme separated
- **Immutable State**: Proper React state management patterns
- **Pure Components**: Functional components with hooks

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for portfolio demonstration.

## 👨‍💻 Author

Built as a portfolio project to demonstrate:

- Modern React development skills
- UI/UX design capabilities
- Code quality and best practices
- Responsive design implementation
- Performance optimization techniques

## 🙏 Acknowledgments

- Recipe data powered by Edamam API
- UI framework by Chakra UI
- Icons and emojis for visual enhancement

---

**Note**: This is a portfolio project demonstrating front-end development skills. The recipe data is static for demonstration purposes.
