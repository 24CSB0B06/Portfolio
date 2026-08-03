# Personal Portfolio Website

A fully responsive personal portfolio website built using pure HTML5 and CSS3 without external frameworks or preprocessors.

## Design Rationale

The visual design uses a cohesive slate blue (`#2563eb`) and deep navy (`#0f172a`) color palette defined via CSS custom properties (`:root`) to maintain consistent theming across all components. Typography relies on a clean system font stack (`system-ui`) for optimal cross-platform legibility. High-contrast text and explicit focus indicators (`:focus-visible`) enforce WCAG AA accessibility standards. Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) structure the document into logical sections with a single `<h1>` main heading hierarchy for screen reader compatibility.

## Layout Technique

The layout leverages a combination of Flexbox and CSS Grid:
- **Flexbox**: Employed for 1-dimensional alignment in the sticky header navigation, hero content, skill pill badges, and call-to-action buttons. It handles content centering and fluid distribution with minimal code overhead.
- **CSS Grid**: Utilized for the 2-dimensional project card showcase (`grid-template-columns: repeat(3, 1fr)`). CSS Grid ensures equal-height card alignment across rows and columns.

Two responsive media query breakpoints (`768px` for tablets and `480px` for mobile devices) adjust the grid layout into two columns and a single column respectively, while reflowing navigation links and typography size for smaller screens.

## Known Limitations

1. **Static Contact Form**: The form utilizes HTML5 client-side validation (`required`, input types) but lacks backend integration (Node.js/Express) or JavaScript handling, which will be integrated in subsequent course assignments.
2. **Device Testing**: Testing was conducted using desktop browser viewport emulation across specified breakpoints rather than physical mobile hardware.