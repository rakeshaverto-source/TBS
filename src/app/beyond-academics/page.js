import { pageMetadata } from "@/lib/seo";
import BeyondAcademicsPage from "@/components/beyond-academics/BeyondAcademicsPage";

export const metadata = pageMetadata({
  title: "Best Sr. Sec. School in Panchkula | Beyond Academics at TBS",
  description:
    "The Bharat School is the best Sr. Sec. school in Panchkula. Explore our academics programs that foster holistic development and excellence.",
  path: "/beyond-academics",
});

export default function Page() {
  return <BeyondAcademicsPage />;
}
