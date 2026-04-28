"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Zap, Clock, Info, ChevronRight, Globe } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"

export default function EventDetailPage() {
  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* 1. HEADER / BREADCRUMB */}
      <header className="pt-32 lg:pt-40 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-4 group">
          <div className="h-10 w-10 border border-forest/10 rounded-sm flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-parchment transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-forest/40">Back to Home</span>
        </Link>
      </header>

      {/* 2. EVENT TITLE & HERO */}
      <section className="mt-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: editorialEasing }}
              className="space-y-4"
            >
              <p className="text-terracotta font-black uppercase tracking-[0.4em] text-sm">Official MYF Event</p>
              <h1 className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter text-forest uppercase">
                All Northeast <br /> Open 3x3
              </h1>
            </motion.div>
          </div>
          <div className="lg:col-span-4 pb-4">
             <div className="bg-forest p-8 rounded-sm text-parchment space-y-2 inline-block">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Total Prize Pool</p>
                <p className="text-5xl font-heading font-black line-clamp-none whitespace-nowrap">₹1,00,000</p>
             </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: editorialEasing }}
          className="mt-16 relative aspect-[21/9] rounded-sm overflow-hidden shadow-2xl group"
        >
          <Image 
            src="/images/actual-sp-4.jpg" 
            alt="Northeast Open 3x3 2026" 
            fill 
            className="object-cover transition-transform duration-[10s] group-hover:scale-110" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* 3. LOGISTICS GRID */}
      <section className="mt-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-forest/10 border border-forest/10 p-px rounded-sm overflow-hidden">
            <div className="bg-parchment p-12 space-y-4">
               <Calendar className="text-terracotta h-8 w-8" />
               <p className="text-xs font-black uppercase tracking-widest text-forest/40">Date</p>
               <p className="text-xl font-bold text-forest">May 14 - 16, 2026</p>
            </div>
            <div className="bg-parchment p-12 space-y-4">
               <MapPin className="text-terracotta h-8 w-8" />
               <p className="text-xs font-black uppercase tracking-widest text-forest/40">Location</p>
               <p className="text-xl font-bold text-forest">Kokrajhar Govt College Court</p>
            </div>
            <div className="bg-parchment p-12 space-y-4">
               <Trophy className="text-terracotta h-8 w-8" />
               <p className="text-xs font-black uppercase tracking-widest text-forest/40">Prize</p>
               <p className="text-xl font-bold text-forest">₹1 Lakh Grand Prize</p>
            </div>
            <div className="bg-parchment p-12 space-y-4">
               <Clock className="text-terracotta h-8 w-8" />
               <p className="text-xs font-black uppercase tracking-widest text-forest/40">Status</p>
               <p className="text-xl font-bold text-forest">Registration Open</p>
            </div>
         </div>
      </section>

      {/* 4. CONTENT & DETAILS */}
      <section className="mt-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            <div className="lg:col-span-7 space-y-12">
               <div className="space-y-6">
                  <h3 className="text-4xl font-heading font-black uppercase tracking-tight text-forest">The 4th Edition Returns</h3>
                  <p className="text-xl text-forest/70 leading-relaxed font-medium">
                    The Mijing Youth Foundation is proud to announce the 4th All Northeast Open 3x3 Basketball Tournament. This year, we are scaling our vision—inviting teams from across the eight northeastern states to compete on the courts of Kokrajhar. 
                  </p>
                  <p className="text-xl text-forest/70 leading-relaxed font-medium">
                    Our goal is to foster a culture of excellence and healthy competition. Beyond the scoreboard, this event serves as a platform for scouts, coaches, and sports enthusiasts to witness the rising talent of our region.
                  </p>
               </div>

               <div className="p-12 bg-forest/5 border border-forest/10 rounded-sm space-y-8">
                  <h4 className="text-sm font-black uppercase tracking-[0.4em] text-forest flex items-center gap-4">
                    <Info size={16} className="text-terracotta" />
                    Tournament Guidelines
                  </h4>
                  <ul className="space-y-6">
                    {[
                      "Format: FIBA Approved 3x3 Rules",
                      "Categories: Men's Open & Women's Open",
                      "Team Composition: 3 Players + 1 Substitute",
                      "Entry Fee: ₹2,000 per team",
                      "Deadline for Registration: May 5, 2026"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-forest/80 font-bold">
                        <Zap size={16} className="text-terracotta mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-12">
               <div className="bg-forest p-12 md:p-16 rounded-sm space-y-12 text-parchment sticky top-40">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-heading font-black uppercase leading-none">Ready to Compete?</h3>
                    <p className="text-parchment/60 font-medium">Limited slots available. Register your team to secure your place in the bracket.</p>
                  </div>

                  <div className="space-y-6">
                     <Link href="/contact?type=partner&subject=Registration for 3x3 Tournament">
                        <Button size="xl" className="w-full h-18 bg-parchment text-forest rounded-sm font-black uppercase tracking-[0.2em] hover:bg-terracotta hover:text-parchment transition-all">
                           Register Team
                        </Button>
                     </Link>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 border border-parchment/20 rounded-sm text-center">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Teams Registered</p>
                           <p className="text-3xl font-heading font-black">24/32</p>
                        </div>
                        <div className="p-6 border border-parchment/20 rounded-sm text-center">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Days Left</p>
                           <p className="text-3xl font-heading font-black">16</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-8 border-t border-parchment/10">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Official Partners</p>
                     <div className="flex flex-wrap gap-8 opacity-60 grayscale brightness-200">
                        <Users size={32} />
                        <Globe size={32} />
                        <Zap size={32} />
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* 5. HISTORICAL CONTEXT / CALLOUT */}
      <section className="mt-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
         <div className="relative p-16 md:p-24 bg-parchment-deep border border-forest/10 rounded-sm overflow-hidden">
            <div className="max-w-2xl space-y-8 relative z-10">
               <h3 className="text-3xl font-heading font-black uppercase tracking-tight text-forest">A Legacy of Sportsmanship</h3>
               <p className="text-lg text-forest/60 leading-relaxed font-medium">
                  Previous editions of the All Northeast Open have produced 12 state-level athletes and 4 scholarship recipients. At Mijing Youth Foundation, we don't just host games; we host futures.
               </p>
               <Link href="/impact/journey/champions-spirit" className="inline-flex items-center gap-4 text-terracotta font-black uppercase tracking-widest border-b-2 border-terracotta pb-2 hover:gap-6 transition-all">
                  Read Impact Journey <ArrowLeft className="rotate-180" size={18} />
               </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 h-full w-1/3 bg-forest/5 mix-blend-multiply flex items-center justify-center">
               <Zap size={120} className="text-forest/10" />
            </div>
         </div>
      </section>

      {/* 6. FOOT NAV */}
      <section className="mt-48 px-6 md:px-12 lg:px-16 border-t border-forest/10 pt-24">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <Link href="/" className="group flex items-center gap-6">
               <div className="h-16 w-16 border border-forest/10 rounded-sm flex items-center justify-center transition-all group-hover:bg-forest group-hover:text-parchment">
                  <ArrowLeft size={32} />
               </div>
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-forest/40 mb-1">Return</p>
                  <p className="text-2xl font-black uppercase tracking-tighter text-forest">Home Archive</p>
               </div>
            </Link>

            <div className="text-center md:text-right">
               <p className="text-[10px] font-black uppercase tracking-widest text-forest/40 mb-4 italic">Learn More</p>
               <Link href="/impact/journey/champions-spirit" className="text-4xl lg:text-5xl font-heading font-black uppercase text-forest hover:text-terracotta transition-colors flex items-center gap-4 md:justify-end">
                  Champion's Spirit
                  <ChevronRight size={40} className="hidden md:block" />
               </Link>
            </div>
         </div>
      </section>

    </main>
  )
}
