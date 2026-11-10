"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Palette, 
  Brain, 
  Globe2, 
  Compass,
  Paintbrush,
  Lightbulb,
  Wifi,
  ChartPie,
  Calculator,
  Pizza,
  Mic,
  Briefcase,
  ScrollText,
} from "lucide-react";
import { getIcon } from "@/lib/icons";

// lucide has no easel or dancer, so these two are drawn in the same line style
function EaselIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="3" width="14" height="10" rx="1" />
      <path d="M12 13v8M8 13l-3 8M16 13l3 8M12 1v2" />
    </svg>
  );
}

function DancerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="13" cy="4" r="2" />
      <path d="M12 7l-1 7M5 6l6 3 6-5M11 14l-4 7M11 14l5 2 3 5" />
    </svg>
  );
}

// Small white icon chip that pops in on top of a card's bottom band
function IconChip({ Icon, delay, className = "", style }) {
  return (
    <motion.span
      variants={{
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { delay, type: "spring", stiffness: 380, damping: 14 } },
      }}
      className={`shrink-0 w-8 h-8 rounded-full bg-white/95 shadow-md ring-1 ring-black/5 flex items-center justify-center text-slate-700 ${className}`}
      style={style}
    >
      <Icon className="w-4 h-4" />
    </motion.span>
  );
}

const ICON_MAP = {
  GraduationCap,
  Palette,
  Brain,
  Globe2,
  Compass
};

// Rainbow paper-strip colours (green → yellow → orange → red → pink → purple → blue)
const STRIPE_COLORS = [
  "#3db319", "#b5d80f", "#fde70a", "#ffa41b", "#ff4a0a",
  "#dc0b28", "#df1166", "#56276d", "#a885c2", "#11689b",
];

// Strip grow-in animation. The in-view trigger sits on the parent box (which
// always has height); a strip starting at scaleY 0 has no size, so the browser
// can't tell when it is on screen and the animation might never start.
const stripVariants = {
  hidden: { scaleY: 0 },
  show: (i) => ({ scaleY: 1, transition: { delay: 0.2 + i * 0.04, duration: 0.4, ease: "easeOut" } }),
};

// Card 1 (Academic Excellence): colour bars hanging from the top edge with
// rounded ends at different lengths, as in the client's reference image.
const BAR_COLORS = ["#005ce6", "#00bfa5", "#ffd600", "#f43434", "#7a00d6"];
const BAR_LENGTHS = [88, 62, 80, 70, 84, 96, 84, 92, 82, 94]; // % of band height

function ColorStrips() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="-mx-8 -mb-8 mt-6 h-16 rounded-b-3xl overflow-hidden flex items-start bg-white border-t border-slate-200/60"
      aria-hidden="true"
    >
      {BAR_LENGTHS.map((len, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={stripVariants}
          className="flex-1 origin-top rounded-b-full transition-[filter] duration-300 hover:brightness-110"
          style={{ height: `${len}%`, backgroundColor: BAR_COLORS[i % BAR_COLORS.length] }}
        />
      ))}
    </motion.div>
  );
}

// Full-width band of vertical paintbrush strokes (top to bottom), same layout as card 1
const BRUSH_COLORS = STRIPE_COLORS;
// Small per-stroke variations so each one looks hand-painted
const BRUSH_START = [1, -2, 2, -1, 3, 0, -2, 2, -1, 1];
const BRUSH_END = [64, 67, 62, 66, 63, 68, 63, 65, 62, 66];
const BRUSH_TILT = [0.8, -0.6, 1, -0.9, 0.5, -0.7, 0.9, -0.5, 0.7, -0.8];

