[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/PhWn_eB9)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24306992&assignment_repo_type=AssignmentRepo)
# Lizzie's Kitchen Website Project

## Student Information
* **Name:** Sfiso Mabizela
* **Student Number:** ST10524619
* **Module:** WEDE5020

## Project Overview
A responsive, 5-page promotional and pre-ordering website built for Lizzie's Kitchen, an authentic fast-food takeaway spot based in Ivory Park specializing in Kotas, Dagwoods, and Pap & Meat platters.

## Website Goals and Objectives
* Establish a professional digital presence for a township food business.
* Provide clear online menu access with transparent pricing.
* Streamline advance takeaway collection to reduce physical counter wait times.

## Key Features and Functionality
* Mobile-friendly navigation across all 5 pages.
* Interactive menu listing Kotas, Dagwoods, and Pap & Meat.
* Online pre-order pickup enquiry form.
* Multi-location contact guide for Ivory Park branches.

## Timeline and Milestones
* **Week 1:** Wireframing, proposal approval, repository setup.
* **Week 2:** HTML5 page structure and semantically organized content.
* **Week 3:** CSS styling and responsive layouts.
* **Week 4:** JavaScript validation, testing, and GitHub final push.

## Sitemap
* `index.html` - Homepage
* `about.html` - About Us
* `products.html` - Food Menu
* `enquiry.html` - Pre-Order / Enquiry Form
* `contact.html` - Multi-location Contact & Hours

## Changelog

### [v1.0.0] - Part 1 Submission Initial Setup
* **Added:** Initial 5-page HTML structure (`index.html`, `about.html`, `service.html`, `enquiry.html`, `contact.html`).
* **Added:** Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`).
* **Added:** Basic image tags (`<img>`) with alt attributes and folder placeholders (`images/`, `css/`, `js/`).
* **Added:** Working navigation menu links connecting all 5 pages.
* **Added:** Project README documentation, sitemap, and initial repository setup.

## References
* Duckett, J., 2011. *HTML and CSS: Design and Build Websites*. Indianapolis: John Wiley & Sons.

## Part 2 Implementation & Visual Design

### CSS Architecture & Base Styles
* **External Stylesheet**: Linked `css/style.css` across all 5 HTML pages (`index.html`, `about.html`, `service.html`, `enquiry.html`, and `contact.html`).
* **CSS Reset & Variables**: Applied a standard CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`) and defined CSS custom properties (`:root`) for color palette, typography, and transition speeds.
* **Typography Scale**: Built a relative typography hierarchy using `rem` units for font sizes and line heights.
* **Interactive Elements**: Implemented `:hover`, `:focus`, and `:active` pseudo-classes on navigation links, buttons, and form inputs for enhanced user feedback and accessibility.

### Responsive Layouts & Breakpoints
* **CSS Grid & Flexbox**: Utilized Flexbox for sticky navigation bar positioning and form element alignment. Applied CSS Grid for multi-column content displays (hero section, menu cards, and location details).
* **Relative Units**: Employed relative units (`%`, `rem`, `vh`) for responsive padding, margins, and width limits.
* **Media Query Breakpoints**:
  * **Desktop (> 992px)**: Multi-column grid layout with expanded navigation bar.
  * **Tablet (601px - 992px)**: 2-column grid structure with optimized card spacing.
  * **Mobile (<= 600px)**: Single-column stacked layout with full-width buttons and form fields for mobile viewports.

---

## Responsive Testing Evidence

### Desktop View
![Desktop View](images/laptop%20version.png)

### Tablet View
![Tablet View](images/tablet%20version.png)

### Mobile View
![Mobile View](images/mobile%20version.png)

---

## Part 2 Changelog

### [v2.0.0] - Part 2 Submission Update
* **Added**: Created `css/style.css` external stylesheet and linked to all HTML pages.
* **Added**: CSS media queries establishing tablet (`max-width: 992px`) and mobile (`max-width: 600px`) breakpoints.
* **Styled**: Applied consistent color palette, typography scales, card shadows, and button hover animations.
* **Styled**: Re-engineered pre-order/enquiry form controls with explicit borders, backgrounds, and focus rings.
* **Updated**: Recorded responsive design evidence screenshots in `README.md`.
*