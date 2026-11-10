// Default content for every admin-editable section of the site.
// The admin panel stores edits on top of these defaults (see store.js).

import { aboutData } from "@/components/about/aboutData";
import { admissionsData } from "@/components/admissions/admissionsData";
import { beyondAcademicsData } from "@/components/beyond-academics/beyondAcademicsData";
import { olympiadsData, pillarsData } from "@/components/beyond-the-classroom/beyondData";
import { coreCurriculumData } from "@/components/core-curriculum/coreCurriculumData";
import booksData from "@/components/core-curriculum/curriculumBooksData.json";
import { TIMELINE, TABS, statsData, results, testimonials, previewItems } from "@/data/homeData";
import { PLANS, NOT_CHARGED, CONCESSIONS, CAMPUSES, GRADES, SLOTS, TOUR_HIGHLIGHTS } from "@/data/admissionsExtraData";
import { blogsData, categories } from "@/data/blogsData";
import { openings } from "@/data/careersData";
import { testimonials as familyTestimonials, trustPillars } from "@/data/whyFamiliesData";
import { siteData } from "@/data/siteData";

export const DEFAULT_CONTENT = {
  site: siteData,
  home: {
    timeline: TIMELINE,
    difference: TABS,
    numbers: statsData,
    results,
    testimonials,
    beyondPreview: previewItems,
  },
  about: aboutData,
  admissions: {
    ...admissionsData,
    fees: { plans: PLANS, notCharged: NOT_CHARGED, concessions: CONCESSIONS },
    tour: { campuses: CAMPUSES, grades: GRADES, slots: SLOTS, highlights: TOUR_HIGHLIGHTS },
  },
  coreCurriculum: coreCurriculumData,
  booklist: booksData,
  beyondAcademics: beyondAcademicsData,
  beyondClassroom: { pillars: pillarsData, olympiads: olympiadsData },
  blogs: { categories, posts: blogsData },
  careers: { openings },
  whyFamilies: { testimonials: familyTestimonials, trustPillars },
};

// Sidebar metadata for the admin panel.
export const SECTIONS = [
  { key: "site", label: "Site & Contact", page: "/" },
  { key: "home", label: "Home Page", page: "/" },
  { key: "about", label: "About Us", page: "/about" },
  { key: "admissions", label: "Admissions", page: "/admissions" },
  { key: "coreCurriculum", label: "Core Curriculum", page: "/core-curriculum" },
  { key: "booklist", label: "Booklist", page: "/core-curriculum" },
  { key: "beyondAcademics", label: "Beyond Academics", page: "/beyond-academics" },
  { key: "beyondClassroom", label: "Beyond the Classroom", page: "/beyond-the-classroom" },
  { key: "blogs", label: "Blogs", page: "/blogs" },
  { key: "careers", label: "Careers", page: "/careers" },
  { key: "whyFamilies", label: "Why Families Stay", page: "/why-families-stay" },
];
