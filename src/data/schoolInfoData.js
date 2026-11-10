// Content carried over from the old WordPress site (thebharatschool.com) for the
// information pages: contact, helpline, FAQ, achievements, staff, fees, MPD,
// transfer certificates, annual report and Bharat Sports Club.
// Files under /wp-content/uploads keep their old paths so existing links still work.

export const CAMPUSES = [
  {
    key: "tbs",
    name: "The Bharat School",
    tagline: "Senior Secondary • Affiliated to CBSE, New Delhi",
    address: ["Sector 12, Panchkula", "Haryana 134112"],
    phones: [
      { label: "+91 98761 55746", tel: "+919876155746" },
      { label: "0172-256-5400", tel: "01722565400" },
    ],
    email: "contact@thebharatschool.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109786.34383936216!2d76.78879293906249!3d30.69524889535885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f950b6da56253%3A0xf5564ed1a0ed981b!2sThe%20Bharat%20School%2C%20Sector%2012%2C%20Panchkula!5e0!3m2!1sen!2sin!4v1732534513361!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/search/?api=1&query=The+Bharat+School+Sector+12+Panchkula",
  },
  {
    key: "tinkerbelle",
    name: "Tinkerbelle",
    tagline: "Junior branch of The Bharat School",
    address: ["Sector 8, Panchkula", "Haryana 134109"],
    phones: [
      { label: "0172-464-6246", tel: "01724646246" },
      { label: "0172-464-6247", tel: "01724646247" },
      { label: "+91 70096 96847", tel: "+917009696847" },
    ],
    email: "tinkerbelle.pkl@gmail.com",
    website: "https://tinkerbelle.in/",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13722.912626384314!2d76.8435613!3d30.6979238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f934115555555%3A0x62184ade214fe30f!2sTinkerbelle%20Panchkula!5e0!3m2!1sen!2sin!4v1732534271434!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/search/?api=1&query=Tinkerbelle+Sector+8+Panchkula",
  },
];

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/thebharatschoolpkl" },
  { label: "Instagram", href: "https://www.instagram.com/thebharatschool/" },
  { label: "YouTube", href: "https://www.youtube.com/thebritishschoolpkl" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=919876155746" },
];

export const CONTACT_CLASSES = ["Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"];

export const FAQ = {
  title: "The British School Transformation to The Bharat School",
  items: [
    { q: "Why the name change?", a: "The change aligns with our commitment to cultural integration and educational excellence." },
    { q: "Will there be any changes in school values?", a: "No, our values remain the same." },
    { q: "When will the new name be officially implemented?", a: "The change will be effective from the next academic session (2024-25)." },
    { q: "How does this impact my child's education?", a: "Our focus on quality education remains unwavering." },
    { q: "What happens to the junior branch's name?", a: "\"Tinkerbelle: The Junior branch of The Bharat School\" replaces the previous name." },
    {
      q: "Will uniforms or logos change?",
      a: "No, there are slight changes to uniform which will be a gradual process. We are updating our logo on all school assets including the uniform.",
    },
    { q: "Is the school's ownership changing?", a: "No, ownership remains unchanged." },
    {
      q: "How can I get more information?",
      a: "Reach out to our Front Desk for a one-on-one discussion with the administration. Leave your queries with our front desk & the admin team will get back to you in 24 hours.",
    },
    { q: "Can I provide feedback on the change?", a: "Yes, we welcome your feedback during the individual discussion or through the school pad." },
    { q: "How will this benefit my child's education?", a: "The change aims to enhance cultural integration and global competitiveness." },
    { q: "Are there any events planned to celebrate the rebranding?", a: "Details about any celebratory events will be shared in due course." },
    {
      q: "Will email addresses & School Pad change for communication?",
      a: "Yes, over a period of time & the same will be communicated to the parents. Yes, communication will remain on the School Pad.",
    },
    { q: "Can I still use the old-school name in official documents?", a: "Yes, for classes & students till March 2024." },
    { q: "How was the new name chosen?", a: "The name was selected to embody our commitment to national values and global education standards." },
    { q: "Will the change affect CBSE Affiliation?", a: "No, our affiliations remain the same." },
    { q: "Will the website and social media be updated?", a: "Yes, all digital platforms will reflect the new name." },
    { q: "What steps are being taken to ensure a smooth transition?", a: "We have a detailed transition plan in place to minimize disruptions." },
    {
      q: "Can I reach out for individual discussions about the change?",
      a: "Absolutely, please contact our front desk to schedule a one-on-one discussion with the administration team. They will connect with you within 24 working hours.",
    },
  ],
};

