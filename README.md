# FlyDreamAir Loyalty Program Management System

FlyDreamAir is a React-based front-end prototype for an airline loyalty program management system. The project demonstrates how a frequent flyer rewards platform can help members view their loyalty account, track points, understand status progress, discover ways to earn points, and redeem rewards such as flight upgrades, lounge access, extra baggage, dining vouchers, and retail products.

The general purpose of the system is to support the management of customer loyalty programs by presenting the core member-facing workflows in one web application. It is designed around frequent flyer points, rewards, status tiers, point expiry, earning opportunities, and redemption options.

## What The Project Delivers

- A member dashboard for viewing available DreamMiles, expiring points, tier progress, recommended upgrades, and recent account activity.
- A rewards store where members can browse redemption categories, compare point costs, and redeem points for travel and lifestyle rewards.
- A points calculator that estimates points earned from flight spend and highlights additional ways to earn points through partner purchases and in-flight services.
- A login screen for the loyalty member entry point.
- Navigation between major loyalty program areas including dashboard, calculator, and rewards store.
- A responsive visual interface built for a premium airline rewards experience.

## Core Features

### Member Dashboard

The dashboard gives members a clear overview of their loyalty account. It displays:

- Current DreamMiles balance.
- Calls to action for redeeming or transferring points.
- Expiring points warning with redemption guidance.
- Current membership tier and progress toward the next tier.
- Tier benefits such as priority boarding, lounge access, and free checked bags.
- Recommended upgrades based on account context.
- Recent points activity and statement download entry point.

### Rewards Store

The rewards store provides a catalog-style redemption experience. Members can browse reward options across categories such as:

- Flight upgrades.
- Lounge access.
- Extra baggage.
- Dining.
- Retail.

Each reward card includes a title, category, description, image, point cost, and redeem action. The page also includes category filters and a points range panel to support reward discovery.

### Points Calculator

The points calculator helps members estimate the value of future travel. It includes:

- Flight cost input.
- Estimated points earned.
- Bonus points messaging for member tiers.
- Additional earning opportunities beyond flights, including airport shops, duty-free shopping, and in-flight services.

### Authentication Entry Point

The login screen presents a branded entry point for FlyDreamAir Rewards members and supports the overall flow of a loyalty program portal.

## Technology Stack

- React 19
- Vite 6
- React Router
- Material UI
- CSS modules by page and component
- Static image and SVG assets for airline, reward, and dashboard visuals

## Project Structure

```text
src/
  App.jsx                 Application routing and page metadata
  index.jsx               React application entry point
  global.css              Shared design tokens and global styles
  pages/                  Main screens
    Login.jsx
    Home.jsx
    MemberDashboard.jsx
    PointsCalculator.jsx
    RewardsStore.jsx
  components/             Reusable interface sections and cards
public/                   Static images and SVG assets
build/                    Production build output
```

## Available Routes

- `/` - Member dashboard
- `/01-login` - Login page
- `/02-points-calculation` - Points calculator
- `/03-member-dashboard` - Member dashboard
- `/05-rewards-store` - Rewards store
- `/home` - Home overview

## Project Scope

This project currently delivers the front-end experience for a loyalty program management system. It uses static sample data and UI flows to demonstrate the main member-facing capabilities. A production version could extend this foundation with:

- Member authentication and account management.
- Backend APIs for balances, transactions, rewards, and tier rules.
- Dynamic reward inventory and redemption processing.
- Points earning rules configured by route, fare class, partner, or promotion.
- Admin tools for managing campaigns, reward catalogs, expiry policies, and customer service actions.

## Purpose

FlyDreamAir demonstrates how an airline can deliver a digital loyalty platform that encourages members to earn, track, and use points while increasing engagement with flights, upgrades, partners, and premium services.
