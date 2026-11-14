// Shown when a page is shared on WhatsApp / Facebook / X and the page has no image of its own
const DEFAULT_SHARE_IMAGE = "/school-building.webp";

// Builds page metadata with a canonical URL, Open Graph and Twitter tags.
// `title` is used as-is (no template), so pass the full title.
export function pageMetadata({ title, description, path, image = DEFAULT_SHARE_IMAGE }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "The Bharat School",
      type: "website",
      locale: "en_IN",
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
