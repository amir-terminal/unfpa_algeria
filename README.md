# UNFPA Algeria Portal Prototype

A multilingual React and TypeScript prototype for browsing news, programmes, publications, and events. It includes event detail and demo registration screens, a notification panel, and an English, French, and Arabic language selector. The portal uses local mock data and simulates event registration in the browser.

## Run locally

With Node.js 22 or later and npm installed, run these commands from the repository root.

~~~bash
npm ci
npm run dev
~~~

Open the local URL printed by Vite. Use `npm run lint` to check the source, `npm run build` to build into `dist/`, and `npm run preview` to preview that build.

- [`src/App.tsx`](src/App.tsx) defines routes.
- [`src/pages/`](src/pages/) contains the portal screens.
- [`src/context/LanguageContext.tsx`](src/context/LanguageContext.tsx) provides language selection and translations.
- [`src/data/mockData.ts`](src/data/mockData.ts) contains sample portal content.
