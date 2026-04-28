"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Laptop, Trophy, Heart, TreePine, Palette, Megaphone, Users, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"
import Link from "next/link"

const heroImages = [
  "/images/gallery/republic-1.png",
  "/images/gallery/ne-open-1.png",
  "/images/afforestation_kokrajhar_1777399093856.png",
  "/images/mobile_health_clinic_kokrajhar_1777399018964.png",
  "/images/gallery/youth-league-1.png",
  "/images/gallery/republic-3.png"
];

const sectors = [
  { 
    id: 'sports', 
    label: 'Athletics & Fraternity', 
    icon: Trophy, 
    description: '150+ active local leaders',
    pos: 'top-32 right-12',
    delay: 0.2
  },
  { 
    id: 'skills', 
    label: 'Vocational Labs', 
    icon: Laptop, 
    description: '92% placement rate',
    pos: 'top-1/2 left-[-8%] -translate-y-1/2',
    delay: 0.4
  },
  { 
    id: 'ecology', 
    label: 'Ecological Stewardship', 
    icon: TreePine, 
    description: '45k+ trees planted',
    pos: 'top-1/2 right-[-8%] -translate-y-1/2',
    delay: 0.6
  },
  { 
    id: 'health', 
    label: 'Health & Relief', 
    icon: Heart, 
    description: '1.2k lives impacted',
    pos: 'bottom-32 right-12',
    delay: 0.8
  }
];

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

