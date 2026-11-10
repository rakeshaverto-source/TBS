"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Share2,
  CheckCircle2,
  TrendingUp,
  Bookmark
} from "lucide-react";
import { useContent, addSubmission } from "@/lib/content/store";

// how many article cards to show before "Load more"
const PAGE_SIZE = 12;

export default function BlogsPage() {
  const { posts: blogsData, categories } = useContent("blogs");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // /blogs?category=Admissions (linked from the article sidebar) opens that category
  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("category");
    if (cat && categories.includes(cat)) setSelectedCategory(cat);
  }, [categories]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.tags || []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [blogsData, selectedCategory, searchQuery]);

  const featuredPost = blogsData.find((b) => b.featured) || blogsData[0];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      addSubmission("newsletter", { email: newsletterEmail });
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      {/* Hero Banner Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0d1527] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-yellow-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <span>The Bharat School Insights & Articles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Thoughts on Modern Pedagogy, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-yellow-300">
              Parenting & Child Development
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert perspectives, classroom reflections, practical parenting strategies, and celebration of student achievements directly from our academic team.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, parenting tips, CBSE prep, olympiads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 rounded-2xl border border-white/20 focus:border-red-500 focus:outline-none placeholder:text-slate-400 text-sm sm:text-base backdrop-blur-md transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-semibold text-slate-300 hover:text-white bg-white/20 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story Banner (If not searching) */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image Side */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden group">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow">
                    Featured Spotlight
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1e3a8a] text-xs font-bold rounded-full shadow">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1e3a8a] hover:text-red-600 transition-colors leading-snug mb-4">
                    <Link href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full relative overflow-hidden ring-2 ring-red-100 shrink-0">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 hover:gap-2.5 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#1e3a8a] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post Counter */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium shrink-0 self-end sm:self-center">
            Showing <span className="font-bold text-slate-800">{filteredBlogs.length}</span> articles
          </p>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/70 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No articles match your search</h3>
            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
              We couldn't find any stories matching "{searchQuery}". Try browsing through another category or clearing your query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-[#1e3a8a] text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(0, visibleCount).map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx % PAGE_SIZE) * 0.05 }}
                className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#1e3a8a] text-[11px] font-bold rounded-lg shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta row */}
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-red-500" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-3">
                      {/* the link's ::after covers the whole card, so the full card is clickable */}
                      <Link href={`/blogs/${blog.slug}`} className="after:absolute after:inset-0 after:content-['']">
                        {blog.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Author & Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full relative overflow-hidden bg-slate-100">
                        <Image
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-tight">{blog.author.name}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{blog.author.role}</p>
                      </div>
                    </div>

                    <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-red-50 text-slate-400 group-hover:text-red-600 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
        {filteredBlogs.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="px-6 py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white text-sm font-bold transition-colors"
            >
              Load more articles ({filteredBlogs.length - visibleCount} more)
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Subscription Box */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f1d4a] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
                Weekly Pedagogical Digest
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-3">
                Stay Ahead in Modern Education & Child Nurturing
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                Join over 2,500+ parents and educators receiving our hand-crafted articles on cognitive learning habits, school updates, and admission schedules directly in their inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-5 py-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-sm font-semibold">
                    Thank you for subscribing! We have sent a welcome note to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-white/20 focus:border-yellow-400 focus:outline-none text-sm backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-red-600/30 whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
