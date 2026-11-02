
import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

export default function OurWork() {
  const myProjects = [
    {
      id: 1,
      title: "Starbucks Launch Banner",
      category: "Social Media Ad",
      image: "/image/starbucks-post.jpg",
      description: "Opening Soon social media banner design with premium visual aesthetic.",
      tags: ["Poster", "Branding", "Social Media"],
      link: "#"
    },
    {
      id: 2,
      title: "Nike Fly Promotion",
      category: "Social Media Ad",
      image: "/image/nike-post.jpg",
      description: "Dynamic product poster and social media creative for footwear brand.",
      tags: ["Product Ad", "Typography", "Footwear"],
      link: "#"
    },
    {
      id: 3,
      title: "Beverage Iced Menu Design",
      category: "Graphic Design",
      image: "/image/iced-menu.jpg",
      description: "Modern food & beverage vertical menu layout with rich color contrast.",
      tags: ["Menu Design", "Print", "Layout"],
      link: "#"
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      image: "/image/agency-post-.jpg",
      description: "High-converting social media promotional template for business growth.",
      tags: ["Marketing", "Lead Gen", "Banner"],
      link: "#"
    },
    {
      id: 5,
      title: "Creative Agency Showcase",
      category: "Graphic Design",
      image: "/image/agency-post-2.jpg",
      description: "Professional corporate services promotional creative for agency branding.",
      tags: ["Agency", "Corporate", "Visuals"],
      link: "#"
    },
    {
      id: 6,
      title: "Corporate Recruitment Poster",
      category: "Brand Identity",
      image: "/image/hiring-post.jpg",
      description: "Clean and authoritative 'We Are Hiring' template design for corporate recruitment.",
      tags: ["Hiring", "Corporate", "Social Post"],
      link: "#"
    },
    {
      id: 7,
      title: "Visual Agency Services",
      category: "Graphic Design",
      image: "/image/agency-post-3.jpg",
      description: "Modern visual layout showcasing full-suite creative marketing capabilities.",
      tags: ["Marketing", "Services", "Branding"],
      link: "#"
    }
  ];

  const categories = ["All", "Graphic Design", "Social Media Ad", "Digital Marketing", "Brand Identity"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? myProjects
    : myProjects.filter(p => p.category === selectedCategory);

  return (
    <section className="bg-white dark:bg-[#000000] text-gray-900 dark:text-white py-20 px-6 min-h-screen relative overflow-hidden font-sans transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6B21AB]/10 dark:bg-[#6B21AB]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-[#6B21AB]/20 border border-purple-200 dark:border-[#6B21AB]/40 text-purple-700 dark:text-purple-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#6B21AB]" />
            <span>Showcase Portfolio</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-[#6B21AB] dark:from-white dark:via-purple-300 dark:to-[#6B21AB]">Works</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Explore our curated projects, visual brand identities, and high-impact digital designs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#6B21AB] text-white shadow-lg shadow-[#6B21AB]/30"
                  : "bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#6B21AB] dark:hover:text-white hover:border-[#6B21AB]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-[#6B21AB]/60 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container with Full Image Fit (No Crop) */}
              <div className="relative w-full aspect-square bg-gray-100 dark:bg-black/60 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 text-[10px] uppercase font-bold px-3 py-1 rounded-full z-10">
                  {project.category}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="p-2 rounded-xl bg-[#6B21AB]/10 dark:bg-[#6B21AB]/20 border border-[#6B21AB]/40 text-purple-700 dark:text-purple-300 hover:bg-[#6B21AB] hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