const up = (p) => `/wp-content/uploads/${p}`;

export const CBSE_RESULTS = [
  {
    title: "Class X (2017-2018)",
    toppers: [
      { name: "Agam Bhullar", score: "98%", photo: up("2024/12/p2.png") },
      { name: "Thwishaa Mehta", score: "93.2%", photo: up("2024/12/p3.png") },
      { name: "Priyanshu Rauniyar", score: "93%", photo: up("2024/12/p1.png") },
    ],
  },
  {
    title: "Class X (2018-2019)",
    toppers: [
      { name: "Advit Bhullar", score: "97.6%", photo: up("2024/12/p6.png") },
      { name: "Aniketa Chauhan", score: "96.2%", photo: up("2024/12/p4.png") },
      { name: "Angelee Ahuja", score: "96.2%", photo: up("2024/12/p5.png") },
    ],
  },
  {
    title: "Class X (2019-2020)",
    toppers: [
      { name: "Sukrit Jindal", score: "98.2%", photo: up("2024/12/p7.png") },
      { name: "Kashish Mahendra", score: "95.8%", photo: up("2024/12/p8.png") },
      { name: "Parijaat Gaur", score: "92.6%", photo: up("2024/12/p10.png") },
    ],
  },
  {
    title: "Class X (2020-2021)",
    toppers: [
      { name: "Garima Goyal", score: "97.6%", photo: up("2024/12/p131.png") },
      { name: "Deeksha Sood", score: "96%", photo: up("2024/12/p11.png") },
      { name: "Meher Uppal", score: "94.8%", photo: up("2024/12/p12.png") },
    ],
  },
  {
    title: "Class X (2021-2022)",
    toppers: [
      { name: "Jyotika Goyal", score: "96.6%", photo: up("2024/12/p14.png") },
      { name: "Jaya Hanumatha Kavyasri Ganapa", score: "96%", photo: up("2024/12/p15.png") },
      { name: "Sanath Garg", score: "94.4%", photo: up("2024/12/p16.png") },
    ],
  },
  {
    title: "Class X (2022-2023)",
    toppers: [
      { name: "Dhananjay Malhotra", score: "94.2%", photo: up("2024/12/p17.png") },
      { name: "Manavjit Singh Saini", score: "94.2%", photo: up("2024/12/p18.png") },
      { name: "Trisha Mahajan", score: "91.6%", photo: up("2024/12/p19.png") },
    ],
  },
  {
    title: "Class XII (2019-2020)",
    toppers: [
      { name: "Vanshika Bhasin", score: "92.6%", stream: "Humanities", photo: up("2024/12/p22.png") },
      { name: "Jasnoor Paul", score: "89.8%", stream: "Commerce", photo: up("2024/12/p21.png") },
      { name: "Aalamjeet Kaur", score: "85.4%", stream: "Commerce", photo: up("2024/12/p20.png") },
    ],
  },
  {
    title: "Class XII (2020-2021)",
    toppers: [
      { name: "Parneet Kaur Kalsi", score: "94.2%", stream: "Humanities", photo: up("2024/12/p23.png") },
      { name: "Namrata", score: "90.4%", stream: "Humanities", photo: up("2024/12/p24.png") },
      { name: "Ananya Bhatia", score: "87%", stream: "Humanities", photo: up("2024/12/p25.png") },
    ],
  },
  {
    title: "Class XII (2021-2022)",
    toppers: [{ name: "Palak", score: "89.4%", stream: "Commerce", photo: up("2024/12/Pala.png") }],
  },
  {
    title: "Class XII (2022-2023)",
    toppers: [
      { name: "Khushmita Harjani", score: "95%", stream: "Humanities", photo: up("2024/12/Khushmita.png") },
      { name: "Kanak Thakur", score: "91.6%", stream: "Humanities", photo: up("2024/12/Kanak.png") },
    ],
  },
];