function BrushBand() {
  const n = BRUSH_COLORS.length;
  const w = 100 / n;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative -mx-8 -mb-8 mt-6 h-16 rounded-b-3xl overflow-hidden bg-[#fffaf0]"
      aria-hidden="true"
    >
      {/* Art objects: brush, easel, palette */}
      <div className="absolute inset-0 z-10 flex items-center justify-evenly">
        <IconChip Icon={Paintbrush} delay={1.1} className="text-amber-600" />
        <IconChip Icon={EaselIcon} delay={1.25} className="text-orange-600" />
        <IconChip Icon={Palette} delay={1.4} className="text-rose-600" />
      </div>
      <svg viewBox="0 0 100 64" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <filter id="brush-band-rough" filterUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="84">
            {/* 1. Rough, wavy edges */}
            <feTurbulence type="fractalNoise" baseFrequency="0.9 0.05" numOctaves="2" seed="7" result="edge" />
            <feDisplacementMap in="SourceGraphic" in2="edge" scale="2.2" xChannelSelector="R" yChannelSelector="G" result="shape" />
            {/* 2. Bristle streaks running top to bottom */}
            <feTurbulence type="fractalNoise" baseFrequency="2.4 0.035" numOctaves="3" seed="11" result="bristles" />
            <feColorMatrix in="bristles" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 -0.45" result="dark" />
            <feComposite in="dark" in2="shape" operator="in" result="darkIn" />
            <feColorMatrix in="bristles" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0.9 0 0 -0.55" result="light" />
            <feComposite in="light" in2="shape" operator="in" result="lightIn" />
            <feMerge>
              <feMergeNode in="shape" />
              <feMergeNode in="darkIn" />
              <feMergeNode in="lightIn" />
            </feMerge>
          </filter>
        </defs>
        {BRUSH_COLORS.map((c, i) => {
          const x = i * w + w / 2;
          const t = BRUSH_TILT[i % BRUSH_TILT.length];
          const y0 = BRUSH_START[i % BRUSH_START.length];
          const y1 = BRUSH_END[i % BRUSH_END.length];
          return (
            <motion.path
              key={i}
              d={`M ${x - t} ${y0} C ${x + t} 20, ${x - t} 44, ${x + t} ${y1}`}
              stroke={c}
              strokeWidth={w * 1.02}
              strokeLinecap="round"
              fill="none"
              filter="url(#brush-band-rough)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: "easeOut" }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

// Card 3 (Critical Thinking): jigsaw pieces slide in one by one, lock
// together, and a tick pops up at the end — problem solved.
const PUZZLE_COLORS = ["#10b981", "#facc15", "#f97316", "#0ea5e9"];
const PIECE_W = 75;
const BAND_H = 64;
const TICK_W = 50;
const PUZZLE_W = PUZZLE_COLORS.length * PIECE_W + TICK_W;

// One piece: flat top/bottom, a round tab sticking out on the right and a
// matching hole on the left, so neighbouring pieces lock together.
function piecePath(i, count) {
  const x0 = i * PIECE_W;
  const x1 = x0 + PIECE_W;
  const right =
    i < count - 1
      ? `L ${x1} 22 C ${x1 + 18} 10, ${x1 + 18} 54, ${x1} 42 L ${x1} ${BAND_H}`
      : `L ${x1} ${BAND_H}`;
  const left =
    i > 0
      ? `L ${x0} 42 C ${x0 + 18} 54, ${x0 + 18} 10, ${x0} 22 L ${x0} 0`
      : `L ${x0} 0`;
  return `M ${x0} 0 L ${x1} 0 ${right} L ${x0} ${BAND_H} ${left} Z`;
}

function PuzzleBand() {
  const count = PUZZLE_COLORS.length;
  const tickX = count * PIECE_W + TICK_W / 2;
  const tickDelay = 0.3 + count * 0.25;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative -mx-8 -mb-8 mt-6 h-16 rounded-b-3xl overflow-hidden bg-slate-100"
      aria-hidden="true"
    >
      <svg viewBox={`0 0 ${PUZZLE_W} ${BAND_H}`} preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="puzzle-shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {PUZZLE_COLORS.map((c, i) => (
          <motion.g
            key={i}
            variants={{
              hidden: { x: -60, opacity: 0 },
              show: {
                x: 0,
                opacity: 1,
                transition: { delay: 0.3 + i * 0.25, type: "spring", stiffness: 260, damping: 18 },
              },
            }}
          >
            <path d={piecePath(i, count)} fill={c} />
            <path d={piecePath(i, count)} fill="url(#puzzle-shine)" />
            <path
              d={piecePath(i, count)}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeOpacity="0.85"
              vectorEffect="non-scaling-stroke"
            />
          </motion.g>
        ))}

        {/* Tick: problem solved */}
        <motion.circle
          cx={tickX}
          cy={BAND_H / 2}
          r="15"
          fill="#16a34a"
          variants={{
            hidden: { scale: 0 },
            show: { scale: 1, transition: { delay: tickDelay, type: "spring", stiffness: 400, damping: 14 } },
          }}
          style={{ transformOrigin: `${tickX}px ${BAND_H / 2}px` }}
        />
        <motion.path
          d={`M ${tickX - 7} ${BAND_H / 2} L ${tickX - 2} ${BAND_H / 2 + 5} L ${tickX + 7} ${BAND_H / 2 - 5}`}
          fill="none"
          stroke="#fff"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0 },
            show: { pathLength: 1, transition: { delay: tickDelay + 0.25, duration: 0.35 } },
          }}
        />
      </svg>

      {/* Thinking objects, one on each puzzle piece: bulb, wifi, pie chart, calculator */}
      {[Lightbulb, Wifi, ChartPie, Calculator].map((Icon, i) => (
        <IconChip
          key={i}
          Icon={Icon}
          delay={0.5 + i * 0.25}
          className="absolute top-1/2 -mt-4 -ml-4 text-emerald-700"
          style={{ left: `${(((i + 0.5) * PIECE_W) / PUZZLE_W) * 100}%` }}
        />
      ))}
    </motion.div>
  );
}

