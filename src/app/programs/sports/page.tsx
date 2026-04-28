"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Trophy, 
  Dribbble, 
  ArrowRight, 
  Activity, 
  MapPin, 
  Users,
  Medal,
  Calendar,
  Sparkles
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-tertiary/20 selection:text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-end relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-tertiary font-black text-xs uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-0.5 bg-tertiary" />
              Cultural Vitality
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary break-words" 
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              YOUTH <span className="text-tertiary block mt-4 font-serif italic font-light tracking-normal lowercase opacity-80">and</span> <br/>
              ATHLETICS.
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
            <p className="text-xl text-primary/60 max-w-xl font-medium leading-relaxed italic border-l-4 border-tertiary/40 pl-8">
              Using sports as a profound mechanism for social integration, discipline, and physical resilience.
            </p>
            <div className="flex gap-4">
               <div className="h-3 w-3 bg-tertiary" />
               <div className="h-3 w-3 bg-primary/20" />
               <div className="h-3 w-3 bg-primary/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract Background Text */}
        <div className="absolute top-24 right-[-5%] text-[15vw] font-black text-primary opacity-[0.02] select-none uppercase leading-none pointer-events-none">
          SPORTS
        </div>
      </section>

      {/* 2. BASKETBALL SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-7 relative aspect-video grayscale hover:grayscale-0 transition-all duration-1000 group shadow-premium"
            >
              <Image 
                src="/images/actual-sp-3.jpg" 
                alt="Basketball Tournament" 
                fill 
                className="object-cover rounded-sm" 
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-surface-lowest pointer-events-none" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-tertiary text-on-tertiary p-6 lg:p-10 font-heading font-black text-2xl md:text-3xl uppercase leading-none group-hover:scale-105 transition-transform shadow-premium rounded-sm">
                COURT <br/> VISION.
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Initiative 01</span>
                <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                  Basketball <br/> <span className="text-primary/40 font-serif italic lowercase font-light tracking-tight">Circuit</span>
                </h2>
                <p className="text-lg text-primary/60 leading-relaxed font-medium">
                  Our flagship basketball tournaments bring together youth from across the region,
                  fostering teamwork, competitive excellence, and a spirit of unbreakable brotherhood.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-tertiary rounded-r-md">
                  <Dribbble className="h-8 w-8 text-tertiary" />
                  <h4 className="font-black uppercase text-xl text-primary">Tournaments</h4>
                  <p className="text-sm text-primary/60 font-medium">Regional 3v3 and 5v5 competitive leagues.</p>
                </div>
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-primary/20 rounded-r-md">
                  <Activity className="h-8 w-8 text-primary" />
                  <h4 className="font-black uppercase text-xl text-primary">Training</h4>
                  <p className="text-sm text-primary/60 font-medium">Elite coaching clinics focusing on fundamentals.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ATHLETIC MEETS SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Initiative 02</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                Athletics <br/> <span className="text-tertiary font-serif italic lowercase font-light tracking-tight">& field</span>
              </h2>
              <p className="text-lg text-primary/60 leading-relaxed font-medium">
                Structured track and field events designed to identify raw talent and provide 
                pathways to state and national level competitions.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Medal />, title: "Track Events", desc: "Sprints, relays, and long-distance running." },
                { icon: <Users />, title: "Team Sports", desc: "Volleyball, Kabaddi, and regional team games." },
                { icon: <MapPin />, title: " Rural Outreach", desc: "Taking infrastructure directly to village centers." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="h-16 w-16 bg-surface-low border border-primary/10 text-primary flex items-center justify-center shrink-0 rounded-sm group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h5 className="text-2xl font-black uppercase text-primary">{item.title}</h5>
                    <p className="text-primary/60 text-sm font-medium">{item.desc}</p>
                    <div className="h-[2px] w-0 group-hover:w-full bg-tertiary/50 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2 relative aspect-[4/5] order-1 lg:order-2 grayscale hover:grayscale-0 transition-all duration-1000 shadow-premium"
          >
            <Image 
              src="/images/actual-sp-1.jpg" 
              alt="Track and Field" 
              fill 
              className="object-cover rounded-sm" 
            />
            <div className="absolute inset-0 bg-primary/5 rounded-sm" />
            <div className="absolute top-0 left-0 p-8 lg:p-12 space-y-4">
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-tertiary">2,500+</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-bold bg-white/80 px-2 py-1 inline-block">Athletes Hosted Annually</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TOURNAMENT ARCHIVES */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-surface-low border-y border-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 max-w-2xl"
            >
              <div className="flex items-center gap-4 text-tertiary font-black text-xs uppercase tracking-[0.4em]">
                <span className="w-12 h-0.5 bg-tertiary" />
                Mission History
              </div>
              <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85] text-5xl md:text-7xl lg:text-8xl text-primary">
                Tournament <br/> <span className="text-tertiary font-serif italic lowercase font-light tracking-tight">Archives</span>
              </h2>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-primary/60 text-xl font-medium max-w-md border-l-4 border-tertiary/20 pl-8 leading-relaxed italic"
            >
              A documented history of competitive spirits and community milestones achieved through our sports initiatives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "3rd Open 3x3 League",
                date: "March 1, 2026",
                location: "CIT Kokrajhar",
                stats: "28 Teams | 112 Players",
                focus: "Competitive excellence & social integration",
                tag: "Recent"
              },
              {
                title: "Republic Day Special",
                date: "January 26, 2026",
                location: "CIT Kokrajhar",
                stats: "40 Teams | 160 Players",
                focus: "National spirit & gender inclusion (16 Women Teams)",
                tag: "2nd 3x3"
              },
              {
                title: "Goalpara Zone Open 5x5",
                date: "Nov – Dec 2025",
                location: "Damra, Goalpara",
                stats: "12 Teams | 114 Players",
                focus: "Grassroots development & rural outreach",
                tag: "5x5 Circuit"
              }
            ].map((report, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-background border border-primary/10 p-10 hover:border-tertiary transition-all duration-500 shadow-premium flex flex-col justify-between min-h-[450px]"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tertiary px-3 py-1 border border-tertiary/20 rounded-sm">{report.tag}</span>
                    <Trophy className="h-6 w-6 text-primary group-hover:text-tertiary transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none text-primary group-hover:text-tertiary transition-colors">
                      {report.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm font-black uppercase tracking-widest text-primary/40">{report.date}</p>
                      <p className="text-sm font-medium text-primary/60 italic">{report.location}</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-primary/5 space-y-6">
                    <div className="flex items-center gap-4">
                       <Users className="h-5 w-5 text-tertiary" />
                       <span className="text-sm font-black uppercase tracking-widest text-primary">{report.stats}</span>
                    </div>
                    <p className="text-sm text-primary/60 font-medium leading-relaxed">
                      {report.focus}
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 flex items-center justify-between">
                   <div className="h-12 w-12 border border-primary/10 flex items-center justify-center group-hover:bg-tertiary group-hover:border-tertiary group-hover:text-on-tertiary transition-all duration-500 rounded-sm">
                      <Activity className="h-5 w-5" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">Verified Report</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Abstract Deco */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-tertiary/[0.02] -skew-y-12 translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </section>

      {/* 5. VISUAL RECORD (PREVIEW) */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-tertiary font-black text-xs uppercase tracking-[0.4em]">
                <span className="w-12 h-0.5 bg-tertiary" />
                Visual Record
              </div>
              <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85] text-5xl md:text-7xl lg:text-8xl text-primary">
                The <br/> <span className="text-primary/40 font-serif italic lowercase font-light tracking-tight">Court</span> <br/> Captured.
              </h2>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:pt-24"
            >
              <Link href="/programs/sports/gallery">
                <Button size="xl" variant="outline" className="h-24 px-12 text-xl font-black uppercase tracking-widest border-2 border-primary hover:bg-primary hover:text-on-primary transition-all rounded-sm group">
                  See Full Gallery <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { src: "/images/actual-sp-1.jpg", span: "lg:col-span-2 lg:row-span-2" },
              { src: "/images/actual-sp-4.jpg", span: "lg:col-span-1" },
              { src: "/images/actual-sp-6.jpg", span: "lg:col-span-1" },
              { src: "/images/actual-sp-7.jpg", span: "lg:col-span-2" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative aspect-square grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-premium group ${img.span}`}
              >
                <Image 
                  src={img.src} 
                  alt="Sports Action" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EVENTS */}


      <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-48 bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12 relative z-10">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl text-on-primary">
                 FIELD <br/> READY.
               </h2>
               <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-on-primary/20 pl-8 text-on-primary/80">
                 Registrations for the upcoming Winter League are open. Gather your team and prepare for competition.
               </p>
               <Button size="xl" className="h-20 px-12 text-xl font-black uppercase tracking-widest bg-tertiary text-on-tertiary hover:bg-background hover:text-primary transition-all">
                  Register Team <ArrowRight className="ml-4 h-6 w-6" />
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
               {[
                 { icon: <Calendar />, title: "Next Event", val: "Nov 20, 2025" },
                 { icon: <Trophy />, title: "Tournament", val: "Kokrajhar Cup" },
                 { icon: <MapPin />, title: "Venue", val: "SAI Complex" }
               ].map((item, i) => (
                 <div key={i} className="bg-on-primary/5 backdrop-blur-md p-10 flex justify-between items-center border border-on-primary/10 group hover:bg-background hover:text-primary transition-all duration-300 rounded-sm">
                    <div className="flex items-center gap-6">
                       <span className="text-tertiary group-hover:text-tertiary">{item.icon}</span>
                       <span className="font-black uppercase text-sm tracking-widest">{item.title}</span>
                    </div>
                    <span className="text-2xl font-heading font-black italic">{item.val}</span>
                 </div>
               ))}
            </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-on-primary/10 bg-on-primary opacity-[0.02] -skew-x-12" />
      </section>

    </main>
  )
}
