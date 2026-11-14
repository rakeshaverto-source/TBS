import { CAMPUSES, SOCIALS } from "@/data/schoolInfoData";
import { SITE_URL } from "@/lib/server/content";

const tbs = CAMPUSES[0];

// schema.org "School" data for Google (used on the home and contact pages)
export const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "The Bharat School",
  alternateName: "The British School", // the school's former name
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/school-building.webp`,
  email: tbs.email,
  telephone: tbs.phones.map((p) => p.tel),
  foundingDate: "2005",
  address: { "@type": "PostalAddress", streetAddress: "Sector 12", addressLocality: "Panchkula", addressRegion: "Haryana", postalCode: "134112", addressCountry: "IN" },
  sameAs: SOCIALS.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
};

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
