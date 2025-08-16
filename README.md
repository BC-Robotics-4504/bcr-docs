# BCR 4504 Team Documentation

[![CI](https://github.com/BC-Robotics-4504/bcr-docs/actions/workflows/vercel-prod.yml/badge.svg?branch=master)](https://github.com/BC-Robotics-4504/bcr-docs/actions/workflows/vercel-prod.yml)
[![License](https://img.shields.io/github/license/BC-Robotics-4504/bcr-docs?color=blue)](https://github.com/BC-Robotics-4504/bcr-docs/blob/main/LICENSE)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Welcome to the **official documentation site** for **FRC Team BCR 4504**.
This site contains resources, guides, and reference material for our team members, mentors, and supporters.

---

## 📂 Project Structure

Our documentation site follows a clear and organized file structure for easy collaboration:

```
.
├── public/ # Static assets served as-is (e.g., favicon, robots.txt)
├── src/
│ ├── assets/ # Images, diagrams, and other media used in docs
│ ├── content/
│ │ └── docs/ # Main documentation content (.md or .mdx files)
│ └── content.config.ts # Content collection configuration
├── astro.config.mjs # Astro configuration file
├── package.json # Project metadata and dependencies
└── tsconfig.json # TypeScript configuration

```

**Key points:**

- Documentation pages are stored in `src/content/docs/`.
- Images and diagrams go in `src/assets/` and can be referenced in Markdown.
- Anything in `public/` is served directly without processing.

---

## Contributing

1. Clone the repo with `git clone https://github.com/BC-Robotics-4504/bcr-docs`
2. Checkout a new branch with `git switch -c {feature_name}`
3. Submit a pull-request to have your contribution merged onto the master branch.

## 🙌 Credits

We’d like to thank the following projects and services that make this documentation possible:

- [Astro](https://astro.build) — For the static site framework.
- [Starlight](https://starlight.astro.build) — For the documentation theme.

