# Hydra Training Playground

![Project Type](https://img.shields.io/badge/project_type-field_tested-10b981) ![Tech Stack](https://img.shields.io/badge/stack-React_19_%7C_Express_%7C_Vite-000000?logo=react&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-blue)

Educational cybersecurity **training platform** designed to teach students how to use THC-Hydra for *ethical* password brute-force attacks.

[![Report Issue](https://img.shields.io/badge/Report-Issue-red?style=for-the-badge)](https://github.com/CarlosCanet/hydra-training-playground/issues)

## 🎯 Project Overview

This project provides a vulnerable web application built with React, TypeScript, and Tailwind CSS that serves as a practice target for penetration testing techniques. It includes a real Express backend that implements various levels of security (from none to advanced rate limiting) to challenge students.

> [!IMPORTANT]
> This project is strictly for educational purposes in cybersecurity training. It should only be used in controlled environments with explicit permission.

### ✨ Features

- **5 Progressive Difficulty Levels**: From basic dictionary attacks to advanced username enumeration.
- **Real-time Rate Limiting**: Implements `express-rate-limit` and `express-slow-down` to simulate real-world defenses.
- **Honeypot Capabilities**: Can simulate successful logins for bots to waste attacker time.
- **Educational UI**: Realistic login interfaces with a dark-themed "corporate" aesthetic.
- **Comprehensive Logging**: Detailed JSON logs of all attack attempts for analysis.

<!-- ### 🗄️ Database Schema -->
<!-- ### ↕️ Key Workflows -->

## 🛠️ Tech Stack & Decisions

This project uses a standard modern stack to simulate a realistic target environment:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Core Framework Choices

**React 19 + Vite**
- Fast development cycle with HMR.
- Simulates a Single Page Application (SPA) structure which adds complexity to brute-forcing (handling CSRF, dynamic inputs).

**Express.js (Backend)**
- Provides the API endpoints `/login/:level`.
- **Why Express?** Middleware like `express-rate-limit` and `express-slow-down` are industry standards, making the simulation accurate to what students will face in the wild.

**Logging vs Database**
- We use simple JSONL files for logging.
- **Why?** Simplifies deployment in student environments (no need to docker run a DB). Easy to access and parse with CLI tools.

### Trade-offs Accepted
- **Benefits**: Lightweight, easy to run locally, realistic "bad" security for training.
- **Risks**: Not secure for production use (intentional).
- **Mitigation**: Strictly scoped to localhost; educational warnings prominently displayed.

### Learning Outcomes
- **Secure by Design**: Understanding what things you shouldn't do as a developer 🤠.
- **Monorepo Management**: Orchestrating concurrent build and dev processes for full-stack TypeScript applications.
- **System Design**: Balancing "educational insecurity" (making it breakable) with "application stability" (handling abuse from automated tools).

### Student Learning Objectives
- Mastery of **THC-Hydra** command line flags (`-t`, `-W`, `-l`, `-P`).
- Understanding how to bypass **Soft Rate Limits** vs **Hard Rate Limits**.
- Experience with **Username Enumeration** flaws.

## 🏗️ Architecture & Design Principles

The project follows a **Monorepo** structure to manage the Client and Server simultaneously.

- **Modular Architecture**:
    - `packages/client`: React Frontend.
        - Components: `LoginCard`, `LoginForm` (reused across levels).
        - Pages: `LoginPage` (Dynamic route handling).
    - `packages/server`: Express Backend.
        - Services: `authService.ts` handles the logic for all 5 security levels.
- **Separation of Concerns**: frontend handles the "victim" interface, backend handles the "security" logic.
- **Educational Design**: Code is heavily commented to help students who inspect the source code understand *why* a vulnerability exists.

## 🤖 AI-Assisted Development

This project was developed during the **Ironhack Cybersecurity Bootcamp (Sept - Nov 2025)** where I was a Teaching Assistant. To accelerate development, **"vibe-coding"** techniques were used extensively. While the code has been reviewed, it may exhibit some characteristic traits of AI-generated code.

> **Special Thanks**: An immense thank you to the students of this cohort. Your dedication, curiosity, and questions during these intense 9 weeks not only drove this project but taught me as much as I hope I taught you.

This project uses AI to assist in generating educational scenarios and documentation:

- **[Agents.md](./Agents.md)**: Defines the role of AI in maintaining and explaining the project to students, including detailed context about the security levels.

---

## 🚀 Getting Started

### Prerequisites

For running the web (an instructor can deploy a single instance for all their students):
- **Node.js** (v18+ recommended)

For students (attackers):
- **THC-Hydra** (The attack tool - typically on Kali Linux)
- **Kali Linux** (Recommended environment)

### Installation

1. Clone the repository
```bash
git clone https://github.com/CarlosCanet/hydra-training-playground.git
cd hydra-training-playground
```

2. Install dependencies (Client and Server)
```bash
npm install
```

3. Run the development environment
```bash
# This starts both Client (Vite) and Server (Express) concurrently
npm run dev
```

- **Frontend**: Open [http://localhost:5173](http://localhost:5173) to see the login forms.
- **Backend API**: Running on [http://localhost:5000](http://localhost:5000).

### Scripts

```bash
npm run dev           # Start both Client and Server concurrently
npm run dev:client    # Start only Frontend (Vite)
npm run dev:server    # Start only Backend (Express)
npm run build         # Build both packages
npm run lint          # Lint both packages
```

<!-- ## 📃 Documentation -->