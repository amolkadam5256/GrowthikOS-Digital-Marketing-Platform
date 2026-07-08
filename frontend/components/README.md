# Components

**Purpose:**
This directory contains all reusable UI components for the application.

**What belongs here:**
- Buttons, inputs, dialogs, cards, typography components.
- Layout components (headers, footers, sidebars).
- Domain-agnostic visual components.

**What should never be placed here:**
- Business logic or state management (use hooks/store).
- Data fetching (use services/hooks).

**Naming conventions:**
- PascalCase for component files (e.g., `Button.tsx`).
- `index.ts` for exporting components.

**Best practices:**
- Keep components pure and presentational where possible.
- Use the `ui/` subdirectory for base atomic components.
