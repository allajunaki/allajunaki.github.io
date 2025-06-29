# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based GitHub Pages website for abilashmohan.com featuring a Matrix-style digital rain animation with a "Coming Soon" message. The site uses Jekyll static site generator with a custom Matrix-themed layout.

## Architecture

- **index.markdown**: Main page using custom Matrix layout
- **_layouts/matrix.html**: Custom Jekyll layout with Matrix theme
- **assets/js/matrix.js**: Canvas-based Matrix animation that displays falling "abilashmohan.com" characters
- **assets/css/matrix.css**: Styling with glitch effects, terminal aesthetics, and animations
- **_config.yml**: Jekyll configuration with site settings
- **Gemfile**: Ruby gem dependencies for Jekyll
- **commands/**: Session management command definitions
- **.claude/sessions/**: Session tracking and documentation

## Key Components

### Matrix Animation (assets/js/matrix.js)
- Creates falling digital rain effect using HTML5 Canvas
- Displays "abilashmohan.com" characters in a randomized Matrix-style pattern
- Uses green color scheme with transparency effects
- Automatically resizes to full window size

### Styling (assets/css/matrix.css)
- Terminal/hacker aesthetic with black background and green text
- Glitch animation effects on text elements
- Cursor blinking animation
- Responsive design that centers content

## Development

This is a Jekyll-based website with the source code in the `site/` directory. To develop locally:

1. Install Ruby 3.3+ and Bundler
2. Navigate to the site directory: `cd site`
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start local server
5. Open http://localhost:4000 to view the site

### Commands
All Jekyll commands must be run from the `site/` directory:
- `cd site && bundle exec jekyll serve` - Start development server
- `cd site && bundle exec jekyll build` - Build site for production

### Repository Structure
```
/ (root)
├── CLAUDE.md                    # Project documentation (excluded from site)
├── .claude/                     # Session tracking (excluded from site)
├── .github/workflows/           # CI/CD auto-deployment
└── site/                        # Jekyll website source
    ├── _layouts/matrix.html     # Custom Matrix theme layout
    ├── assets/                  # Website assets
    ├── _config.yml             # Jekyll configuration
    ├── Gemfile                 # Ruby dependencies
    └── index.markdown          # Main page
```

**Important:** The Jekyll site is isolated in `site/` directory. Project metadata files (CLAUDE.md, .claude/, etc.) are kept in the root and excluded from the generated website.

## Session Management

This project includes claude-sessions integration for tracking development work:

### Available Commands
- `/project:session-start [name]` - Start a new development session
- `/project:session-update [message]` - Log progress and changes
- `/project:session-end` - Generate comprehensive session summary
- `/project:session-current` - Show current session status
- `/project:session-list` - List all past sessions

### Session Files
- Sessions are stored in `.claude/sessions/` with timestamp-based filenames
- `.claude/sessions/.current-session` tracks the active session
- Each session includes goals, progress, git changes, and accomplishments

## Deployment

The site is deployed via GitHub Pages from the main branch. Any changes pushed to main will automatically update the live site.