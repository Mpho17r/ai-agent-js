# Contributing to AI Agent Project

## Branching Strategy
- `main` - Production (protected, requires PR + 2 approvals)
- `develop` - Integration branch
- `feature/*` - New features (branch from develop)
- `hotfix/*` - Emergency fixes (branch from main)

## Pull Request Process
1. Create feature branch from `develop`
2. Make changes and commit
3. Push to GitHub
4. Open PR against `develop`
5. Wait for CI to pass ✅
6. Get 2 approvals
7. Merge

## Coding Standards
- 2 spaces indentation
- Use semicolons
- Use single quotes
- Use `const` and `let` (no `var`)
- Write tests for new features

## Commit Messages
| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `test:` | Tests |
| `refactor:` | Code refactor |
| `chore:` | Maintenance |

## Testing
```bash
npm test           # Run tests
npm run test:coverage  # Coverage report
Questions?
Contact Dev Team Lead or QA Team Lead

text

4. **Commit message**: `Add contributing guidelines`

5. **Click "Commit new file"**

---

## Step 12: Update `README.md`

1. **Click on `README.md`**

2. **Click pencil icon** (Edit)

3. **Replace everything with:**

```markdown
# AI Agent Project

## Tech Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL + Prisma ORM
- **Testing**: Jest + Supertest
- **Linting**: ESLint
- **Formatting**: Prettier

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
git clone https://github.com/YOUR_USERNAME/ai-agent-js.git
cd ai-agent-js
npm install
npm start
Visit http://localhost:8000
API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
GET	/health	Health check
Branch Protection
main branch requires PR + 2 approvals

CI must pass before merging

Only Dev Lead & QA Lead can merge to main

Commands
Command	Description
npm start	Run app
npm run dev	Run with auto-restart
npm test	Run tests
npm run lint	Check code style
npm run format	Format code
Contributing
See CONTRIBUTING.md

License
MIT

text

4. **Commit message**: `Update README with project info`

5. **Click "Commit changes"**

---

## Step 13: Create `develop` Branch

1. **Click branch dropdown** (top left, shows "main")

2. **Type**: `develop`

3. **Click** "Create branch: develop from main"

---

## Step 14: Test the CI Pipeline

### Create test PR:

1. **Click branch dropdown** → Create: `feature/test-ci`

2. **Edit `src/index.js`** - add a comment:
   ```javascript
   // CI TEST: This should trigger the pipeline
Commit to feature/test-ci

Go to Pull requests → New pull request

base: develop

compare: feature/test-ci

Create pull request

Scroll down - you should see:

✅ CI Pipeline / test (green after 1-2 min)

✅ CI Pipeline / build (green)

🔒 Merge button is GRAY

👥 "0 of 2 approvals needed"
