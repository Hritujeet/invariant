# invariant

**invariant** is a physics and software website focused on classical mechanics. It combines interactive browser-based simulations with written derivations and supporting site pages.

## Features

- Interactive simulations for the Atwood machine, inclined plane, ground-to-ground projectile motion, heavy pulley, and particle collision.
- Derivation listings and individual derivation pages.
- Placeholder sign-in and sign-up pages; authentication is not configured.
- About, contact, profile, and admin areas.
- Responsive UI with light/dark theme support.

## Tech stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Authentication is not currently configured.
- PostgreSQL with Drizzle ORM
- Motion and Lucide icons

## Requirements

- Node.js (use a current LTS release)
- npm
- A PostgreSQL database for database-backed features

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root and configure the environment variables described below.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000).

## Environment variables

Configure the database URL in `.env.local`.

```dotenv
DATABASE_URL=postgresql://user:password@host:5432/database
```

Keep secret keys out of source control. The database connection is configured in `src/lib/db/index.ts`; the Drizzle schema is in `src/lib/db/schema/`.

## Project structure

```text
src/
  app/
    (auth)/              Placeholder sign-in and sign-up pages
    (main)/              Public site pages and dynamic content routes
    admin/               Admin pages
  components/
    derivations/         Individual derivation writeups
    simulations/         Interactive simulation implementations
    site/                Shared site sections, cards, and layouts
    ui/                  Reusable UI components
  lib/
    db/                  Database connection and Drizzle schema
    site-data.ts         Public derivation and simulation catalog
```

The public catalog is maintained in `src/lib/site-data.ts`. Simulation components are in `src/components/simulations/`, and their slug-based pages are under `src/app/(main)/simulations/`. Derivation writeups and pages follow the same pattern.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server after building |
| `npm run lint` | Run ESLint |

## Database

Database schema and Drizzle Kit configuration are provided in `src/lib/db/schema/` and `drizzle.config.ts`. Drizzle Kit reads `DATABASE_URL` from the environment. Use the project’s configured Drizzle Kit commands to generate or apply migrations when changing database-backed schema.

## Deployment

Deploy as a Next.js application. Configure `DATABASE_URL` in the deployment environment, then build with `npm run build` and serve with `npm run start` or the hosting provider’s Next.js runtime. Authentication is currently unconfigured; the sign-in and sign-up routes are placeholders.
