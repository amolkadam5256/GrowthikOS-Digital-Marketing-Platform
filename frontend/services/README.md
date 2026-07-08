# Services

**Purpose:**
This directory handles all external communications, such as API requests, third-party integrations, and side effects.

**What belongs here:**
- API clients (Axios, Fetch wrappers).
- Endpoints definition for domains (e.g., `userService.ts`, `authService.ts`).

**What should never be placed here:**
- React components.
- UI state.

**Naming conventions:**
- camelCase for service files (e.g., `apiClient.ts`).

**Best practices:**
- Abstract external dependencies.
- Handle error parsing before passing data to the application layer.
