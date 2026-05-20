# Workflow Tracker Frontend

React frontend for the Mini Application Workflow Tracker.

## Tech Stack

- React
- React Router
- Tailwind CSS
- Axios
- Lucide React Icons
- Vercel Deployment

---

# Features

- Application dashboard
- Create application form
- Application detail workflow
- Workflow state management
- Approved applications page
- Rejected applications page
- Responsive modern UI

---

# Workflow States

Draft → Submitted → Under Review → Approved / Rejected

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/HOSEWELL/Trendpro.git
```

## 2. Navigate Into Project

```bash
cd Trendpro
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_BASE_URL=https://your-backend-url/api
```

---

# Start Development Server

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Build For Production

```bash
npm run build
```

---

# Application Pages

| Page | Description |
|---|---|
| Applications | List all workflows |
| Create Application | Create new application |
| Application Details | View workflow state |
| Approved | Approved workflows |
| Rejected | Rejected workflows |
| Settings | Platform configuration |

---

# Workflow Actions

| Status | Available Actions |
|---|---|
| Draft | Submit |
| Submitted | Start Review |
| Under Review | Approve / Reject |
| Approved | Read Only |
| Rejected | Read Only |

---

# Assumptions

- Frontend uses backend API directly
- No authentication implemented
- Workflow handled through status-based actions

---

# Improvements With More Time

- Authentication system
- Toast notifications
- Better loading states
- Form validation improvements
- Dark mode
- Search and filtering
- Mobile optimization
- State management with Redux/Zustand
- Testing

---

# Deployment

Frontend deployed on Vercel.

https://trendpro-jade.vercel.app/

---

# Developed By

Hosewell Karanja
