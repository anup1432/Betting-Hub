# Tiranga Games

## Overview

Tiranga Games is a gaming platform web application built with a React frontend and Express backend. The application features user authentication (login/register), a modern gaming-themed UI with a dark blue color scheme, and is designed for mobile-first responsiveness. The platform appears to be a gaming portal where users can play games and potentially win rewards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth transitions and effects
- **Build Tool**: Vite with hot module replacement
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Development Server**: Vite middleware integration for HMR during development

### Shared Code Structure
- **Schema**: Database models defined in `shared/schema.ts` using Drizzle
- **Routes**: API route definitions with input/output schemas in `shared/routes.ts`
- **Validation**: Zod schemas for type-safe request/response handling

### Key Design Patterns
1. **Monorepo Structure**: Client, server, and shared code in single repository
2. **Type-Safe API**: Shared route definitions ensure frontend-backend type consistency
3. **Component-Based UI**: Extensive shadcn/ui component library for consistent design
4. **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows database implementation swapping

### Build Process
- **Development**: `npm run dev` runs Express with Vite middleware
- **Production**: `npm run build` creates optimized bundles using esbuild for server and Vite for client
- **Database**: `npm run db:push` syncs Drizzle schema to PostgreSQL

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and query building
- **connect-pg-simple**: PostgreSQL session store (available but not yet implemented)

### UI/Styling
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Google Fonts**: Montserrat, Rajdhani, Fira Code, Geist Mono

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration for form validation

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **TypeScript**: Static type checking across all code
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner