<div align="center">
  <h1>GradPass</h1>
  <p>
    A peer-to-peer campus marketplace built with Next.js, PostgreSQL, and Tailwind CSS for students to buy and sell extra graduation tickets.
  </p>
</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture & Settlement Design](#️-architecture--settlement-design)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **Peer-to-Peer Multi-Seller Marketplace:** Allows graduating students to register as sellers, list extra commencement tickets, and manage their own inventory on a single campus platform.
- **Ceremony-Specific Filtering:** Browse and filter listings across dedicated graduation categories (`Main Ceremony`, `Department`, `VIP`, `Parking`, and `Grad Night`) with seating sections, row details, and transfer methods.
- **Zero-Upfront-Risk Meetup Checkout:** Uses an online reservation and in-person settlement workflow—buyers reserve tickets online with campus meetup details and pay via Venmo, Zelle, or Cash only after verifying the digital ticket transfer in person.
- **AI Listing Description Generator:** Built-in AI assistant that transforms brief ticket details into clear, trustworthy listings complete with transfer and campus meetup instructions.
- **Seller & Admin Dashboards:** Dedicated seller views to track reservations and manage ticket availability, paired with an admin panel to oversee student sellers, listings, and platform activity.

---

## 🏗️ Architecture & Settlement Design

Rather than relying on third-party credit card gateways that introduce chargeback risk, merchant onboarding friction, and PCI-DSS overhead for low-value campus exchanges, GradPass uses a **domain-tailored transactional state machine**:

1. **Online Reservation (`Pending Confirmation`):** Buyers select a ticket and submit their campus meetup location, preferred time, and contact number.
2. **Meetup & Verification (`Reserved for Meetup`):** Buyer and student seller meet on campus to verify the official university ticket transfer (Ticketmaster, Student Portal, or PDF).
3. **Direct Peer Settlement (`Ticket Transferred`):** Payment is settled directly via Venmo, Zelle, or Cash upon transfer confirmation.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Database & ORM:** PostgreSQL (Neon) & Prisma
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React
- **State Management:** Redux Toolkit

---

## 🚀 Getting Started

First, install the dependencies. We recommend using `npm` for this project.

```bash
npm install

```

Configure your environment variables in `.env` (PostgreSQL `DATABASE_URL`, authentication keys, and AI API key), then push the Prisma schema:

```bash
npx prisma db push

```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(public)/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Outfit](https://vercel.com/font), a new font family for Vercel.

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](https://www.google.com/search?q=./CONTRIBUTING.md) for more details on how to get started.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE.md](https://www.google.com/search?q=./LICENSE.md) file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!