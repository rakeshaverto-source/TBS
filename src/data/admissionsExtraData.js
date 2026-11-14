// Default content. The admin panel (/admin) can override any of this.

// from components/admissions/AdmissionsTourForm.jsx
export const CAMPUSES = [
  { value: "The Bharat School — Sector 12", label: "The Bharat School", sub: "Sector 12 • Class I–XII", icon: "Building2" },
  { value: "Tinkerbelle — Early Years Wing", label: "Tinkerbelle", sub: "Early Childhood Wing", icon: "Sparkles" },
];

export const GRADES = [
  { value: "Kindergarten", label: "Kindergarten / Playway" },
  { value: "Class I", label: "Class I" },
  { value: "Class II - V", label: "Class II – V" },
  { value: "Class VI - VIII", label: "Class VI – VIII" },
  { value: "Class IX - XII", label: "Class IX – XII" },
];

export const SLOTS = [
  { value: "Weekday Morning (9 AM - 12 PM)", label: "Weekday Morning", time: "9 AM – 12 PM", icon: "Sun" },
  { value: "Weekday Afternoon (1 PM - 3 PM)", label: "Weekday Afternoon", time: "1 PM – 3 PM", icon: "Sunset" },
  { value: "Saturday Morning (9:30 AM - 1 PM)", label: "Saturday Open Walk", time: "9:30 AM – 1 PM", icon: "CalendarDays" },
];

// Taken from the Campus Tour step of the admission journey
export const TOUR_HIGHLIGHTS = [
  { icon: "School", text: "Walk into real classrooms" },
  { icon: "Users", text: "Meet teachers" },
  { icon: "Eye", text: "Observe the campus rhythm firsthand" },
];

// from components/admissions/AdmissionsFees.jsx
export const PLANS = [
  {
    badge: "Class I to Class XII",
    campus: "Sector 12 Campus",
    title: "The Bharat School",
    icon: "School",
    header: "from-[#1e3a8a] to-[#3b82f6]",
    glow: "group-hover:shadow-blue-600/25",
    accent: "text-[#1e3a8a]",
    price: { label: "Fee", amount: 9000, suffix: "onwards" },
    rows: [
      { label: "Transport Fee", value: "₹3,600 onwards", icon: "Bus" },
    ],
    link: "Tour Sector 12",
  },
];

export const NOT_CHARGED = ["Building funds", "Re-admission charges", "Mid-term escalation"];

export const CONCESSIONS = [
  { icon: "Users", title: "Sibling discount", text: "For second child", color: "from-[#1e3a8a] to-[#3b82f6]" },
  { icon: "Timer", title: "Early-confirmation incentive", text: "Accept within 7 days of offer letter", color: "from-[#e1251b] to-[#f97316]" },
  {
    icon: "Trophy",
    title: "Merit scholarship review",
    text: "Across academic Olympiad qualifiers and national Sqay/Snowshoe sports medalists",
    color: "from-emerald-600 to-teal-500",
  },
];
