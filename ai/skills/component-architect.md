# Component Architect

Break Figma layouts into reusable components.

Identify:
- cards
- navbars
- dashboards
- feature sections
- CTAs
- testimonials
- charts
- mobile nav
- sidebars
- stats blocks

Rules:
- Never duplicate repeated UI
- Create reusable props
- Extract variants
- Use composition patterns
- Prefer atomic reusable structures

Folder structure:
components/
  ui/
  sections/
  dashboard/
  marketing/

Prefer:
- server components where possible
- isolated client components only when needed