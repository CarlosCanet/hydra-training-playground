# Agents.md - AI Assistant Guide for Hydra Learning Project

## Project Overview

This is an educational cybersecurity project designed to teach students how to use **THC-Hydra** for ethical password brute-force attacks against login forms. The project provides a vulnerable web application built with React, TypeScript, and Tailwind CSS that serves as a practice target for penetration testing techniques.

### ⚠️ Educational Purpose Only
This project is strictly for educational purposes in cybersecurity training. It should only be used in controlled environments with explicit permission.

## Project Structure

```
hydra-activity/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components (routing destinations)
│   │   └── MainPage.tsx  # Main landing page
│   ├── assets/           # Images, icons, etc.
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Technology Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS 4.1.14 (Dark theme focused)
- **Routing**: React Router 7.9.4
- **Build Tool**: Vite 7.1.7
- **Development**: Hot Module Replacement (HMR) enabled
- **Architecture**: Serverless frontend-only application
- **Deployment**: GitHub Pages (recommended) or Netlify
- **Data Persistence**: localStorage for logs and statistics
- **Target Tools**: THC-Hydra and ffuf (students using Kali Linux)

## Project Purpose & Learning Objectives

This project helps students learn:

1. **Web Application Security Testing**: Understanding how login forms can be vulnerable
2. **Hydra Tool Usage**: Practical experience with THC-Hydra for brute-force attacks
3. **Ethical Hacking Principles**: Responsible disclosure and controlled testing environments
4. **Web Technology Understanding**: How modern web applications handle authentication

## Application Architecture

### Main Application Structure
```
Main Page (Dark Theme)
├── Links to 5 Login Mockups
├── Admin Dashboard (hidden/protected)
└── Statistics Export (admin only)

Each Login Mockup:
├── Identical visual design (realistic login form)
├── Different security vulnerability level
├── Success → Congratulations page
└── Logs → Stored in localStorage + IP tracking
```

## Key Components to Implement

### 1. Main Landing Page
- **Location**: `src/pages/MainPage.tsx`
- **Features**:
  - Dark theme with realistic corporate design
  - 5 clickable cards/buttons leading to different login challenges
  - Clean, professional appearance
  - No educational content visible (content provided elsewhere)

### 2. Five Identical Login Mockups
- **Location**: `src/pages/Login[1-5].tsx`
- **Design**: Identical visual appearance across all levels
- **Functionality**: Each implements different vulnerability level
- **Success Flow**: Redirect to congratulations page after successful login

### 3. Security Levels Implementation

#### Level 1: Basic Unprotected Login
- No validation whatsoever
- Accept any username/password combination
- Immediate success response

#### Level 2: Client-side Validation (Bypasseable)
- JavaScript validation that can be disabled
- Basic password strength requirements
- Validation easily circumvented

#### Level 3: Rate Limiting (Bypasseable)
- Implement artificial delays
- Rate limiting that can be bypassed with techniques
- Headers or cookies that can be manipulated

#### Level 4: Command Injection Vulnerability
- Username field vulnerable to command injection
- Execute safe commands like `whoami`, `id`, `pwd`
- Log command execution attempts

#### Level 5: Local File Inclusion
- Hidden parameter in form or URL
- Simulate file inclusion vulnerability
- Safe file access simulation

### 4. Honeypot Implementation
- **Hidden Field**: `admin_token` in all forms
- **Detection Logic**: If field is filled → Mark as automated attack
- **Response**: Add artificial delay + special logging
- **Purpose**: Detect bot/script usage vs manual testing

### 5. Admin Dashboard (Protected Area)
- **Access**: Hidden URL or protected endpoint
- **Features**:
  - Attack statistics and analytics
  - Real-time attack logs with IP addresses
  - JSON export functionality for Splunk integration
  - Honeypot detection logs
- **Data**: Only admin can view, students cannot see statistics

### 6. Logging and Analytics System
- **Storage**: localStorage for client-side persistence
- **IP Tracking**: Capture and log real IP addresses
- **Data Points**:
  - Timestamp
  - Source IP
  - Username attempts
  - Password attempts
  - Success/failure status
  - Vulnerability level targeted
  - Honeypot triggers
  - User-Agent strings
- **Export Format**: JSON for Splunk ingestion

## Development Guidelines for AI Agents

### When Working on This Project:

1. **Security Context**: Always remember this is for education - implement intentional vulnerabilities responsibly
2. **User Experience**: Make the learning process clear and engaging
3. **Documentation**: Include extensive comments explaining security concepts
4. **Styling**: Use Tailwind CSS classes consistently with the existing setup
5. **TypeScript**: Maintain strict typing for better code quality

### Common Tasks You May Be Asked to Implement:

1. **Login Forms**: Create vulnerable authentication forms
2. **API Endpoints**: Mock or implement authentication services
3. **UI Components**: Build educational interfaces and dashboards
4. **Routing**: Add new pages for different attack scenarios
5. **Styling**: Apply Tailwind CSS for responsive, modern UI

### File Organization Best Practices:

- **Components**: Place reusable UI components in `src/components/`
- **Pages**: Create new routes/pages in `src/pages/`
- **Types**: Define TypeScript interfaces in component files or separate type files
- **Utilities**: Helper functions should be organized logically
- **Styles**: Use Tailwind classes primarily, custom CSS in `index.css` if needed

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Security Considerations for AI Agents

### Do:
- Implement educational vulnerabilities that demonstrate real-world issues
- Add clear warnings about ethical use
- Include comprehensive documentation
- Create realistic but safe attack scenarios

### Don't:
- Implement actual production-level security vulnerabilities
- Include real-world exploitation techniques without educational context
- Create anything that could be misused outside of learning environments

## Common Hydra Commands Students Will Learn

```bash
# Basic dictionary attack
hydra -L userlist.txt -P passlist.txt <target> http-post-form