// Card 4 (Cultural Awareness): a rangoli in the middle (rooted values) with
// dotted lines running out to a globe on each side (global mindset).
const RANGOLI_OUTER = ["#e11d48", "#f97316"]; // alternating outer petals
const RANGOLI_INNER = ["#facc15", "#16a34a"]; // alternating inner petals

function petalVariants(delay) {
  return {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { delay, type: "spring", stiffness: 260, damping: 16 } },
  };
}

function Rangoli() {
  const outer = Array.from({ length: 8 }, (_, i) => i * 45);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  return (
    // Slow spin via CSS (a motion `animate` here would stop the petals from
    // receiving the parent's "show" variant)
    <svg viewBox="-50 -50 100 100" className="h-14 w-14 shrink-0 animate-[spin_60s_linear_infinite]">
      {/* Outer petals */}
      {outer.map((a, i) => (
        <g key={`o${a}`} transform={`rotate(${a})`}>
          <motion.ellipse
            cx="0" cy="-30" rx="9" ry="17"
            fill={RANGOLI_OUTER[i % 2]}
            variants={petalVariants(0.3 + i * 0.08)}
          />
        </g>
      ))}
      {/* Inner petals */}
      {inner.map((a, i) => (
        <g key={`i${a}`} transform={`rotate(${a})`}>
          <motion.ellipse
            cx="0" cy="-17" rx="6" ry="11"
            fill={RANGOLI_INNER[i % 2]}
            variants={petalVariants(0.9 + i * 0.06)}
          />
        </g>
      ))}
      {/* Centre */}
      <motion.circle r="9" fill="#7c3aed" variants={petalVariants(1.4)} />
      <motion.circle r="4" fill="#fde68a" variants={petalVariants(1.5)} />
      {/* Dots ring */}
      {outer.map((a, i) => (
        <g key={`d${a}`} transform={`rotate(${a + 22.5})`}>
          <motion.circle cy="-37" r="2.5" fill="#0ea5e9" variants={petalVariants(1.5 + i * 0.04)} />
        </g>
      ))}
    </svg>
  );
}

