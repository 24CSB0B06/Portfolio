# Deekshith Akula - Personal Portfolio

A single-page React portfolio application built using React 18, Vite, and React Router DOM. This app converts the original static HTML/CSS portfolio into a dynamic web app with client-side routing, theme persistence, controlled form validation, and component state management.

---

## How to Run Locally

Make sure you have Node.js installed on your system.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview build:**
   ```bash
   npm run preview
   ```

---

## Component Architecture & State Management

### Component Tree

- App (Theme State & Router)
  - Layout (Shared persistent layout)
    - Navbar
      - ThemeToggle
    - Pages (Rendered inside Outlet)
      - Home (Mount Loading Simulation)
      - About
        - Skills -> SkillGroup -> SkillTag
      - Projects
        - ProjectList -> ProjectCard
      - ProjectDetail (/projects/:projectId)
      - Contact
        - ContactForm
      - NotFound (404 catch-all route)
    - Footer

### State & Lifting Decisions

- **Dark / Light Theme (`theme`)**:
  Lifted up to `App.jsx` because changing the theme changes CSS custom properties across the whole page (`<html>` element) and updates the toggle button in the `Navbar`. By keeping theme state in `App`, any component can access or trigger theme changes smoothly.

- **Contact Form State**:
  Kept inside `ContactForm.jsx` as controlled state (`name`, `email`, `message`). Having state bound to input values allows real-time error checks and disables the submit button until required fields are filled correctly.

- **Card Expansion State (`isExpanded`)**:
  Scoped directly inside `ProjectCard.jsx`. Each card manages its own `useState(false)` toggle so clicking "View Quick Details" on one card expands only that specific card without expanding others.

- **Prop Drilling Demonstration**:
  - `Projects.jsx` -> `ProjectList.jsx` -> `ProjectCard.jsx` (passes project data 2 levels down).
  - `About.jsx` -> `Skills.jsx` -> `SkillGroup.jsx` -> `SkillTag.jsx` (passes technical skills down 3 levels).

---

## Side Effects (`useEffect`) Hooks

1. **Dark/Light Theme Persistence (`App.jsx`)**
   - **Why:** Saves the current theme choice in `localStorage` whenever `theme` changes and reads it on initial load so user preferences stay saved across page refreshes.

2. **Home Page Loading Delay (`Home.jsx`)**
   - **Why:** Simulates a 1-second data loading sequence on component mount using `setTimeout`.
   - **Cleanup:** Clears the timer with `clearTimeout(timer)` when the component unmounts to avoid memory leaks or updating state on an unmounted component.

3. **Navbar Responsive Resize Listener (`Navbar.jsx`)**
   - **Why:** Adds a `resize` event listener on `window` to track screen size for mobile navigation.
   - **Cleanup:** Calls `window.removeEventListener('resize', handleResize)` on unmount to clean up event listeners.

4. **Contact Form Real-time Validation (`ContactForm.jsx`)**
   - **Why:** Re-evaluates form field errors whenever `formData` updates to validate input format and toggle submit button availability.

---

## Tech Stack
- **React 18** (Functional Components + Hooks)
- **React Router DOM v6** (Client-side routing with `NavLink`, `useParams`, dynamic routes)
- **Vite** (Build tool)
- **Custom CSS** (Dark & Light theme CSS custom properties)