export const SPORTS_STAR = {
  name: "Hridyansh Malhotra",
  title: "SQAY, Chess and Basketball Champion",
  photo: up("2024/12/Photo-3-Center.jpg"),
  levels: [
    { level: "International", items: ["1 Gold at 16th High Altitude International SQAY Coaching Camp at Pahalgam, Kashmir"] },
    {
      level: "National",
      items: [
        "1 Bronze in 37th National Games in SQAY Championship (Special appreciation for this by Sh. Gian Chand Gupta)",
        "2 Gold at Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      ],
    },
    {
      level: "State",
      items: ["2 Gold at Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24", "Selected for Basketball State Level Tournament"],
    },
    {
      level: "District",
      items: [
        "2 Gold at 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
        "1 Gold & 1 Bronze – 13th Panchkula District Chess Championship 2023-24 (Team)",
        "1 Silver for Badminton at District Haryana School Games 2023 (Team)",
        "1 Gold for Basketball at District Haryana School Games 2023",
      ],
    },
  ],
};

export const SPORTS_ACHIEVERS = [
  {
    name: "Mayra Tholia",
    items: [
      "2 Silver – Panchkula District Roller Skating Championship",
      "1 Gold, 1 Bronze – Skating Carnival",
      "2 Gold – CBSE North Zone-II Skating Championship",
      "1 Bronze – 37th Haryana State Roller Skating Championship",
      "2 Silver – Haryana State Zonal Championship",
      "1 Gold – CBSE National Skating Competition",
    ],
  },
  {
    name: "Suvan Gupta",
    items: [
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
      "1 Silver, 1 Bronze – 13th Panchkula District Chess Championship 2023-24 (Team)",
      "1 Gold – 16th High Altitude International SQAY Coaching Camp at Pahalgam, Kashmir",
      "3 Gold – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "1 Gold – District Haryana School Games 2023 (Team)",
      "Selected for State Chess Championship",
    ],
  },
  {
    name: "Yash Gambhir",
    items: [
      "2 Gold – District Haryana School Games 2023, Selected for State Level Skating Competition",
      "1 Bronze – 1st Inter District Inline Roller Skating Championship",
      "1 Gold – Panchkula District Roller Skating Championship",
      "1 Gold – 37th Haryana State Roller Skating Championship",
    ],
  },
  {
    name: "David Wadhwa",
    items: [
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
      "2 Gold – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "1 Gold – District Haryana School Games 2023 – Basketball",
    ],
  },
  {
    name: "Ompreet Gill",
    items: [
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
      "1 Silver, 1 Bronze – 13th Panchkula District Chess Championship 2023-24 (Team)",
      "1 Gold, 1 Silver – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "1 Silver – District Haryana School Games 2023 (Team)",
      "Selected for State Level Tournament – Badminton",
    ],
  },
  {
    name: "Aarnav Kalia",
    items: [
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
      "1 Gold, 1 Bronze – 13th Panchkula District Chess Championship 2023-24 (Team)",
      "1 Gold, 1 Bronze – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "1 Gold – District Haryana School Games 2023 (Team) – Chess",
    ],
  },
  {
    name: "Nanki Walia",
    items: [
      "2 Gold – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Championship 2023-24",
    ],
  },
  {
    name: "Suryavir Singh",
    items: [
      "2 Gold – 15th Cadet, Sub Junior, Junior & Senior Panchkula District SQAY Boys Championship 2023-24",
      "1 Gold, 1 Bronze – Cadet, Sub Junior, Junior & Senior Haryana SQAY Cup 2023-24",
      "1 Gold – District Haryana School Games 2023 – Basketball",
    ],
  },
];

export const STAFF = [
  ["Ms. Geetika Sethi", "Principal", "M.A, B.Ed, MBA, PGDCA"],
  ["Ms. Vandana Sharma", "Vice Principal", "M.A., B.A, B.Ed."],
  ["Ms. Inderjeet Kaur", "Coordinator", "M.A., B.A, B.Ed."],
  ["Mr. Harish Kumar", "PET", "M.A., B.A, B.Ped"],
  ["Mr. Munir Kumar Bhudhiraja", "Music Teacher", "B.A. Instrumental"],
  ["Ms. Puja Dhawan", "PGT", "M.A, B.A, B.Ed, PGDGC"],
  ["Ms. Sarita Devi", "PGT", "M.Com, B.Com, B.Ed"],
  ["Ms. Sapna", "PGT", "MFA, BFA"],
  ["Ms. Shivani", "PGT", "M.Com, B.Com, B.Ed"],
  ["Ms. Nisha Batra", "PGT", "MCA, BCA, B.Ed"],
  ["Ms. Anu Sharma", "TGT", "M.Sc, B.Sc, M.A, B.Ed, DDPHN, PGDCA, PDPET, CCCMH"],
  ["Ms. Renu Narang", "TGT", "M.A., B.A, B.Ed."],
  ["Ms. Rajni Angrish", "TGT", "M.A, B.A, B.Ed"],
  ["Ms. Ritu Verma", "TGT", "M.A, B.Sc, B.Ed, NTT"],
  ["Ms. Shweta Dubey", "TGT", "M.Sc, B.Sc, B.Ed"],
  ["Ms. Shweta Thakur", "TGT", "M.Com, B.Com, B.Ed"],
  ["Ms. Maninderjeet Kaur", "TGT", "M.A, B.A, M.Ed, B.Ed"],
  ["Ms. Sakshi Narang", "TGT", "M.A, B.B.A, B.Ed"],
  ["Ms. Deepshi Jain", "PET", "B.A, B.Ped"],
  ["Ms. Seema Sharma", "PRT", "B.Sc, B.Ed"],
  ["Ms. Chanderlekha Sharma", "PRT", "M.Sc, B.Sc, B.Ed, PDPET"],
  ["Ms. Neha Aggarwal", "PRT", "M.A, B.A, B.Ed"],
  ["Ms. Annu Punni", "PRT", "M.Sc, B.Sc, B.Ed"],
  ["Ms. Nidhi Gautam", "PRT", "B.Sc, B.Ed, PDPET"],
  ["Ms. Kanchan Bhatnagar", "PRT", "M.Sc, B.Sc, D.El.Ed, PTT"],
  ["Ms. Mamta Joshi", "PRT", "B.A, D.Ed, D.El.Ed"],
  ["Ms. Divya Mehta", "PRT", "M.Phil, M.Sc, B.Sc, B.Ed"],
  ["Ms. Geeta Parihar", "PRT", "M.Com, B.Com, B.Ed"],
  ["Mr. Sandeep Kumar Sagar", "Accounts Officer", "B.A."],
  ["Ms. Suman Joshi", "Non Teaching", "B.A."],
  ["Ms. Nishu Gaind", "Non Teaching", "M.A, B.A, PTT, PGDCA"],
  ["Ms. Aditi Wadhwa", "Non Teaching", "MFC, BCA, B.Ed"],
].map(([name, designation, qualification]) => ({ name, designation, qualification }));

export const FEE_MODULE = {
  session: "2025-2026",
  rows: [
    { cls: "Class I", fee: "₹ 8,050" },
    { cls: "Class II", fee: "₹ 8,500" },
    { cls: "Class III to V", fee: "₹ 9,000" },
    { cls: "Class VI", fee: "₹ 9,500" },
    { cls: "Class VII to X", fee: "₹ 10,000" },
    { cls: "Class XI & XII", fee: "₹ 6,500" },
  ],
  admissionFee: "₹ 60,000",
  notes: [
    "First installment of fee will be paid through online mode. Contact school office for details.",
    "Fee is to be paid in quarterly mode.",
    "We do not charge any caution money. Fee once paid is non refundable.",
  ],
};

export const DOCUMENTS = {
  mpd: { title: "Mandatory Public Disclosure", file: up("2025/08/MPD-Form.docx-1.pdf") },
  tc2024: { title: "Transfer Certificates 2024-25", file: up("2025/11/TC-List-2024-25.xlsx-Sheet1-1.pdf") },
  tc2025: { title: "Transfer Certificates 2025-26", file: up("2025/11/WEB-Sheet-Sheet27.pdf") },
  annualReport: { title: "Annual Report 2025-26", file: up("2025/12/Annual-Report-2025-26-1.pdf") },
  externalExams: { title: "External Exams", file: up("2026/08/External-Exams.pdf") },
  booklist: { title: "Booklist 2026-27", file: up("2026/06/List-of-Books-for-Website-Revised.pdf") },
};

export const SPORTS_CLUB = {
  intro: [
    "Bharat Sports Club is the perfect place for students and sports enthusiasts to stay active and sharpen their skills. Our well-maintained sports ground offers a variety of games, including Badminton, Skating, Chess, Basketball, and Pickleball.",
    "Students of the school enjoy exclusive discounts, while outsiders can access our facilities at fixed charges. Whether you're looking to practice, compete, or just have fun, Bharat Sports Club provides a safe and engaging environment for all.",
  ],
  banner: up("2025/02/TBS-Sports-7-scaled.jpeg"),
  bookingUrl: "https://link.district.in/DSTRKT/t9ho5e4x",
  sports: [
    { name: "Badminton", price: "₹400 Onwards", photo: up("2025/02/TBS-Sports-2--scaled.jpeg") },
    { name: "Basketball", price: "₹325 Onwards", photo: up("2025/02/TBS-Sports-8--scaled.jpeg") },
    { name: "Skating", price: "₹100 Onwards", photo: up("2025/02/20250207_213402-scaled.jpg") },
    { name: "Pickleball", price: "₹800 Onwards", photo: up("2025/02/TBS-Sports-3--scaled.jpeg") },
  ],
};
