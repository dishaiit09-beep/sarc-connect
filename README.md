# SARC Connect

SARC Connect is a React + Vite frontend website designed as a digital gateway for the Student Alumni Relations Cell, IIT Bombay.

The website presents SARC’s student-alumni ecosystem through a clean multi-page interface covering portfolios, events, impact and interactive exploration.

## Features

- Multi-page routing using React Router
- Home page with SARC overview and portfolio cards
- Events page with video reel, image carousel and event cards
- Impact page with text carousel, statistics and Find Your Path tool
- Reusable React components
- Responsive dark teal and gold themed UI
- Static assets managed through public/assets

## Pages

### Home

Introduces SARC Connect as a digital bridge between students and alumni and highlights all major SARC portfolios.

### Events

Showcases SARC initiatives through an event video reel, real event images and event cards.

### Impact

Highlights mentorship, alumni stories and student-alumni impact through statistics and an interactive recommendation tool.

## Tech Stack

- React
- Vite
- React Router
- CSS

## How to Run Locally

Step 1: Install dependencies

npm install

Step 2: Start the development server

npm run dev

Step 3: Open the local website link in your browser

http://localhost:5173/

If Vite starts on another port, open the link shown in the terminal.

## Project Structure

src/
  components/
    Navbar.jsx
    EventCard.jsx
    Carousel.jsx
    PathFinder.jsx

  pages/
    Home.jsx
    Events.jsx
    Impact.jsx

  App.jsx
  App.css
  main.jsx

public/
  assets/

## Approach

The website was designed as a digital gateway for SARC rather than a static information page. The Home page introduces the complete SARC ecosystem through portfolio cards, the Events page uses real visual media to show event energy, and the Impact page includes interactive elements to represent student-alumni engagement.

The project uses reusable React components such as Navbar, EventCard, Carousel and PathFinder to keep the code modular. React state is used for the carousels and the Find Your Path recommendation tool.

## Author

Disha Agarwal