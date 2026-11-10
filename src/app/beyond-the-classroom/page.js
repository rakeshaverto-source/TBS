"use client";

import React, { useState, useMemo } from "react";
import { useContent, addSubmission } from "@/lib/content/store";
import BeyondHero from "@/components/beyond-the-classroom/BeyondHero";
import BeyondPillars from "@/components/beyond-the-classroom/BeyondPillars";
import BeyondCalendar from "@/components/beyond-the-classroom/BeyondCalendar";
import BeyondFeatures from "@/components/beyond-the-classroom/BeyondFeatures";
import BeyondCTA from "@/components/beyond-the-classroom/BeyondCTA";
import ExamReminderModal from "@/components/beyond-the-classroom/ExamReminderModal";

export default function BeyondTheClassroomPage() {
  const { olympiads: olympiadsData, pillars: pillarsData } = useContent("beyondClassroom");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePillarTab, setActivePillarTab] = useState(0);
  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const [selectedExamForModal, setSelectedExamForModal] = useState(null);
  const [notificationEmail, setNotificationEmail] = useState("");
  const [reminderSuccess, setReminderSuccess] = useState(false);

  // Filtered Olympiad List
  const filteredOlympiads = useMemo(() => {
    return olympiadsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGrade =
        selectedGrade === "all" ||
        (selectedGrade === "primary" && item.classMin <= 5) ||
        (selectedGrade === "middle" && item.classMax >= 6 && item.classMin <= 8) ||
        (selectedGrade === "senior" && item.classMax >= 9);
      return matchesCategory && matchesSearch && matchesGrade;
    });
  }, [olympiadsData, selectedCategory, selectedGrade, searchQuery]);

  const handleOpenReminder = (exam) => {
    setSelectedExamForModal(exam);
    setReminderModalOpen(true);
    setReminderSuccess(false);
  };

  const handleSendReminder = (e) => {
    e.preventDefault();
    if (notificationEmail) {
      addSubmission("examReminders", { email: notificationEmail, exam: selectedExamForModal?.name || "" });
      setReminderSuccess(true);
      setTimeout(() => {
        setReminderModalOpen(false);
        setNotificationEmail("");
        setReminderSuccess(false);
      }, 2000);
    }
  };

  const handleSelectPillarFromHero = (idx) => {
    setActivePillarTab(idx);
    const el = document.getElementById("four-pillars");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <BeyondHero
        pillars={pillarsData}
        onSelectPillar={handleSelectPillarFromHero}
      />

      {/* 2. Four Pillars Interactive Section */}
      <BeyondPillars
        pillars={pillarsData}
        activePillarTab={activePillarTab}
        setActivePillarTab={setActivePillarTab}
      />

      {/* 3. Olympiad Calendar Schedule & Filter */}
      <BeyondCalendar
        filteredOlympiads={filteredOlympiads}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        onOpenReminder={handleOpenReminder}
      />

      {/* 4. Methodology, Sports Spotlight & Student Leadership */}
      <BeyondFeatures />

      {/* 5. Call To Action Banner */}
      <BeyondCTA />

      {/* 6. Alert / Notification Modal */}
      <ExamReminderModal
        isOpen={reminderModalOpen}
        onClose={() => setReminderModalOpen(false)}
        exam={selectedExamForModal}
        email={notificationEmail}
        setEmail={setNotificationEmail}
        onSubmit={handleSendReminder}
        isSuccess={reminderSuccess}
      />
    </div>
  );
}
