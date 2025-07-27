# my-site

My personal portfolio and blog, built with SvelteKit, TypeScript, and Tailwind CSS.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-sh4jid.me-blue)](https://sh4jid.me)
[![Built with SvelteKit](https://img.shields.io/badge/Built_with-SvelteKit-FF3E00?logo=svelte)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Features

-   **Modern & Responsive Design**: A clean, animated, and mobile-first interface with persistent dark/light mode.
-   **Dynamic Blog**: A fully-featured blog with bilingual support (EN/BN), syntax highlighting, tags, and SEO optimization.
-   **Projects Showcase**: An interactive section to display my work with custom logos and status indicators.
-   **Content Utilities**:
    -   **URL Shortener (`/l/[alias]`):** Custom short links that redirect to any external URL, complete with a countdown timer.
    -   **Pastebin (`/p/[alias]`):** A tool for sharing formatted code snippets with language-specific syntax highlighting.
    -   **Quick Notes (`/n/[alias]`):** A simple way to publish and share text-based notes.
-   **Performance Optimized**: Built with the latest SvelteKit and Vite for a fast and smooth user experience.

> **Note on Content Management**
>
> All dynamic content (blog posts, short links, notes, and pastes) is managed through a separate, dedicated admin dashboard that interacts with the Appwrite backend. You can find the repository for the admin panel here: **[my-site-control-center](https://github.com/shajidhasan/my-site-control-center)**.

## Tech Stack

**SvelteKit** | **TypeScript** | **Tailwind CSS** | **Vite** | **Appwrite** (Backend) | **pnpm**

## Getting Started

### Prerequisites

-   Node.js v18+
-   pnpm (recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shajidhasan/my-site.git
    cd my-site
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    -   Copy `.env.example` to `.env`.
    -   Add your Appwrite credentials to the `.env` file.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application will be available at `http://localhost:5173`.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/shajidhasan/my-site/issues) or open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Built with ❤️ using SvelteKit
</div>