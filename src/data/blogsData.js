// Default content. The admin panel (/admin) can override any of this.
//
// Posts were imported from the old WordPress site by scripts/import-wp-blogs.mjs.
// The full article HTML lives in blogContent.json and is only loaded on the
// server by /blogs/[slug], so it isn't shipped to every page in the browser.
// A post that has a `content` array of paragraphs (e.g. one added in the admin)
// shows those paragraphs instead.
import importedPosts from "./blogPosts.json";

export const blogsData = importedPosts;

export const categories = ["All", ...new Set(importedPosts.map((p) => p.category))];
