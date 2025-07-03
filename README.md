# Personal Branding Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Getting Started

### 1. **Install dependencies**

```bash
npm install
```

---

### 2. **Run the development server**

By default, this project uses [Turbopack](https://turbo.build/pack) for fast development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### 3. **Build and start for production**

```bash
npm run build
npm start
```

---

### 4. **Lint your code**

```bash
npm run lint
```

---

### 5. **Run tests**

This project uses **Jest** and **React Testing Library** for unit and integration tests.

```bash
npm test
```

#### **Test setup details:**
- Test files use `.test.tsx` or `.test.ts` extensions.
- Jest is configured in [`jest.config.js`](jest.config.js).
- Babel is used for transforming test files only, with config in [`babel.jest.config.js`](babel.jest.config.js).
- Test environment is set to `jsdom`.
- Custom matchers from `@testing-library/jest-dom` are loaded via [`jest.setup.js`](jest.setup.js).

---

### 6. **Project structure**

```
personal-branding/
├── src/
│   ├── app/
│   ├── components/
│   └── data/
├── public/
│   └── images/
├── jest.config.js
├── babel.jest.config.js
├── jest.setup.js
├── tsconfig.json
├── package.json
└── README.md
```

---

### 7. **Testing Library & Babel for Jest**

- **Babel is only used for Jest tests.**  
  The main app uses Next.js’s default SWC/Turbopack compiler.
- If you need to update Babel settings for tests, edit [`babel.jest.config.js`](babel.jest.config.js).

---

### 8. **Troubleshooting**

- If you see errors about Babel and Turbopack, ensure you do **not** have a root-level `.babelrc` or `babel.config.js`.  
  Only `babel.jest.config.js` should be present for tests.
- If `next` is not found, run `npm install` to install all dependencies.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
