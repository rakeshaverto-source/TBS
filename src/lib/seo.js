// Builds page metadata with a canonical URL and Open Graph tags.
// `title` is used as-is (no template), so pass the full title.
export function pageMetadata({ title, description, path, image }) {
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
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
