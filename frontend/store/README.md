# Store

**Purpose:**
This directory contains global state management configuration and slices.

**What belongs here:**
- Zustand/Redux/Context global stores.
- State slices for global data (e.g., user session, theme).

**What should never be placed here:**
- Local component state.
- API logic (use `services/`).

**Naming conventions:**
- camelCase for store files (e.g., `useAuthStore.ts`).

**Best practices:**
- Keep global state as small as possible.
- Prefer server state tools (like React Query) for remote data over global stores.
