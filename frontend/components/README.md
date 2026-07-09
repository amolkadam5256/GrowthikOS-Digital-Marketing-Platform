# Components

**Purpose:**
This directory contains all reusable UI components for the application.

## Folder Structure

```text
components/
  marketing/
    home/
      index.ts
      MarketingHome.tsx
      data.ts
      ui.tsx
      interactive/
        FaqAccordion.tsx
        GrowthReadout.tsx
        ServiceExplorer.tsx
      sections/
        FaqSection.tsx
        FinalCta.tsx
        Footer.tsx
        Hero.tsx
        MarketInsights.tsx
        SeoExpertise.tsx
        ServicesSection.tsx
        SiteNav.tsx
        StorySection.tsx
        TopBar.tsx
        TrustBar.tsx
        WhyChoose.tsx
```

**What belongs here:**

- Buttons, inputs, dialogs, cards, typography components.
- Layout components (headers, footers, sidebars).
- Domain-agnostic visual components.
- Route-specific composed components when they are split into a clear feature
  folder, such as `marketing/home`.

**What should never be placed here:**

- Business logic or state management (use hooks/store).
- Data fetching (use services/hooks).

**Naming conventions:**

- PascalCase for component files (e.g., `Button.tsx`).
- `index.ts` for exporting components.
- Page folders should expose a single entrypoint through `index.ts`.
- Split large pages into `sections/` for server-rendered content and
  `interactive/` for client components.
- Keep copy, navigation items, cards, and repeated arrays in `data.ts`.

**Best practices:**

- Keep components pure and presentational where possible.
- Use the `ui/` subdirectory for base atomic components.
- Add `"use client"` only to components that need state, effects, browser APIs,
  or event handlers.
- Import page-level components from the folder entrypoint, for example:
  `@/components/marketing/home`.
