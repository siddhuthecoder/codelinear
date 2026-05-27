/**
 * N7 design token registry — mirrors CSS custom properties in styles/tokens/
 * Use for programmatic access; prefer Tailwind utilities in components.
 */

export const colors = {
  navy: {
    950: "var(--n7-navy-950)",
    900: "var(--n7-navy-900)",
    800: "var(--n7-navy-800)",
    700: "var(--n7-navy-700)",
  },
  blue: {
    600: "var(--n7-blue-600)",
    500: "var(--n7-blue-500)",
    400: "var(--n7-blue-400)",
  },
  gray: {
    50: "var(--n7-gray-50)",
    100: "var(--n7-gray-100)",
    300: "var(--n7-gray-300)",
    400: "var(--n7-gray-400)",
    500: "var(--n7-gray-500)",
    600: "var(--n7-gray-600)",
  },
  white: "var(--n7-white)",
} as const;

export const layout = {
  pageMaxWidth: "var(--page-max-width)",
  gutterX: "var(--gutter-x)",
  sectionY: "var(--section-y)",
  sectionYSm: "var(--section-y-sm)",
  sectionYLg: "var(--section-y-lg)",
  headerHeight: "var(--header-height)",
  gapSection: "var(--gap-section)",
  gapBlock: "var(--gap-block)",
} as const;

export const typography = {
  displayXl: "var(--text-display-xl)",
  displayLg: "var(--text-display-lg)",
  headingLg: "var(--text-heading-lg)",
  headingMd: "var(--text-heading-md)",
  bodyLg: "var(--text-body-lg)",
  bodyMd: "var(--text-body-md)",
  label: "var(--text-label)",
} as const;

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  button: "var(--radius-button)",
} as const;
