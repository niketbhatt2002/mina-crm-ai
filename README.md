# Mina CRM AI

## Project Overview
Mina CRM AI is a modern, multi-tenant, AI-powered CRM SaaS application built with Next.js 14+, Prisma, PostgreSQL, and Tailwind CSS.

## Features
- Multi-tenant: Organizations & projects
- Contacts, leads, tasks, notes, files
- Beautiful dashboard & analytics
- AI-powered assistant & suggestions
- Billing, user roles, and permissions
- Google OAuth, Slack, Stripe, OpenAI integrations

## Tech Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Prisma ORM (+ PostgreSQL)
- NextAuth.js (Auth)
- Stripe (Billing)
- OpenAI (AI features)

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill out your own secrets.
4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```
5. Run the app:
   ```bash
   npm run dev
   ```

## License
MIT
