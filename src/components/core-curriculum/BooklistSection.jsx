"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  Layers, 
  FileText, 
  Check, 
  Building2,
  ExternalLink
} from "lucide-react";

const CLASS_TABS = [
  { id: "Class I", label: "Class 1", group: "primary" },
  { id: "Class II", label: "Class 2", group: "primary" },
  { id: "Class III", label: "Class 3", group: "primary" },
  { id: "Class IV", label: "Class 4", group: "primary" },
  { id: "Class V", label: "Class 5", group: "primary" },
  { id: "Class VI", label: "Class 6", group: "middle" },
  { id: "Class VII", label: "Class 7", group: "middle" },
  { id: "Class VIII", label: "Class 8", group: "middle" },
  { id: "Class IX", label: "Class 9", group: "secondary" },
  { id: "Class X", label: "Class 10", group: "secondary" },
  { id: "Class XI HUMANITIES", label: "Class 11 Humanities", group: "senior" },
  { id: "Class XI COMMERCE", label: "Class 11 Commerce", group: "senior" },
  { id: "Class XII HUMANITIES", label: "Class 12 Humanities", group: "senior" },
  { id: "Class XII COMMERCE", label: "Class 12 Commerce", group: "senior" },
];

export default function BooklistSection({ booksData }) {
  const [selectedClass, setSelectedClass] = useState("Class I");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("all");

  // Filter tabs by group if chosen
  const filteredTabs = useMemo(() => {
    if (activeGroup === "all") return CLASS_TABS;
    return CLASS_TABS.filter(t => t.group === activeGroup);
  }, [activeGroup]);

  // Current class data
  const currentClassData = booksData[selectedClass] || { tables: [] };

  // Filter tables and rows by search query
  const filteredTables = useMemo(() => {
    if (!searchQuery.trim()) return currentClassData.tables;

    const q = searchQuery.toLowerCase();
    return currentClassData.tables.map(tbl => {
      const filteredRows = tbl.rows.filter(r => 
        r.title.toLowerCase().includes(q) ||
        r.publisher.toLowerCase().includes(q)
      );
      return {
        ...tbl,
        rows: filteredRows
      };
    }).filter(tbl => tbl.rows.length > 0);
  }, [currentClassData, searchQuery]);

  return (
    <section id="booklist-session" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1e3a8a] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Official Prescribed Syllabi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            BOOKLIST SESSION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-blue-600">
              2026–27
            </span>
          </h2>
        </div>

        {/* Group Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Classes (1 to 12)" },
            { id: "primary", label: "Primary (Class 1 - 5)" },
            { id: "middle", label: "Middle School (Class 6 - 8)" },
            { id: "secondary", label: "Secondary (Class 9 - 10)" },
            { id: "senior", label: "Senior Secondary (11 - 12 Streams)" },
          ].map(grp => (
            <button
              key={grp.id}
              onClick={() => {
                setActiveGroup(grp.id);
                // If current selectedClass is not in the filtered list, pick the first
                const matching = CLASS_TABS.filter(t => grp.id === "all" || t.group === grp.id);
                if (matching.length > 0 && !matching.some(m => m.id === selectedClass)) {
                  setSelectedClass(matching[0].id);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeGroup === grp.id
                  ? "bg-[#1e3a8a] text-white shadow-md shadow-blue-900/15"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Class Selection Buttons Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filteredTabs.map(tab => {
            const isSelected = selectedClass === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedClass(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? "bg-blue-50 border-[#1e3a8a] text-[#1e3a8a] shadow-xs"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <FileText className={`w-3.5 h-3.5 ${isSelected ? "text-[#1e3a8a]" : "text-slate-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Control Bar: Search */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search books or publishers in ${selectedClass}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-slate-800"
            />
          </div>
        </div>

        {/* Tables Display */}
        <div className="space-y-10">
          {filteredTables.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-medium text-sm">
                No books found matching &quot;{searchQuery}&quot; for {selectedClass}.
              </p>
            </div>
          ) : (
            filteredTables.map((tbl, tIdx) => (
              <div key={tIdx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Table Title Bar */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {selectedClass} — {tbl.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {tbl.rows.length} {tbl.rows.length === 1 ? "Item" : "Items"}
                  </span>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-700 text-xs uppercase tracking-wider font-bold">
                        <th className="py-3.5 px-4 sm:px-6 w-16 text-center">Sr No</th>
                        <th className="py-3.5 px-4 sm:px-6">Book / Notebook Title</th>
                        <th className="py-3.5 px-4 sm:px-6">Publisher / Vendor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {tbl.rows.map((row, rIdx) => (
                        <tr 
                          key={rIdx} 
                          className="hover:bg-blue-50/40 transition-colors"
                        >
                          <td className="py-3.5 px-4 sm:px-6 text-center font-bold text-slate-400">
                            {row.sr || rIdx + 1}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-800">
                            {row.title}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-medium">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                              <Building2 className="w-3 h-3 text-slate-400" />
                              {row.publisher}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
