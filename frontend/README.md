# Frontend (Next.js)

Independent Next.js 16 application — part of the Digital Marketing Platform monorepo.

## Dev Server

```bash
cd frontend        # Always run commands from HERE, not from the repo root
npm install
npm run dev        # http://localhost:3000
```

## Structure

```
frontend/
├── app/               # Next.js App Router pages and layouts
├── assets/            # Static assets imported by components
├── components/        # Reusable UI components
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── charts/
│   ├── data-display/
│   ├── feedback/
│   ├── providers/
│   └── ui/
├── config/            # App-wide configuration objects
├── constants/         # Shared constant values
├── contexts/          # React Context definitions
├── docs/              # Frontend-specific documentation
├── features/          # Feature-based domain modules
├── helpers/           # Pure helper functions
├── hooks/             # Custom React hooks
├── lib/               # Third-party library wrappers
├── providers/         # Global React providers (Theme, Query, Toast)
├── public/            # Publicly served static files
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
├── schemas/           # Zod / Yup validation schemas
├── scripts/           # Dev/build scripts
├── services/          # API client and service layer
├── store/             # Global state (Zustand / Redux)
├── styles/            # Additional global styles
├── tests/             # Test suites
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── validators/        # Form and data validators
│
├── middleware.ts      # Edge middleware (auth, headers, redirects)
│
├── .env.local         # Local environment variables (not committed)
├── .env.example       # Environment variable template
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

## Commands

| Command           | Description                   |
|-------------------|-------------------------------|
| `npm run dev`     | Start development server      |
| `npm run build`   | Create production build       |
| `npm run start`   | Start production server       |
| `npm run lint`    | Run ESLint                    |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable                      | Description                    |
|-------------------------------|--------------------------------|
| `NEXT_PUBLIC_APP_NAME`        | Application display name       |
| `NEXT_PUBLIC_APP_URL`         | Frontend base URL              |
| `NEXT_PUBLIC_API_URL`         | Backend API base URL           |
| `NEXT_PUBLIC_ENVIRONMENT`     | `development` / `production`   |
