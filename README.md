# Nexflix Demo Frontend 🎬

โปรเจกต์นี้เป็น **Frontend Web App** ที่สร้างด้วย [Next.js](https://nextjs.org/) (เวอร์ชัน 15.x) โดยโครงสร้างและ dependencies ถูกออกแบบมาเพื่อรองรับ **State Management, i18n, UI Styling, Data Fetching** และการพัฒนาแบบโมดูลาร์

---

## 📂 โครงสร้างโปรเจกต์

```
nexflix-demo-frontend/
│
├── public/                # Static files (favicon, images, etc.)
│
├── src/
│   ├── app/               # Next.js App Router (layout.tsx, page.tsx, not-found.tsx)
│   ├── data/              # Data access layer
│   │   ├── adapters/      # Adapter แปลงข้อมูล
│   │   ├── datasources/   # แหล่งข้อมูล เช่น API / local storage
│   │   └── repositories/  # Repository pattern เชื่อม usecases กับ datasource
│   ├── domain/            # Business logic (models, usecases)
│   ├── presentation/      # Layer ที่เกี่ยวกับ UI
│   │   ├── components/    # UI Components
│   │   ├── context/       # React Context Providers
│   │   ├── hooks/         # Custom hooks
│   │   ├── providers/     # Provider wrappers
│   │   └── store/         # Zustand store สำหรับ state management
│   ├── i18n/              # Internationalization config (next-i18next, locales)
│   ├── utils/             # ฟังก์ชัน helper ต่าง ๆ
│   └── middleware.ts      # Next.js Middleware
│
├── .env                   # Environment variables
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Scripts และ Dependencies
└── README.md              # เอกสารโปรเจกต์
```

---

## 🛠 เทคโนโลยีที่ใช้

- **Framework**
  - [Next.js 15](https://nextjs.org/) – React Framework (App Router, Server/Client Components)
  - [React 19](https://react.dev/) – UI Library

- **UI & Styling**
  - [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
  - [Framer Motion](https://www.framer.com/motion/) – Animation library
  - [Geist](https://vercel.com/font) – Font จาก Vercel

- **State Management**
  - [Zustand](https://zustand-demo.pmnd.rs/) – Lightweight state management

- **Data Fetching**
  - [TanStack React Query](https://tanstack.com/query/latest) – Server state management + caching

- **Internationalization (i18n)**
  - [i18next](https://www.i18next.com/) + [next-i18next](https://github.com/i18next/next-i18next) – รองรับหลายภาษา
  - [react-i18next](https://react.i18next.com/) – integration กับ React

- **Linting & Type Checking**
  - [ESLint](https://eslint.org/) – Linting
  - [TypeScript](https://www.typescriptlang.org/) – Type safety

---

## 🚀 วิธีการรัน

### 1. ติดตั้ง dependencies
```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
```

### 2. รัน development server
```bash
npm run dev
```
แล้วเปิด [http://localhost:3000](http://localhost:3000) ใน browser

### 3. Build โปรเจกต์สำหรับ production
```bash
npm run build
```

### 4. รัน production server
```bash
npm run start
```

### 5. ตรวจสอบ lint
```bash
npm run lint
```

---

## 📦 Scripts ที่ใช้บ่อย (จาก `package.json`)

- `dev` → `next dev --turbopack`
- `build` → `next build --turbopack`
- `start` → `next start`
- `lint` → `eslint`