import { FeaturedEvent } from "@/components/impact/FeaturedEvent"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 3s hold + 2s transition
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">

      {/* Hero Section: The Human Connection */}
      {/* 1. HERO SECTION - Split Editorial Layout */}
      <section className="pt-24 lg:pt-0 lg:min-h-screen flex items-center overflow-hidden border-b border-foreground/5 bg-background relative">
        {/* ... existing hero code ... */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 lg:pl-0">
          
          {/* Narrative Column */}
          <motion.div 
            className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 xl:py-32 flex flex-col justify-center space-y-12 z-20 lg:border-r border-primary/10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* ... */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-4 px-4 py-2 border border-primary/10 rounded-sm bg-surface-low/50">
               <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Founded on Purpose. Driven by Youth.</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary xl:text-[6rem] lg:text-[5rem] text-[3.5rem] sm:text-[4rem]" 
            >
              Investing in <br />
              <span className="italic serif opacity-80 text-tertiary">mijing</span> <br />
              Since 2024.
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="space-y-12">
               <p className="text-body-lg text-primary/60 max-w-lg font-medium leading-relaxed border-l-2 border-tertiary/20 pl-8 italic">
                 Headquartered in Kokrajhar, Assam, the Mijing Youth Foundation is an institutional force dedicated to the holistic empowerment of young minds across the region. We tackle systemic challenges directly at the grassroots—bridging the gap between untapped potential and socio-economic opportunity through deep investments in physical resilience, vocational skill development, ecological stewardship, and community health. We are building the leaders of tomorrow without discrimination of caste, creed, religion, or gender.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/get-involved">
                   <Button size="xl" className="h-16 px-10 text-lg font-black uppercase tracking-widest transition-all bg-primary text-on-primary hover:bg-tertiary hover:text-on-tertiary">
                     Get Involved
                   </Button>
                 </Link>
                 <Link href="/impact">
                   <Button size="xl" variant="outline" className="h-16 px-10 text-lg font-black uppercase tracking-widest transition-all border-primary/20 hover:bg-primary/5">
                     Our Impact
                   </Button>
                 </Link>
               </div>
            </motion.div>
          </motion.div>

          {/* Right: Immersive Imagery Slideshow (Above the fold) */}
          <motion.div 
            className="relative w-full h-[60vh] lg:h-screen lg:min-h-[800px] overflow-hidden group bg-surface-low"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: editorialEasing }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(40px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(40px)" }}
                transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 z-0"
              >
                <Image 
                  src={heroImages[currentImage]} 
                  alt="Mijing Youth Foundation Focus Areas" 
                  fill 
                  priority
                  className="object-cover lg:object-center grayscale hover:grayscale-0 transition-all duration-[2s]" 
                />
              </motion.div>
            </AnimatePresence>
            {/* Gradient blend for smooth text transition on smaller mobile screens */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 lg:hidden z-10 pointer-events-none" />
            
            {/* Floating Sector Cards */}
            <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block">
              {sectors.map((sector) => (
                <motion.div
                  key={sector.id}
                  className={`absolute ${sector.pos} pointer-events-auto`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: sector.delay, 
                    ease: editorialEasing 
                  }}
                >
                  <motion.div
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="bg-surface-lowest/60 backdrop-blur-xl p-6 rounded-sm border border-primary/5 shadow-premium max-w-[220px] group transition-all hover:bg-surface-lowest/80"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/5 rounded-sm text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                        <sector.icon size={20} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 leading-none">Our Focus</p>
                        <p className="text-sm font-black text-primary leading-tight">{sector.label}</p>
                        <p className="text-[10px] font-bold italic text-tertiary">{sector.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Sector Pills (Horizontal Scroll) */}
            <div className="absolute bottom-32 left-0 right-0 z-30 lg:hidden px-6 overflow-x-auto no-scrollbar">
              <div className="flex gap-3 pb-4">
                {sectors.map((sector) => (
                  <motion.div
                    key={sector.id}
                    className="flex-shrink-0 bg-surface-lowest/80 backdrop-blur-md px-4 py-3 rounded-full border border-primary/5 shadow-lg flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sector.delay }}
                  >
                    <sector.icon size={14} className="text-tertiary" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary whitespace-nowrap">{sector.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Impact Metric */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto bg-surface-lowest/90 backdrop-blur-md p-8 rounded-sm max-w-[280px] shadow-premium border-l-4 border-tertiary z-20">
               <p className="text-5xl font-black text-primary leading-none mb-2">1.2k</p>
               <p className="text-xs font-black uppercase tracking-widest text-primary/50 mb-2">Lives Impacted To Date</p>
               <p className="text-body-sm text-primary/70 italic">&quot;We don't just build programs; we build futures.&quot;</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Event Section */}
      <FeaturedEvent />

      {/* Strategic Pillars: The Vertical Narrative */}
      <section className="py-20 lg:py-32 px-6 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-20 lg:mb-32 space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>Our Strategic <br/><span className="italic serif opacity-60 normal-case">Pillars</span></h2>
             <div className="h-1 w-32 bg-tertiary" />
          </motion.div>

          <div className="space-y-32 lg:space-y-48">
            {/* Pillar 01: Skill Lab */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">01.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Vocational & <br/> Digital Skills</h3>
                <div className="space-y-4">
                   <p className="text-primary/60 text-body-lg leading-relaxed font-bold">
                     Bridging the gap between potential and socio-economic independence.
                   </p>
                   <p className="text-primary/60 text-body-md leading-relaxed">
                     Our targeted vocational training and skill development programs reduce youth unemployment in underprivileged communities. We provide practical, hands-on training spanning digital literacy, hospitality, aviation, and essential trades (knitting, tailoring, electronics, masonry, and carpentry). By equipping the youth with industry-relevant competencies and fostering entrepreneurial start-ups, we forge self-reliant community leaders ready for the 21st-century economy.
                   </p>
                </div>
                <Link href="/programs/labs">
                  <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                    Learn About Our Labs
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                className="lg:col-span-7 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image src="/images/skills_lab_kokrajhar_1777399126349.png" alt="Skill Development" fill className="object-cover rounded-sm shadow-premium grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
            </div>

            {/* Pillar 02: Athletics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-row-reverse">
              <motion.div 
                className="lg:col-span-7 lg:order-1 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-primary/10 rounded-sm -rotate-2" />
                <Image src="/images/actual-sp-2.jpg" alt="Sports & Athletics" fill className="object-cover rounded-sm shadow-premium z-10" />
              </motion.div>
              <motion.div 
                className="lg:col-span-5 lg:order-2 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">02.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Athletics & <br/> Fraternity</h3>
                <div className="space-y-4">
                   <p className="text-primary/60 text-body-lg leading-relaxed font-bold">
                     Using sports as a profound mechanism for social integration and peace-building. 
                   </p>
                   <p className="text-primary/60 text-body-md leading-relaxed">
                     We organize structured athletic competitions in football, volleyball, cricket, and swimming across rural landscapes, providing all necessary equipment free of cost. Beyond cultivating physical fitness and preparing athletes for national stages, our friendly leagues are deliberately engineered to maintain domestic tranquility, dispel intolerance, and forge an unbreakable brotherhood across diverse communities.
                   </p>
                </div>
                <Link href="/programs/sports">
                  <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                    Explore Youth Leagues
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Pillar 03: Environment */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">03.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Ecological <br/> Stewardship</h3>
                <div className="space-y-4">
                   <p className="text-primary/60 text-body-lg leading-relaxed font-bold">
                     Preserving the natural heritage and ecological balance of Northeast India.
                   </p>
                   <p className="text-primary/60 text-body-md leading-relaxed">
                     Our youth-led afforestation programs actively protect indigenous, rare flora by constructing natural nurseries and executing massive tree-planting campaigns along river banks and barren lands. We combine soil conservation, flood-control measures, and public environmental awareness camps to curate a sustainable future, fiercely protecting our wildlife and natural monuments for the coming generations.
                   </p>
                </div>
                <Link href="/programs/ecology">
                  <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group mt-8">
                    Our Green Mission
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                className="lg:col-span-7 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image src="/images/afforestation_kokrajhar_1777399093856.png" alt="Afforestation" fill className="object-cover rounded-sm shadow-premium grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
            </div>

            {/* Pillar 04: Health & Social Relief */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-row-reverse">
              <motion.div 
                className="lg:col-span-7 lg:order-1 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-tertiary/10 rounded-sm -rotate-2" />
                <Image src="/images/mobile_health_clinic_kokrajhar_1777399018964.png" alt="Health and Social Services" fill className="object-cover rounded-sm shadow-premium z-10 grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
              <motion.div 
                className="lg:col-span-5 lg:order-2 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">04.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Health & <br/> Social Relief</h3>
                <div className="space-y-4">
                   <p className="text-primary/60 text-body-lg leading-relaxed font-bold">
                     Direct rapid-response intervention and community welfare.
                   </p>
                   <p className="text-primary/60 text-body-md leading-relaxed">
                     We aggressively tackle grassroots social issues by removing illiteracy, combating child labor, human trafficking, and eradicating superstition. Acting as first responders during natural calamities alongside District Administration, we distribute vital foods, medicines, and drinking water. Furthermore, our free health camps and sanitation awareness programs work to prevent epidemic diseases and foster widespread community wellness.
                   </p>
                </div>
                <Link href="/programs/health">
                  <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                    Our Social Impact
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats: Quantifying the Future */}
      <section className="py-24 lg:py-48 px-6 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-end">
          <motion.div 
            className="lg:col-span-6 space-y-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight leading-[0.9] uppercase" style={{ fontSize: 'var(--display-md)' }}>
                Quantifying <br/>
                <span className="text-tertiary italic serif normal-case">Momentum.</span>
             </h2>
             <p className="text-body-lg text-on-primary/60 max-w-md font-medium leading-relaxed">
                We believe that radical transparency and strategic focus are the true foundations of community trust. Every initiative we launch—from our vocational workshops to our large-scale afforestation and health camps—is meticulously tracked for systemic, long-term impact across the region.
             </p>
             <Button size="xl" variant="inverted" className="px-12 h-20 text-xl font-black uppercase tracking-widest transition-all">
                Download Report
             </Button>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 grid grid-cols-2 gap-x-12 gap-y-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             {[
               { val: "45k+", label: "Native Trees" },
               { val: "150+", label: "Active Leaders" },
               { val: "12", label: "Active Regions" },
               { val: "92%", label: "Placement Rate" }
             ].map((stat, i) => (
               <motion.div key={i} className="pl-6 md:pl-8 border-l border-tertiary/40 space-y-2" variants={fadeInUp}>
                  <p className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-on-primary">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-primary/40">{stat.label}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Final Movement: Call to Action */}
      <section className="relative py-24 lg:py-48 px-6 bg-surface-lowest overflow-hidden">
         <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.85] text-primary" style={{ fontSize: 'var(--display-md)' }}>Join the <br/><span className="italic serif opacity-60">Collective.</span></h2>
               <p className="text-body-lg text-primary/60 max-w-xl mx-auto font-medium border-t-2 border-tertiary/20 pt-8 mt-8">Lend your voice, your time, and your expertise to our mission. Join a growing community of leaders dedicated to the sustainable growth of our region.</p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
               <Link href="/get-involved">
                 <Button size="xl" className="px-16 h-24 text-2xl font-black uppercase tracking-[0.2em] bg-primary text-on-primary hover:bg-tertiary hover:text-on-tertiary transition-all shadow-premium group">
                    Get Involved <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                 </Button>
               </Link>
            </motion.div>
         </div>

         {/* Abstract Decorative Elements */}
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </section>

    </main>
  )
}
