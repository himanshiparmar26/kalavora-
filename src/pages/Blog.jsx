import React, { useState } from 'react';
import { Sparkles, Calendar, User, ArrowRight, Tag, Search, X, Clock, Eye } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'BRANDING', 'GROWTH', 'TECH'];

  const blogs = [
    {
      id: 1,
      category: 'BRANDING',
      title: 'Building a Strong Neon Visual Identity',
      date: 'August 2026',
      author: 'Kalavora Team',
      readTime: '5 min read',
      excerpt: 'How dark mode, 3D assets, and neon glow accents create an instantly recognizable and futuristic brand presence.',
      featuredImage: '/mascot.png', // Aapki 3D mascot/logo image
      fullContent: `
        <p class="mb-4">In today's crowded digital landscape, generic flat designs get ignored. A futuristic 3D visual identity paired with high-contrast neon accents creates an immersive brand world that grabs immediate attention.</p>
        
        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">1. The Psychology of Cyber Neon Colors</h3>
        <p class="mb-4">Bright magenta (#FC5BDA), electric purple (#6B21AB), and cyberpunk gold (#FFD700) set against a pitch-black (#000000) canvas evoke innovation, luxury, and high-tech authority. These high-contrast colors naturally draw the eye directly to your Call-To-Action buttons and headlines.</p>
        
        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">2. 3D Elements & Visual Depth</h3>
        <p class="mb-4">Integrating 3D mascots, dynamic floating geometry, and glassmorphism (frosted glass blur effects) creates depth. It elevates your agency from a standard service provider to an elite digital studio.</p>

        <blockquote class="border-l-4 border-[#FC5BDA] pl-4 italic text-gray-300 my-4 bg-[#6B21AB]/20 p-3 rounded-r-xl">
          "A brand's visual identity isn't just about looking good—it's about staying unforgettable in the first 3 seconds of a visitor's landing."
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">3. Consistency Across Platforms</h3>
        <p>Whether it's your Instagram feed, Meta ad creatives, or website UI—maintaining a unified neon visual system creates instant brand recall across every client touchpoint.</p>
      `
    },
    {
      id: 2,
      category: 'GROWTH',
      title: 'Digital Marketing Trends for 2026',
      date: 'August 2026',
      author: 'Marketing Lead',
      readTime: '7 min read',
      excerpt: 'The key strategies driving organic reach, hyper-local SEO funnels, and performance scaling in modern digital channels.',
      featuredImage: '/mascot.png',
      fullContent: `
        <p class="mb-4">Digital marketing in 2026 demands hyper-personalization, video-first content funnels, and technical SEO architecture engineered for fast execution.</p>

        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">1. Hyper-Local SEO & Geo-Targeting</h3>
        <p class="mb-4">Businesses are scaling by dominating regional search intent. Combining Google My Business optimization with localized landing pages creates high-intent inbound lead pipelines that convert 3x faster than broad audience ads.</p>

        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">2. Short-Form Video & Motion Creatives</h3>
        <p class="mb-4">Static ads are giving way to short-form motion graphics and reel campaigns. Dynamic video creative combined with direct WhatsApp/Funnel CTA buttons is driving the highest campaign ROIs in performance marketing.</p>
      `
    },
    {
      id: 3,
      category: 'TECH',
      title: 'Why High Performance Websites Matter',
      date: 'July 2026',
      author: 'Dev Team',
      readTime: '4 min read',
      excerpt: 'How speed, clean React architecture, and glowing UI interactive components directly improve your conversion ROI.',
      featuredImage: '/mascot.png',
      fullContent: `
        <p class="mb-4">A slow site destroys your ad spend. Every millisecond of load delay causes bounce rates to spike and conversion rates to plummet.</p>

        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">1. Lightning Fast React Architecture</h3>
        <p class="mb-4">Building with modern lightweight frameworks ensures instant page transitions, seamless video playback, and smooth 3D animations without compromising speed.</p>

        <h3 class="text-xl font-serif font-bold text-[#FFD700] my-3">2. Converting UI/UX Design</h3>
        <p>A aesthetic dark mode layout with clear glowing CTA buttons guides user behavior naturally toward booking a call or requesting an audit.</p>
      `
    }
  ];

  // Filter Logic
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'ALL' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen pt-28 pb-24 relative overflow-hidden font-sans">
      
      {/* 3D Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#6B21AB]/30 via-[#FC5BDA]/20 to-[#FFD700]/10 blur-[180px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#6B21AB]/25 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> OUR JOURNAL
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
            Latest <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFD700] to-[#FC5BDA]">Insights</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm font-light">
            Tips, industry guides, and futuristic marketing strategies from the Kalavora team.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-[#000000]/80 border border-[#6B21AB]/50 backdrop-blur-md shadow-[0_0_30px_rgba(107,33,171,0.2)]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FC5BDA] to-[#6B21AB] text-[#FFFFFF] shadow-[0_0_15px_rgba(252,91,218,0.5)] border border-[#FFD700]/50'
                    : 'bg-[#000000] border border-[#6B21AB]/40 text-gray-400 hover:text-[#FFFFFF] hover:border-[#FC5BDA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#000000] border border-[#6B21AB]/60 rounded-xl pl-10 pr-4 py-2 text-xs text-[#FFFFFF] placeholder-gray-500 focus:outline-none focus:border-[#FC5BDA] focus:shadow-[0_0_15px_rgba(252,91,218,0.3)] transition-all"
            />
          </div>

        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article 
              key={post.id}
              className="p-6 rounded-3xl border border-[#6B21AB]/50 bg-gradient-to-b from-[#000000] via-[#000000] to-[#6B21AB]/15 hover:border-[#FC5BDA] transition-all duration-300 space-y-6 relative group flex flex-col justify-between hover:shadow-[0_0_35px_rgba(252,91,218,0.25)] hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1 text-[#FFD700]">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300">
                    <User className="w-3.5 h-3.5 text-[#FC5BDA]" /> {post.author}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold font-serif text-[#FFFFFF] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FC5BDA] group-hover:to-[#FFD700] transition-all leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#6B21AB]/40 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FC5BDA] group-hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border border-[#6B21AB] bg-[#000000] text-[#FFD700]">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detailed Full Blog Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#000000] border-2 border-[#FC5BDA] rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(252,91,218,0.4)] space-y-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#000000] border border-[#FFD700] text-[#FFD700] hover:scale-110 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 border-b border-[#6B21AB]/60 pb-6">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#FC5BDA]/20 border border-[#FC5BDA] text-[#FC5BDA] font-bold">
                  {selectedPost.category}
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFD700]" /> {selectedPost.readTime}
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FFD700]" /> {selectedPost.date}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-serif font-extrabold text-[#FFFFFF]">
                {selectedPost.title}
              </h1>

              <div className="text-xs text-gray-400 font-medium">
                Written by <span className="text-[#FFD700] font-bold">{selectedPost.author}</span>
              </div>
            </div>

            {/* Full Blog Content */}
            <div 
              className="text-gray-200 text-xs md:text-sm leading-relaxed font-light space-y-4"
              dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
            />

            {/* Modal Footer CTA */}
            <div className="pt-6 border-t border-[#6B21AB]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">
                Want to implement this strategy for your business?
              </span>
              <button 
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FC5BDA] via-[#6B21AB] to-[#FFD700] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(252,91,218,0.5)] cursor-pointer"
              >
                Get Free Audit Report
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}