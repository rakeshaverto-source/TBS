export const coreCurriculumData = {
  hero: {
    badge: "Holistic CBSE Curriculum • Session 2026–27",
    title: "Core Curriculum",
    highlight: "at The Bharat School",
    subtitle: "A balanced, future-forward CBSE pedagogical framework designed to foster academic excellence, creative inquiry, practical problem-solving, and sound character.",
    stats: [
      { value: "CBSE", label: "Affiliation & Standard" },
      { value: "100%", label: "Experiential Learning" },
      { value: "1:1", label: "Career Mentorship" },
      { value: "Class I-XII", label: "Booklist & Syllabi" }
    ]
  },
  pillars: [
    {
      id: "academic-excellence",
      title: "Academic Excellence",
      subtitle: "Foundational & Advanced Mastery",
      description: "Rigorous CBSE-aligned curriculum designed to encourage in-depth conceptual understanding, inquiry-based learning, and measurable academic accomplishments.",
      icon: "GraduationCap",
      color: "from-blue-600 to-indigo-700",
      accent: "#2563eb"
    },
    {
      id: "creative-arts",
      title: "Creative Arts",
      subtitle: "Imagination & Self-Expression",
      description: "Nurturing aesthetic appreciation, visual arts, music, theatre, and design thinking to allow students to express ideas boldly and creatively.",
      icon: "Palette",
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b"
    },
    {
      id: "critical-thinking",
      title: "Critical Thinking",
      subtitle: "Analytical & Problem-Solving Skills",
      description: "Empowering young thinkers with logic, scientific inquiry, STEM explorations, and reasoning skills required to solve real-world challenges.",
      icon: "Brain",
      color: "from-emerald-600 to-teal-700",
      accent: "#059669"
    },
    {
      id: "cultural-awareness",
      title: "Cultural Awareness",
      subtitle: "Global Mindset & Rooted Values",
      description: "Celebrating Indian heritage while cultivating an inclusive global worldview, linguistic versatility, and mutual respect among communities.",
      icon: "Globe2",
      color: "from-rose-500 to-red-600",
      accent: "#e11d48"
    },
    {
      id: "career-guidance",
      title: "Career Guidance",
      subtitle: "Strategic Future Trajectories",
      description: "Dedicated Career Guidance Cell delivering personalized profiling, psychometric assessments, and stream advice for higher education success.",
      icon: "Compass",
      color: "from-purple-600 to-indigo-800",
      accent: "#7c3aed"
    }
  ],
  modules: [
    {
      id: "beyond-books",
      badge: "Holistic Development",
      title: "Going Beyond The Books",
      description: "Our curriculum initiatives transcend the confines of traditional textbooks, directing our attention towards the holistic development of the child's cognitive faculties to unveil latent creativity and foster independent thinking. The Bharat School remains steadfast in its commitment to providing students with superlative learning resources designed to nurture young minds. Our institution facilitates enriching experiences through meticulously planned field trips, creative competitions, and a spectrum of diverse activities, all aimed at instilling confidence and resilience in our esteemed students.",
      image: "/core-curriculum/pillar-1.webp",
      gallery: [
        "/curriculum/beyond-1.webp",
        "/curriculum/beyond-2.webp",
        "/curriculum/beyond-3.webp",
        "/curriculum/beyond-4.webp",
        "/curriculum/beyond-5.webp",
        "/curriculum/beyond-6.webp"
      ]
    },
    {
      id: "practical-learning",
      badge: "Real-World Application",
      title: "Practical Learning",
      description: "At The Bharat School, we are dedicated to fostering practical learning experiences that extend beyond traditional classrooms and textbooks. Through meticulously organized workshops, we empower our students with practical knowledge, enabling them to grasp the real-world applications of their studies.",
      image: "/core-curriculum/pillar-2.webp",
      gallery: [
        "/curriculum/practical-1.webp",
        "/curriculum/practical-2.webp",
        "/curriculum/practical-3.webp",
        "/curriculum/practical-4.webp",
        "/curriculum/practical-5.webp",
        "/curriculum/practical-6.webp"
      ]
    },
    {
      id: "class-edge",
      badge: "Phygital Innovation",
      title: "Class Edge",
      description: "Class Edge is an innovative and comprehensive educational solution from Tata Class Edge. Tinkerbelle School entered into a partnership with TCE in 2011 to provide phygital learning solution for pre-primary children. The curriculum ensures skill-building across all domains to help students:",
      image: "/core-curriculum/classedge.webp",
      points: [
        "Communicate with confidence",
        "Connect with joy of learning",
        "Care for their space"
      ]
    },
    {
      id: "assessments",
      badge: "CBSE Framework",
      title: "Assessments",
      description: "Aligned with CBSE affiliation, our academic assessments adhere to the national curriculum, regularly updated per CBSE directives. Annual report cards, parent-teacher conferences, and open communication channels are integral.",
      image: "/core-curriculum/pillar-4.webp",
      // Shown in place of the photo
      examSchedule: {
        title: "Tentative Schedule of Exam",
        terms: [
          { term: "Term-I", rows: [{ exam: "Periodic Test-1", month: "May" }, { exam: "Term I", month: "September" }] },
          { term: "Term-II", rows: [{ exam: "Periodic Test-2", month: "Nov/Dec" }, { exam: "Term II", month: "March" }] }
        ]
      }
    },
    {
      id: "career-guidance-cell",
      badge: "Futures & Ambitions",
      title: "Career Guidance Cell",
      description: "In the contemporary landscape of diverse career options, students frequently encounter the challenge of selecting the optimal path. Our proficient career guidance cell, well-versed in discerning ideal options, adeptly assists students in illuminating their future trajectories. Employing discerning parameters, we judiciously recommend suitable career paths tailored to each student's unique strengths and aspirations.",
      image: "/core-curriculum/career-counselling.webp"
    }
  ]
};
