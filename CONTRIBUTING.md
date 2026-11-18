# Contributing to GradPass

Thank you for considering contributing to **GradPass**!
We welcome contributions from everyone, whether it's fixing a bug, refining the campus meetup flow, or optimizing the codebase.

---

## Table of Contents
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
- [Ideas for Contribution](#ideas-for-contribution)

---

## How to Contribute

1. **Fork** the repo
2. **Create a new branch** (example: `git checkout -b feature/campus-meetup-filter`)
3. **Make your changes** (UI, ticket filters, meetup checkout flow, etc.)
4. **Commit and push**
5. **Open a Pull Request (PR)**

---

## Development Setup

- Use **Next.js (App Router)**, **PostgreSQL (Neon) / Prisma**, and **Tailwind CSS**
- Configure your `.env` file and run `npx prisma db push` to sync the existing schema
- Run `npm run dev` for local development
- Keep code **clean, modular, and reusable**
- Prefer functional components and hooks
- Follow existing folder structure, database schema, and naming conventions

---

## Contribution Guidelines

- **Preserve Schema & Settlement Scope** → Keep modifications aligned with the existing database schema and zero-upfront-risk meetup settlement workflow (do not introduce external credit card payment gateways)
- **Small, Focused PRs** → Don’t bundle unrelated changes in one PR
- **Commit Messages** → Use clear and descriptive messages (e.g., `feat: add ceremony filter`, `fix: resolve meetup time validation`).
- **Code Style** → Follow the existing code style (e.g., indentation, naming conventions, etc.)
- **Accessibility** → Ensure that the website is accessible to all users
- **Discussions First** → For large changes (new features, big design changes), discuss the changes first to avoid wasting time on implementation
- **Respect Others** → Follow the [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## Ideas for Contribution

Here are some areas where you can contribute:

**Student Seller Features:**
- **Seller Dashboard:** Enhance views for graduating students to track ticket reservations, manage availability, and update meetup statuses (`Pending Confirmation`, `Reserved for Meetup`, `Ticket Transferred`).
- **Ticket Listing Management:** Improve forms and AI description prompts for adding, editing, and removing extra ceremony, VIP, parking, or Grad Night passes.
- **Student Verification & Onboarding:** Streamline seller profile setup with graduation class details, preferred meetup spots, and accepted peer-to-peer payment methods (Venmo, Zelle, Cash).

**Student Buyer Features:**
- **Ticket Discovery:** Add filtering and sorting options by ceremony category (`Main Ceremony`, `Department`, `VIP`, `Parking`, `Grad Night`), seating section, or price.
- **Seller Profiles:** Enhance public-facing pages for student sellers to display their graduating class, campus meetup preferences, and peer reviews.
- **Reservation & Meetup Checkout:** Improve the reservation flow for coordinating campus meetup locations, preferred times, and SMS/ticket transfer details.

**General Improvements:**
- **UI/UX:** Suggest and implement design improvements tailored for college seniors and their families.
- **Performance:** Optimize components and Prisma queries for faster load times.
- **Accessibility:** Enhance keyboard navigation and screen-reader support across the platform.
- **Animations:** Add subtle animations and transitions to make the UI more engaging.
- **Admin Panel:** Improve tools for campus administrators to review student seller applications, moderate listings, and monitor platform activity.

---

We're excited to see your contributions! 🚀