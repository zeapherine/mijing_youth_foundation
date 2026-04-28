"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const categories = [
  "All",
  "3x3 Tournaments",
  "5x5 Open League",
  "Training & Community"
]

const galleryItems = [
  { id: 1, src: "/images/actual-sp-1.jpg", category: "Training & Community", title: "Drills at SAI Complex" },
  { id: 2, src: "/images/actual-sp-2.jpg", category: "3x3 Tournaments", title: "CIT Kokrajhar Finals" },
  { id: 3, src: "/images/actual-sp-3.jpg", category: "5x5 Open League", title: "Damra Circuit Focus" },
  { id: 4, src: "/images/actual-sp-4.jpg", category: "3x3 Tournaments", title: "Republic Day Action" },
  { id: 5, src: "/images/actual-sp-5.jpg", category: "5x5 Open League", title: "Goalpara Semi-Finals" },
  { id: 6, src: "/images/actual-sp-6.jpg", category: "3x3 Tournaments", title: "High-Intensity Play" },
  { id: 7, src: "/images/actual-sp-7.jpg", category: "Training & Community", title: "Grassroots Outreach" },
  { id: 8, src: "/images/actual-sp-8.jpg", category: "Training & Community", title: "Community Field Meet" },
]

export default function SportsGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null)

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-background text-foreground py-32 md:py-48 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-12"
        >
          <Link href="/programs/sports" className="inline-flex items-center gap-2 text-tertiary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Sports
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-black tracking-tighter leading-[0.8] text-primary"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
            >
              VISUAL <br/> 
              <span className="text-tertiary font-serif italic lowercase font-light tracking-tight opacity-80">archives.</span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 pb-4">
             <p className="text-xl text-primary/60 font-medium italic border-l-4 border-tertiary/20 pl-8 max-w-sm">
                Capturing the sweat, the spirit, and the community of our basketball circuits.
             </p>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="max-w-7xl mx-auto mb-16 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 font-black uppercase text-sm tracking-widest transition-all rounded-sm border-2 ${
                activeCategory === cat 
                  ? "bg-primary text-on-primary border-primary" 
                  : "bg-surface-low text-primary border-transparent hover:border-tertiary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] bg-surface-low border border-primary/5 cursor-pointer overflow-hidden shadow-premium hover:border-tertiary/50"
                onClick={() => setSelectedImage(item)}
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tertiary">{item.category}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-on-primary mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-6 md:p-12 lg:p-24 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-on-primary hover:rotate-90 transition-transform p-4 border border-on-primary/20 rounded-full">
              <X className="h-8 w-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full h-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                fill 
                className="object-contain"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                 <span className="text-tertiary font-black uppercase text-xs tracking-widest">{selectedImage.category}</span>
                 <h2 className="text-3xl font-heading font-black tracking-tight text-on-primary uppercase mt-2">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-0 right-0 w-1/4 h-full bg-tertiary/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none -z-10" />
      <div className="fixed bottom-24 left-0 text-[10vw] font-black text-primary/[0.03] rotate-90 origin-left pointer-events-none -z-10 uppercase select-none">
        Mijing Sports
      </div>
    </main>
  )
}
