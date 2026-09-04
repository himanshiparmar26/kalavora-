import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  MessageCircle,
  BookOpen,
  Clock,
  User,
  ArrowUpRight
} from 'lucide-react';

import mascotDesign from '/mascot-design.png';
import mascotContact from '/mascot-contact.png';

export default function Blog() {
  const whatsappNumber = "917877145565";
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

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
      content: [
        { type: 'paragraph', text: 'Flat, linear portfolios no longer hold viewer attention. The modern standard for visual presentation is the Bento Grid—a modular, visually segmented layout system that balances typography, 3D assets, and color palettes without visual clutter.' },
        { type: 'heading', text: 'Why Bento Grids Work' },
        { type: 'list', items: [
          'High Information Density: Showcase logos, color swatches, and mockups in a single, scannable view.',
          'Visual Hierarchy: Direct viewer focus to key project deliverables instantly.',
          'Mobile Adaptability: Modular blocks stack cleanly on smaller screens while retaining high aesthetic appeal.'
        ]},
        { type: 'paragraph', text: 'Implementing a Bento Grid structure across your visual identity projects immediately signals premium craftsmanship and modern brand standards.' }
      ],
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
      content: [
        { type: 'paragraph', text: 'The Instagram feed algorithm heavily favors motion content, but static posts still carry high value for authoritative brand messages.' },
        { type: 'heading', text: 'Key Comparison' },
        { type: 'list', items: [
          'Motion & Reels: Best for capturing raw top-of-funnel reach. The first 3 seconds are critical for hooking scrolling users.',
          'Static Carousels: Highest save and share rates for instructional or detailed brand guidelines.'
        ]},
        { type: 'paragraph', text: 'A high-performing strategy balances high-production 3D motion reels with sleek, highly legible static carousel graphics.' }
      ],
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
      content: [
        { type: 'paragraph', text: 'A strong logo fails if paired with inconsistent typography, mismatched color palettes, or poor print collateral execution.' },
        { type: 'heading', text: 'Essential Brand Guidelines Components' },
        { type: 'list', items: [
          'Primary & Secondary Color Systems: Scalable palettes built for print (CMYK) and digital displays (RGB/HEX).',
          'Typography Pairings: Consistent font pairings across web, mobile, and physical print mediums.',
          'Usage Rules: Clear rules on spacing, backgrounds, and scaled variations to maintain clarity.'
        ]}
      ],
      tags: ["Brand Identity", "Design System", "Typography"]
    },
    {
      id: 4,
      title: "Print Collateral in a Digital World: Elevating Physical Brand Assets",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      author: "Kalavora Team",
      date: "Apr 2026",
      excerpt: "Combining high-end print typography with digital cards and interactive event invitations for luxury client experiences.",
      content: [
        { type: 'paragraph', text: 'Physical print materials carry weight in an increasingly digital space. Custom visiting cards, magazines, and event invites establish tangibility.' },
        { type: 'paragraph', text: 'Combining physical print with interactive digital RSVP components gives brands a modern edge while retaining luxury prestige.' }
      ],
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
      content: [
        { type: 'paragraph', text: 'Ad design requires direct visual emphasis. High-converting creative assets focus on immediate contrast, key value props, and clear calls to action.' }
      ],
      tags: ["Ads", "Conversions", "Creative Strategy"]
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (topic) => {
    const text = `Hi Kalavora Team! I read your article on "${topic}" and want to discuss custom branding/marketing strategy for my business.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="blog" 
      className="py-20 px-6 relative w-full min-h-screen font-sans bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="relative text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Insights & Articles
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Latest <span className="text-purple-600 dark:text-purple-400 italic font-normal">Thoughts & Guides</span>
          </h2>

          <p className="text-sm md:text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400">
            In-depth perspectives on visual design, strategic branding, and high-performance digital marketing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-500 hover:text-purple-600 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Article Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Featured Article */}
            <div className="lg:col-span-8 p-4 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-4 bg-gray-100 dark:bg-neutral-900">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-xl bg-purple-600 text-white shadow-sm">
                    {filteredPosts[0].category}
                  </span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white backdrop-blur-sm shadow-sm font-medium">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-pink-500" /> {filteredPosts[0].readTime}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-purple-500" /> {filteredPosts[0].author}</span>
                  </div>
                </div>

                <div className="px-2 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {filteredPosts[0].tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-2 pt-6">
                <button
                  onClick={() => setSelectedPost(filteredPosts[0])}
                  className="py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer w-full sm:w-auto shadow-sm"
                >
                  <BookOpen className="w-4 h-4" /> Read Article
                </button>
              </div>
            </div>

            {/* Side Branding Card */}
            <div className="lg:col-span-4 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] flex flex-col justify-between group shadow-sm">
              <div className="space-y-4">
                <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-purple-500/10 rounded-full inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Insight
                </span>
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  Transforming Brand Strategy into Visual Assets
                </h3>
                <p className="text-xs md:text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                  Discover how our agency approaches design systems, logo guidelines, and marketing creative performance.
                </p>
              </div>

              <div className="my-6 flex justify-center">
                <img 
                  src={mascotDesign} 
                  alt="Kalavora Creative Mascot" 
                  className="w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <a
                href={getWhatsAppLink("Creative Brand Strategy")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white hover:border-green-500 hover:text-green-500 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Consult on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              </a>
            </div>

          </div>
        ) : (
          <div className="text-center py-12 font-medium text-purple-600">
            No articles found in this category.
          </div>
        )}

        {/* Other Posts Grid */}
        {filteredPosts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div 
                key={post.id}
                className="p-4 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-4 bg-gray-100 dark:bg-neutral-900">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-xl bg-purple-600 text-white">
                      {post.category}
                    </span>

                    <div className="absolute bottom-3 left-3 flex items-center gap-3 text-[10px] px-3 py-1 rounded-lg border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white backdrop-blur-sm shadow-sm font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-pink-500" /> {post.readTime}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3 text-purple-500" /> {post.author}</span>
                    </div>
                  </div>

                  <div className="px-2 space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs font-medium leading-relaxed mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-md font-bold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-2 pt-4">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-purple-500 text-gray-900 dark:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    Read Full Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-500/10 rounded-full inline-block">
              Let's Connect
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Have Questions About Your Brand Strategy?
            </h2>
            <p className="text-xs md:text-sm max-w-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400">
              Connect directly with our agency team on WhatsApp to discuss custom branding, visual guidelines, or marketing execution.
            </p>
            <a
              href={getWhatsAppLink("Brand Strategy & Visual Guidelines")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-green-600 transition-all cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" /> Start Discussion on WhatsApp
            </a>
          </div>

          <div className="shrink-0">
            <img 
              src={mascotContact} 
              alt="Support Mascot" 
              className="w-36 md:w-48 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedPost && (
        <div 
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden p-6 md:p-8 space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121212] text-gray-900 dark:text-white"
          >
            <button 
              onClick={() => setSelectedPost(null)}
              aria-label="Close article modal"
              className="absolute top-4 right-4 p-2 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5 text-purple-500" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold pt-2 leading-snug text-gray-900 dark:text-white">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
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
              className="w-full aspect-video object-cover rounded-2xl border border-black/10" 
            />

            {/* Content Renderer */}
            <div className="text-sm leading-relaxed space-y-4 font-medium text-gray-700 dark:text-gray-300">
              {Array.isArray(selectedPost.content) ? (
                selectedPost.content.map((block, index) => {
                  if (block.type === 'heading') {
                    return <h4 key={index} className="text-base font-bold pt-2 text-gray-900 dark:text-white">{block.text}</h4>;
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-1.5">
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index}>{block.text}</p>;
                })
              ) : (
                <p>{selectedPost.content}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md font-bold">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={getWhatsAppLink(selectedPost.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-green-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shrink-0 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}