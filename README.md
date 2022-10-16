# [Astro](https://astro.build) Multilingual Template

Bootstrapped with:

- [Tailwind css](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- [astro-i18next](https://www.npmjs.com/package/astro-i18next) - An astro integration of i18next + some utility components to help you translate your astro websites!
- [Astro Icon](https://www.npmjs.com/package/astro-icon) - A straight-forward Icon component for Astro.
- [rimraf](https://www.npmjs.com/package/rimraf) - The UNIX command `rm -rf` for node.

---

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── locales/
│   │   └── en.json
│   │   └── sq.json
│   └── pages/
│       └── index.astro
├── astro-i18next.config.mjs
├── astro.config.mjs
├── tailwind.config.mjs
├── TODO.md
└── package.json
```

---

## 💻 CLI commands

### generate

```bash
npx astro-i18next generate
```

This command will generate localized pages depending on your config and set
i18next's language change on each page.

For instance, with `supportedLanguages = ["en", "fr", "es"]`, and `"en"` being
the default language and having:

```bash
src
└── pages
    ├── about.astro
    └── index.astro
```

👇 Running `npx astro-i18next generate` will create the following pages

```bash
src
└── pages
    ├── es
    │   ├── about.astro
    │   └── index.astro
    ├── fr
    │   ├── about.astro
    │   └── index.astro
    ├── about.astro
    └── index.astro
```

---

## 🧞 All Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
| `npm run clean`        | Remove `./dist/`, `/node_modules/`                 |