# Single user, multiple passwords
hydra -l admin -P passlist.txt <target> http-post-form

# With specific form parameters
hydra -l admin -P passlist.txt <target> http-post-form "/login:username=^USER^&password=^PASS^:Invalid"

# Rate limiting evasion
hydra -l admin -P passlist.txt <target> http-post-form -t 1 -W 2

# Command injection testing
hydra -l "admin;whoami" -p password <target> http-post-form
```

## ffuf Integration
Students will also learn directory fuzzing with ffuf:
```bash
# Directory busting on login endpoints
ffuf -w wordlist.txt -u http://target/FUZZ -mc 200,302

# Parameter fuzzing for hidden fields
ffuf -w params.txt -u http://target/login -d "username=admin&password=pass&FUZZ=value"
```

## Expected Student Workflow

1. **Setup**: Clone repository and run the vulnerable web app
2. **Exploration**: Understand the login mechanisms
3. **Preparation**: Create or use provided wordlists
4. **Attack**: Use Hydra against the vulnerable endpoints
5. **Analysis**: Review results and understand the security implications
6. **Mitigation**: Learn how to defend against such attacks

## Integration with Educational Environment

This project is designed for:
- **Cybersecurity Bootcamps**: Hands-on penetration testing training
- **University Courses**: Applied security coursework
- **Self-Learning**: Individual skill development
- **Workshops**: Interactive security demonstrations

## Expected Student Workflow

1. **Setup**: Acces the public url of the web app
2. **Exploration**: Understand the login mechanisms
3. **Preparation**: Create or use provided wordlists
4. **Attack**: Use Hydra against the vulnerable endpoints
5. **Analysis**: Review results and understand the security implications
6. **Mitigation**: Learn how to defend against such attacks

## AI Agent Interaction Guidelines

When students or instructors request modifications:
1. **Clarify Educational Goals**: Understand what security concept they're trying to teach/learn
2. **Maintain Project Structure**: Keep the existing React/TypeScript/Tailwind architecture
3. **Add Progressive Complexity**: Build from simple to advanced attack scenarios
4. **Include Learning Materials**: Provide context and explanations in code comments
5. **Test Thoroughly**: Ensure both the vulnerable app and attack scenarios work as expected

## Future Enhancements

Potential additions to consider:
- Multiple attack vectors (SQL injection, XSS, etc.)
- Different authentication mechanisms (OAuth, JWT, etc.)
- Advanced evasion techniques
- Defensive measures demonstration
- Integration with other security tools

---

*This documentation should be updated as the project evolves to maintain accuracy for AI agents working on educational cybersecurity content.*