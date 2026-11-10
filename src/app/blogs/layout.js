// The blogs list page is a client component, so its SEO metadata lives here.
export const metadata = {
  title: { absolute: "Blogs | The Bharat School, Best CBSE School in Panchkula" },
  description:
    "Articles from The Bharat School, Panchkula on CBSE admissions, exam preparation, study tips, parenting and school life.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Blogs | The Bharat School",
    description:
      "Articles from The Bharat School, Panchkula on CBSE admissions, exam preparation, study tips, parenting and school life.",
    siteName: "The Bharat School",
    locale: "en_IN",
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