function GlobeBadge({ delay }) {
  return (
    <motion.span
      variants={{
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { delay, type: "spring", stiffness: 380, damping: 14 } },
      }}
      className="shrink-0 w-9 h-9 rounded-full bg-white shadow-md ring-2 ring-sky-200 flex items-center justify-center text-sky-600"
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <Globe2 className="w-5 h-5" />
      </motion.span>
    </motion.span>
  );
}

function DottedLine({ side, delay }) {
  return (
    <motion.span
      variants={{
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { delay, duration: 0.6, ease: "easeOut" } },
      }}
      className={`flex-1 mx-2 border-t-[3px] border-dotted border-rose-400 ${side === "left" ? "origin-right" : "origin-left"}`}
    />
  );
}

function RangoliBand() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative -mx-8 -mb-8 mt-6 h-16 rounded-b-3xl overflow-hidden bg-linear-to-r from-orange-50 via-rose-50 to-orange-50 border-t border-rose-100 flex items-center px-5"
      aria-hidden="true"
    >
      {/* Culture objects around the rangoli: dancer, food, mic, globe */}
      <IconChip Icon={DancerIcon} delay={2.0} className="text-rose-600" />
      <IconChip Icon={Pizza} delay={2.1} className="ml-1.5 text-orange-600" />
      <DottedLine side="left" delay={1.7} />
      <Rangoli />
      <DottedLine side="right" delay={1.7} />
      <IconChip Icon={Mic} delay={2.1} className="mr-1.5 text-violet-600" />
      <GlobeBadge delay={2.2} />
    </motion.div>
  );
}

// Card 5 (Career Guidance): colourful steps rise left to right, a little
// climber hops up them, and a flag waves at the top — reaching the goal.
const STEP_COLORS = ["#7c3aed", "#4f46e5", "#2563eb", "#0d9488", "#16a34a"];
const STEP_HEIGHTS = [18, 30, 42, 54, 66]; // % of band height
// Step 1 is too short for an icon, so the climb starts on step 2
const STEP_ICONS = [null, Globe2, Briefcase, ScrollText, GraduationCap];

