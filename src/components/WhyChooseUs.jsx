"use client";

import React, { useEffect, useState, useRef } from 'react';
import {
  Users,
  GraduationCap,
  Handshake,
  Network
} from 'lucide-react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ to, suffix = "", text = "" }) {
  const ref = useRef(null);
  // 'once: true' makes it run only the first time you scroll to it
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2500; // 2.5 seconds

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Easing function (easeOutExpo) for a smooth slow-down at the end
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * to));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}{text && ` ${text}`}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="relative w-full z-20 -mt-16 pb-16">
      {/* Container for the Split Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white shadow-2xl overflow-hidden">

          {/* Left Side - Image */}
          <div className="w-full lg:w-[45%] relative overflow-hidden flex items-center">
            {/* Soft blurred fill for the empty space */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-90"
              style={{ backgroundImage: "url('/WHY%20CHOOSE%20TBS.png')" }}
              aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-white/20" aria-hidden="true"></div>

            {/* Full image - not cropped, vertically centred */}
            <img
              src="/WHY%20CHOOSE%20TBS.png"
              alt="Students of The Bharat School"
              className="relative w-full h-auto shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%] bg-white p-6 md:p-8 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-3">WHY CHOOSE TBS?</h2>
            <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed pr-4">
              The Bharat School was initiated with a profound sense of compassion and a dedicated mission to influence the trajectory of the nation’s future through the provision of exemplary resources and effective learning programs. The Bharat School is committed to the implementation of conscientious learning methodologies, thereby contributing to the refinement of the educational landscape and fostering superior outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-gray-100">

              {/* Item 1 */}
              <div className="flex items-center gap-4 py-5 pr-4 sm:border-r border-b border-gray-100">
                <div className="text-[#1e3a8a] shrink-0">
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black">
                    <AnimatedCounter to={21} text="Years" />
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">of Legacy</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 py-5 pl-0 sm:pl-6 border-b border-gray-100">
                <div className="text-[#1e3a8a] shrink-0">
                  <GraduationCap size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black">
                    <AnimatedCounter to={100} suffix="%" />
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">School<br />Result</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 py-5 pr-4 sm:border-r border-b sm:border-b-0 border-gray-100">
                <div className="text-[#1e3a8a] shrink-0">
                  <Handshake size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black">
                    <AnimatedCounter to={100} suffix="%" />
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">School-Parent<br />Partnership</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 py-5 pl-0 sm:pl-6">
                <div className="text-[#1e3a8a] shrink-0">
                  <Network size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black">
                    <AnimatedCounter to={1000} suffix="+" />
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">Alumni Network</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
