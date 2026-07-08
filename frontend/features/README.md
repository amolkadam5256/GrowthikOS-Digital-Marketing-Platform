# Features

**Purpose:**
This directory contains feature-based modules that group related components, hooks, and logic specific to a domain or feature.

**What belongs here:**
- Domain-specific components (e.g., `CampaignDashboard.tsx`).
- Feature-specific hooks, utils, and state.

**What should never be placed here:**
- Generic UI components (they belong in `components/`).
- Global application state (belongs in `store/`).

**Naming conventions:**
- kebab-case for feature folders.
- PascalCase for feature entry components.

**Best practices:**
- Think of each feature as a micro-application.
- Keep features decoupled from each other.
