import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  MessageCircle,
  BookOpen,
  ArrowRight,
  Clock,
  User,
  Tag
} from 'lucide-react';

// Mascot imports matching OurWork.jsx layout
import mascotDesign from '/mascot-design.png';
import mascotSeo from '/mascot-seo.png';
import mascotContact from '/mascot-contact.png';

export default function Blog() {
  const whatsappNumber = "917877145565";
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  // Keyboard navigation & body scroll-lock management
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };

    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const categories = [
    'All',
    'Branding',
    'Social Media',
    'Design Trends',
    'Marketing'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Modern Bento-Grid Brand Showcase: Why Flat Portfolios Are Dead",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      author: "Kalavora Team",
      date: "May 2026",
      excerpt: "How modern digital agencies and tech brands use Bento-Grid design layouts to showcase brand identities and visual assets effectively.",
      content: `
        Flat, linear portfolios no longer hold viewer attention. The modern standard for visual presentation is the Bento Grid—a modular, visually segmented layout system that balances typography, 3D assets, and color palettes without visual clutter.

        ### Why Bento Grids Work
        * **High Information Density:** Showcase logos, color swatches, and mockups in a single, scannable view.
        * **Visual Hierarchy:** Direct viewer focus to key project deliverables instantly.
        * **Mobile Adaptability:** Modular blocks stack cleanly on smaller screens while retaining high aesthetic appeal.

        Implementing a Bento Grid structure across your visual identity projects immediately signals premium craftsmanship and modern brand standards.
      `,
      tags: ["BentoGrid", "Branding", "UI/UX"]
    },
    {
      id: 2,
      title: "Motion Graphics vs. Static Posts: What Drives Instagram Conversions?",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      author: "Kalavora Team",
      date: "May 2026",
      excerpt: "Analyzing engagement metrics between static graphic design assets vs. 3D motion/reel content for local and digital businesses.",
      content: `
        The Instagram feed algorithm heavily favors motion content, but static posts still carry high value for authoritative brand messages.

        ### Key Comparison
        * **Motion & Reels:** Best for capturing raw top-of-funnel reach. The first 3 seconds are critical for hooking scrolling users.
        * **Static Carousels:** Highest save and share rates for instructional or detailed brand guidelines.

        A high-performing strategy balances high-production 3D motion reels with sleek, highly legible static carousel graphics.
      `,
      tags: ["Reels", "Instagram", "MotionGraphics"]
    },
    {
      id: 3,
      title: "Building an Air-Tight Visual Identity: Beyond Just a Logo System",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      author: "Kalavora Team",
      date: "Apr 2026",
      excerpt: "Why a logo is only 10% of a brand identity, and how full guidelines, print layouts, and digital templates build long-term trust.",
      content: `
        A strong logo fails if paired with inconsistent typography, mismatched color palettes, or poor print collateral execution.

        ### Essential Brand Guidelines Components
        * **Primary & Secondary Color Systems:** Scalable palettes built for print (CMYK) and digital displays (RGB/HEX).
        * **Typography Pairings:** Consistent font pairings across web, mobile, and physical print mediums.
        * **Usage Rules:** Clear rules on spacing, backgrounds, and scaled variations to maintain clarity.
      `,
      tags: ["Brand Identity", "Design System", "Typography"]
    },
    {
      id: 4,
      title: "Print collateral in a Digital World: Elevating physical Brand Assets",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      author: "Kalavora Team",
      date: "Apr 2026",
      excerpt: "Combining high-end print typography with digital cards and interactive event invitations for luxury client experiences.",
      content: `
        Physical print materials carry weight in an increasingly digital space. Custom visiting cards, magazines, and event invites establish tangibility.

        Combining physical print with interactive digital RSVP components gives brands a modern edge while retaining luxury prestige.
      `,
      tags: ["Print", "Editorial", "Luxury"]
    },
    {
      id: 5,
      title: "Optimizing Ad Creatives for High Lead Conversions",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      author: "Kalavora Team",
      date: "Mar 2026",
      excerpt: "Designing graphic ads and promotional videos engineered to stop the scroll and lower customer acquisition costs.",
      content: `
        Ad design requires direct visual emphasis. High-converting creative assets focus on immediate contrast, key value props, and clear calls to action.
      `,
      tags: ["Ads", "Conversions", "Creative Strategy"]
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  const handleWhatsAppConsultation = (topic) => {
    const text = `Hi Kalavora Team! I read your article on "${topic}" and want to discuss custom branding/marketing strategy for my business.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="bg-[#000000] text-[#FFFFFF] py-20 px-6 relative w-full min-h-screen font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6B21AB]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Standardized Header with Mascot #1 */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left pt-2">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> INSIGHTS & ARTICLES
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-[#FFFFFF]">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">Thoughts</span> & Guides
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl font-light">
              In-depth articles on brand identity design, high-converting social media creative strategies, and digital visual identity.
            </p>
          </div>

          {/* Standardized Mascot Container */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-[#FC5BDA]/30 rounded-full blur-3xl pointer-events-none"></div>
              <img 
                src={mascotDesign} 
                alt="Kalavora Creative Mascot" 
                className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(252,91,218,0.7)] relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#FC5BDA] text-[#000000] shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105'
                  : 'bg-[#000000]/80 text-gray-300 border border-[#FC5BDA]/30 hover:border-[#FFD700] hover:text-[#FFFFFF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid (First 3 Posts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 3).map((post) => (
            <div 
              key={post.id}
              className="rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] backdrop-blur-md flex flex-col justify-between"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                />
                
                <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 text-[#FFD700]">
                  {post.category}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-3 text-[10px] text-gray-300 bg-black/60 px-3 py-1 rounded-lg border border-white/10 backdrop-blur-sm">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#FFD700]" /> {post.readTime}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3 text-[#FC5BDA]" /> {post.author}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#FFD700] transition-colors font-serif mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-xs font-bold text-[#FFFFFF] hover:text-[#FFD700] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#FFD700]" />
                  Read Full Article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mascot Spotlight Banner #2 */}
        <div className="rounded-3xl border border-[#FC5BDA]/50 bg-gradient-to-r from-[#6B21AB]/30 via-black to-[#FC5BDA]/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(252,91,218,0.2)]">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/40 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Creative Strategy Insights
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              Need Tailored Brand Identity Guidance for Your Business?
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
              We help brands design high-impact logo systems, social media assets, and marketing guidelines engineered to scale.
            </p>
          </div>

          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <img 
              src={mascotSeo} 
              alt="Quality Design Mascot" 
              className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] relative z-10 hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Blog Posts Grid (Remaining Posts) */}
        {filteredPosts.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(3).map((post) => (
              <div 
                key={post.id}
                className="rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] backdrop-blur-md flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                  />
                  
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 text-[#FFD700]">
                    {post.category}
                  </span>

                  <div className="absolute bottom-3 left-3 flex items-center gap-3 text-[10px] text-gray-300 bg-black/60 px-3 py-1 rounded-lg border border-white/10 backdrop-blur-sm">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#FFD700]" /> {post.readTime}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3 text-[#FC5BDA]" /> {post.author}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#FFD700] transition-colors font-serif mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-light leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-xs font-bold text-[#FFFFFF] hover:text-[#FFD700] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#FFD700]" />
                    Read Full Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner with Mascot #3 */}
        <div className="rounded-3xl bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-[0_0_50px_rgba(107,33,171,0.3)]">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-white">
              Have Questions About Your Brand Strategy?
            </h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-lg font-light">
              Connect directly with our agency team on WhatsApp to discuss your next marketing or visual branding package.
            </p>
            <button
              onClick={() => handleWhatsAppConsultation("Brand Strategy & Visual Guidelines")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd53] transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Start Discussion on WhatsApp
            </button>
          </div>

          <img 
            src={mascotContact} 
            alt="Support Penguin Mascot" 
            className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(252,91,218,0.5)] shrink-0"
          />
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div 
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#111111] border border-[#FC5BDA]/50 rounded-3xl overflow-hidden p-6 md:p-8 space-y-6 shadow-[0_0_40px_rgba(252,91,218,0.3)] my-8 max-h-[90vh] overflow-y-auto"
          >
            
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700] uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF] font-serif pt-2">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full aspect-video object-cover rounded-2xl border border-white/10" 
            />

            <div className="text-gray-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-light">
              {selectedPost.content}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const title = selectedPost.title;
                  setSelectedPost(null);
                  handleWhatsAppConsultation(title);
                }}
                className="py-2.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1ebd53] transition-colors shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}