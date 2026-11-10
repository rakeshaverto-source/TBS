"use client";

import React, { useState } from "react";
import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import AdmissionsSteps from "@/components/admissions/AdmissionsSteps";
import AdmissionsTourForm from "@/components/admissions/AdmissionsTourForm";
import AdmissionsFees from "@/components/admissions/AdmissionsFees";
import AdmissionsSeats from "@/components/admissions/AdmissionsSeats";
import AdmissionsCTA from "@/components/admissions/AdmissionsCTA";
import { useContent, addSubmission } from "@/lib/content/store";

export default function AdmissionsPage() {
  const admissionsData = useContent("admissions");
  const [parentName, setParentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("The Bharat School — Sector 12");
  const [selectedGrade, setSelectedGrade] = useState("Kindergarten");
  const [preferredDay, setPreferredDay] = useState("Weekday Morning (9 AM - 12 PM)");
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (parentName && phoneNumber) {
      addSubmission("tourBookings", { parentName, phoneNumber, campus: selectedCampus, grade: selectedGrade, preferredSlot: preferredDay, status: "New" });
      setTourSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      {/* 1. Hero & Value Badges */}
      <AdmissionsHero />

      {/* 2. 5-Step Process Roadmap */}
      <AdmissionsSteps steps={admissionsData.steps} />

      {/* 3. Interactive Tour Booking Form */}
      <AdmissionsTourForm
        parentName={parentName}
        setParentName={setParentName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        selectedCampus={selectedCampus}
        setSelectedCampus={setSelectedCampus}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        preferredDay={preferredDay}
        setPreferredDay={setPreferredDay}
        tourSubmitted={tourSubmitted}
        setTourSubmitted={setTourSubmitted}
        handleTourSubmit={handleTourSubmit}
      />

      {/* 4. Transparent Tuition Fees */}
      <AdmissionsFees />

      {/* 5. Live Seat Availability */}
      <AdmissionsSeats seats={admissionsData.seats} />

      {/* 6. Campus Openness Call to Action */}
      <AdmissionsCTA />
    </div>
  );
}
