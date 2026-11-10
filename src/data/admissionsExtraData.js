// Default content. The admin panel (/admin) can override any of this.

// from components/admissions/AdmissionsTourForm.jsx
export const CAMPUSES = [
  { value: "The Bharat School — Sector 12", label: "The Bharat School", sub: "Sector 12 • Class I–XII", icon: "Building2" },
  { value: "Tinkerbelle — Early Years Wing", label: "Tinkerbelle", sub: "Early Childhood Wing", icon: "Sparkles" },
];

export const GRADES = [
  { value: "Kindergarten", label: "Kindergarten / Pre-K" },
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
    badge: "Pre-K to Kindergarten",
    campus: "Tinkerbelle Wing",
    title: "Early Years Tuition",
    text: "All-inclusive foundational early childhood pedagogy, sensory play, smart rooms, and student safety systems.",
    icon: "Baby",
    header: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/25",
    accent: "text-amber-600",
    price: { label: "Playgroup – KG Monthly Fee", amount: 7500, tag: "All-Inclusive" },
    rows: [
      { label: "Registration & Admission", value: "One-Time Only", tag: "Transparent" },
      { label: "GPS-Tracked Cab Facility", value: "₹2,800 – ₹3,200 / month", tag: "Optional", icon: "Bus" },
    ],
    footer: "Zero hidden developmental charges",
    link: "Tour Tinkerbelle",
  },
  {
    badge: "Class I to Class XII",
    campus: "Sector 12 Campus",
    title: "CBSE Formal Schooling",
    text: "Comprehensive academic instruction, modern science & computer labs, sports coaching, and career guidance.",
    icon: "School",
    header: "from-[#1e3a8a] to-[#3b82f6]",
    glow: "group-hover:shadow-blue-600/25",
    accent: "text-[#1e3a8a]",
    price: { label: "Grades I–VII Tuition", amount: 9000, tag: "Primary" },
    rows: [
      { label: "Grades VIII–X Tuition", value: "₹10,500 / month", tag: "Secondary" },
      { label: "GPS-Tracked Transport", value: "₹3,500 – ₹3,900 / month", tag: "Optional", icon: "Bus" },
    ],
    footer: "Includes Olympiad training and smart labs",
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