function StepsBand() {
  const n = STEP_COLORS.length;
  const stepsDone = 0.3 + n * 0.12 + 0.3;

  // Climber path: start on step 1, hop up to each next step, stop beside the flag
  const xs = STEP_HEIGHTS.map((_, i) => ((i + 0.5) / n) * 100);
  xs[n - 1] = ((n - 0.75) / n) * 100;
  const left = [];
  const bottom = [];
  STEP_HEIGHTS.forEach((h, i) => {
    if (i === 0) {
      left.push(`${xs[0]}%`);
      bottom.push(`${h}%`);
      return;
    }
    left.push(`${(xs[i - 1] + xs[i]) / 2}%`, `${xs[i]}%`);
    bottom.push(`${h + 14}%`, `${h}%`); // peak of the hop, then land
  });

  const flagDelay = stepsDone + 2;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative -mx-8 -mb-8 mt-6 h-16 rounded-b-3xl overflow-hidden bg-linear-to-b from-indigo-50 to-white border-t border-indigo-100"
      aria-hidden="true"
    >
      {/* Steps */}
      <div className="absolute inset-0 flex items-end">
        {STEP_COLORS.map((c, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { scaleY: 0 },
              show: { scaleY: 1, transition: { delay: 0.3 + i * 0.12, type: "spring", stiffness: 220, damping: 18 } },
            }}
            className="flex-1 origin-bottom rounded-t-md border-r border-white/40 last:border-r-0 flex items-center justify-center text-white"
            style={{
              height: `${STEP_HEIGHTS[i]}%`,
              backgroundColor: c,
              backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.12) 100%)",
            }}
          >
            {/* Career objects on the steps: globe, portfolio, degree, graduation hat */}
            {STEP_ICONS[i] && React.createElement(STEP_ICONS[i], { className: "w-3.5 h-3.5 drop-shadow-sm" })}
          </motion.span>
        ))}
      </div>

      {/* Climber */}
      <motion.span
        variants={{
          hidden: { opacity: 0, left: left[0], bottom: bottom[0] },
          show: {
            opacity: 1,
            left,
            bottom,
            transition: {
              opacity: { delay: stepsDone, duration: 0.2 },
              left: { delay: stepsDone + 0.2, duration: 1.8, ease: "easeInOut" },
              bottom: { delay: stepsDone + 0.2, duration: 1.8, ease: "easeInOut" },
            },
          },
        }}
        className="absolute w-3.5 h-3.5 -ml-1.75 rounded-full bg-amber-400 ring-2 ring-white shadow-md"
      />

      {/* Flag on the top step */}
      <motion.span
        variants={{
          hidden: { scale: 0, opacity: 0 },
          show: { scale: 1, opacity: 1, transition: { delay: flagDelay, type: "spring", stiffness: 380, damping: 14 } },
        }}
        className="absolute origin-bottom"
        style={{ left: `${((n - 0.3) / n) * 100}%`, bottom: `${STEP_HEIGHTS[n - 1]}%` }}
      >
        <span className="block w-0.5 h-5 bg-slate-700 rounded-full" />
        <span className="absolute top-0 left-0.5 w-4 h-3 bg-[#e1251b] origin-left [clip-path:polygon(0_0,100%_50%,0_100%)] animate-[flag-wave_1.2s_ease-in-out_infinite]" />
      </motion.span>
      <style>{`@keyframes flag-wave { 0%,100% { transform: skewY(0deg) scaleX(1); } 50% { transform: skewY(-8deg) scaleX(0.85); } }`}</style>
    </motion.div>
  );
}

function CardAccent({ index, color }) {
  // Other cards: a simple gradient line in the card's own colour
  return (
    <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${color} transition-all duration-500 group-hover:w-full`} />
  );
}

export default function CurriculumPillarsGrid({ pillars }) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1e3a8a] mb-4">
            Core Academic Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Five Foundations of{" "}
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-blue-600">
              Our Curriculum
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every subject, co-curricular endeavor, and classroom interaction at The Bharat School is anchored in five interconnected pedagogical pillars.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        {/* Layout in plain CSS (so it doesn't depend on Tailwind generating new classes):
            - mobile: 1 per row
            - tablet: 2 per row, a lone last card is centred
            - desktop: 6-column grid, each card spans 2 → exactly 3 per row;
              the 4th card starts at column 2 so the last 2 sit centred */}
        <style>{`
          .pillars-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1.5rem; }
          @media (min-width: 640px) { .pillars-grid { gap: 2rem; } }
          @media (min-width: 768px) {
            .pillars-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .pillars-grid > .pillar-last-odd { grid-column: span 2; justify-self: center; width: calc(50% - 1rem); }
          }
          @media (min-width: 1024px) {
            .pillars-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
            .pillars-grid > * { grid-column: span 2; }
            .pillars-grid > :nth-child(4) { grid-column: 2 / span 2; }
            .pillars-grid > .pillar-last-odd { width: auto; justify-self: stretch; }
          }
        `}</style>
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon] || getIcon(pillar.icon, GraduationCap);

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col justify-between ${
                  idx === pillars.length - 1 && pillars.length % 2 === 1 ? "pillar-last-odd" : ""
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1e3a8a] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Creative bottom accent */}
                {idx === 0 ? (
                  <ColorStrips />
                ) : idx === 1 ? (
                  <BrushBand />
                ) : idx === 2 ? (
                  <PuzzleBand />
                ) : idx === 3 ? (
                  <RangoliBand />
                ) : idx === 4 ? (
                  <StepsBand />
                ) : (
                  <div className="mt-6 pt-5 border-t border-slate-200/60">
                    <CardAccent index={idx} color={pillar.color} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
