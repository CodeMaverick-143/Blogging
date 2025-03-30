# Travlog - Your Modern Blogging Platform 📝🌏

Hey there! Welcome to Travlog, a sleek and modern blog application built with React, TypeScript, and Tailwind CSS. It's designed to be a clean, responsive, and user-friendly platform for sharing stories and ideas.

Right now, it uses mock data stored locally, making it super easy to get started and experiment without needing a backend setup.....

## ✨ Key Features

*   **View Posts:** Browse through blog posts on the homepage with a clean grid layout.
*   **Read Full Posts:** Click on any post to view its full content on a dedicated, well-formatted page.
*   **Search:** Quickly find posts using the search bar in the navbar or on the dedicated search page.
*   **Create Posts:** Easily add new blog posts using the "New Post" form (`/new` route).
*   **Edit Posts:** Modify existing posts via the "Edit" button on the post detail page (`/edit/:id` route).
*   **Delete Posts:** Remove posts using the "Delete" button on the post detail page (with confirmation).
*   **Dark/Light Mode:** Toggle between themes using the sun/moon icon in the navbar.
*   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
*   **Loading & Error States:** Provides feedback while data is loading or if something goes wrong.
*   **"Load More":** Efficiently load posts on the homepage as you scroll.

## 🛠️ Tech Stack

*   **Frontend:** React 18+, TypeScript
*   **Routing:** React Router v6
*   **Styling:** Tailwind CSS v3
*   **Icons:** Lucide React
*   **Development:** Vite

## 🚀 Getting Started

Ready to run Travlog locally? Here's how:

**1. Prerequisites:**

*   Make sure you have Node.js installed (v18 or later recommended).
*   You'll also need a package manager like `npm` or `yarn`.

**2. Clone & Install:**

```bash
# Clone the repository (if you haven't already)
# git clone <your-repo-url>
# cd <your-repo-directory>

# Install dependencies
npm install
# or
yarn install
```

**3. Run the Development Server:**

```bash
npm run dev
# or
yarn dev
```

This command will start the Vite development server. Open your browser and navigate to the local URL provided (usually `http://localhost:5173` or similar).

## 📁 Project Structure

Here's a quick overview of the main folders:

```
/src
├── components/    # Reusable UI components (Navbar, Footer, PostCard, PostForm)
├── context/       # React contexts (e.g., ThemeContext)
├── pages/         # Page-level components (Home, BlogPost, Search, NewPost, etc.)
├── services/      # Data handling logic (postService using mock data)
├── styles/        # Global styles (e.g., index.css)
├── types.ts       # TypeScript type definitions (e.g., BlogPost)
├── App.tsx        # Main application layout and routing setup
└── main.tsx       # Entry point of the React application
```

## 💡 Future Ideas (Optional Enhancements)

*   Integrate a real backend (like Supabase, Firebase, or a custom API).
*   Implement actual user authentication.
*   Add a proper Markdown rendering library for post content.
*   Implement toast notifications for success/error messages.
*   Add image uploading capabilities.
*   Refine the `PostForm` for editing.

---

Enjoy exploring Travlog! 
