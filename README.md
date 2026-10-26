# Project Management

A modern project management platform with workspace-based collaboration, task tracking, project analytics, team management, and Clerk-powered authentication.

## ✨ Features

- Workspace creation and organization
- Project creation, editing, and status tracking
- Task creation, assignment, priority and status management
- Comments on tasks for collaboration
- Team management and member invitations
- Project analytics and dashboard summaries
- Calendar view for project tasks
- Clerk-based authentication for secure login and user management
- Prisma ORM with PostgreSQL-compatible database support
- Inngest event handlers for syncing Clerk organization/user events and workspace updates

## 🛠️ Tech Stack

### Frontend (`client/`)

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Clerk React for authentication
- Axios for API requests
- Recharts for analytics charts
- Lucide React icons
- React Hot Toast notifications

### Backend (`server/`)

- Node.js + Express
- Prisma ORM
- PostgreSQL-compatible database (`DATABASE_URL`)
- Clerk Express middleware for auth
- Inngest for background event workflows
- Nodemailer for email-related operations
- CORS and dotenv for configuration

## 📁 Repository Structure

- `client/` - Frontend React application
- `server/` - Backend Express API and Prisma configuration
- `server/prisma/schema.prisma` - Database schema and model definitions
- `server/prisma.config.ts` - Prisma datasource configuration
- `client/configs/api.js` - Axios base URL configuration

## 🚀 Getting Started

From the repository root, use these shortcuts to run the client or server:

```bash
npm run dev
npm run server
```

### 1. Clone the repository

```bash
git clone <repository-url>
cd proejct_management
```

### 2. Set up environment variables

Copy `server/.env.example` to `server/.env`, then provide values for every key:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SENDER_EMAIL=your@email.com
PORT=5000
```

Copy `client/.env.example` to `client/.env`, then provide the client settings:

```env
VITE_BASEURL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

`CLERK_SECRET_KEY`, `SMTP_PASS`, and `DATABASE_URL` are private values and must remain in `server/.env` or your deployment provider's server-side environment settings. Only variables prefixed with `VITE_` are exposed to the browser.

### 3. Install dependencies

Install the backend packages:

```bash
cd server
npm install
```

Install the frontend packages:

```bash
cd ../client
npm install
```

### 4. Start the backend server

From the `server/` folder:

```bash
npm start
```

Or run the development server with auto-reload:

```bash
npm run server
```

### 5. Start the frontend app

From the `client/` folder:

```bash
npm run dev
```

### 6. Open the app

Open your browser and go to:

```text
http://localhost:5173
```

## 🧪 Development Workflow

- `client/npm run dev` - start the frontend dev server
- `client/npm run build` - build the frontend for production
- `client/npm run lint` - run ESLint checks on the frontend code
- `server/npm start` - start the backend server
- `server/npm run server` - start the backend with `nodemon`

## 💡 Notes

- The frontend reads API config from `client/configs/api.js`, which uses `VITE_BASEURL`.
- The backend uses Prisma and reads the database connection string from `DATABASE_URL`.
- Clerk authentication is integrated on both client and server, so you should configure Clerk keys and application settings for local or deployed usage.

## 📜 License

This project follows the licensing terms defined in the repository.
