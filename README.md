# 🏠 HousingViz — Housing Market Trends Analytics Platform

A full-stack Flask web application for visualizing housing market trends using embedded Tableau dashboards, powered by GSAP, AOS, and Particles.js animations.

---

## 🚀 Quick Setup

### 1. Prerequisites
- Python 3.8+
- pip

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the application
```bash
python app.py
```

### 4. Open in browser
```
http://127.0.0.1:5000
```

---

## 📁 Project Structure

```
housing_viz/
├── app.py                  # Flask application routes
├── requirements.txt        # Python dependencies
├── templates/
│   ├── base.html           # Base template (navbar, footer, loader)
│   ├── index.html          # Home page
│   ├── about.html          # About the project
│   ├── housingfeatures.html # Housing features breakdown
│   ├── worksheets.html     # Tableau worksheets gallery
│   ├── dashboard.html      # Main Tableau dashboard
│   ├── story.html          # Tableau story presentation
│   ├── insights.html       # Key insights & findings
│   ├── team.html           # Team members
│   └── contact.html        # Contact form
├── static/
│   ├── css/
│   │   └── style.css       # Global styles
│   └── js/
│       └── main.js         # Animations & interactions
```

---

## 🎨 Features

- **Full-screen loading animation** with city skyline build-up
- **Glassmorphism navbar** with scroll effect
- **Tableau Public embeds**: 4 worksheets + 1 dashboard + 1 story
- **GSAP animations**: Hero text reveal, floating icons, page transitions
- **AOS scroll animations**: Every section animates on scroll
- **Particles.js**: Dynamic particle backgrounds on hero pages
- **Animated counters**: Number statistics animate when visible
- **3D tilt cards**: Team cards with perspective tilt on hover
- **Responsive design**: Works on desktop, tablet, and mobile
- **FAQ accordion**: Interactive FAQ with smooth expand/collapse

---

## 📊 Tableau Visualizations

| Page | Visualization | URL |
|------|--------------|-----|
| Worksheets | Sheet 1 — Count of Transformed Housing Data | Assignment_17732394557250 |
| Worksheets | Sheet 2 — Average Sale Prices | Sheet2_17732446227310 |
| Worksheets | Sheet 3 — Area of House from Basement | Sheet3_17732446505130 |
| Worksheets | Sheet 4 — Total Sales by Renovation Year | Sheet4_17732446791380 |
| Dashboard | Housing Market Analysis Dashboard | DashBoard_17732448725210 |
| Story | Housing Market Data Story | Story_17732454386960 |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Python Flask | Backend web framework |
| HTML5 + Jinja2 | Templating |
| Tailwind CSS (CDN) | Utility-first styling |
| GSAP 3 | JavaScript animations |
| AOS | Scroll-triggered animations |
| Particles.js | Background particle effects |
| Font Awesome 6 | Icons |
| Google Fonts | Poppins + Inter typography |
| Tableau Public | Data visualizations (embedded) |

---

## 🎯 Color System

| Variable | Value | Usage |
|---------|-------|-------|
| Primary Blue | `#2A6F97` | Buttons, accents |
| Dark Background | `#0D1B2A` | Page backgrounds |
| Secondary BG | `#1B263B` | Card backgrounds |
| Accent Cyan | `#00F5D4` | Highlights, hover states |
| Text | `#EAEAEA` | Body text |

---

## 📱 Pages

1. **Home** — Hero with stats, feature preview, visualization preview, CTA
2. **About** — Problem statement, dataset overview, tech stack, workflow timeline
3. **Housing Features** — 7 key feature cards with data breakdowns
4. **Worksheets** — 4 embedded Tableau worksheets with descriptions
5. **Dashboard** — Full embedded Tableau dashboard
6. **Story** — Tableau story with scene navigator and explanations
7. **Insights** — Animated counters, 10 key findings, market breakdown charts
8. **Team** — Team cards with 3D tilt effect and social links
9. **Contact** — Contact form with FAQ accordion and Google Maps

---

*Built with ❤️ for data-driven housing market insights*
