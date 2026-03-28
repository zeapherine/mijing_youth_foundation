"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Dribbble, 
  MapPin, 
  Ambulance, 
  Stethoscope, 
  Plane, 
  Rocket, 
  Download 
} from "lucide-react"
import { fadeInUp, staggerContainer, pageVariants, editorialEasing } from "@/lib/animations"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex-1 space-y-12"
        >
           <motion.h1 
             variants={fadeInUp}
             className="font-heading font-black tracking-tight leading-[0.85]" 
             style={{ fontSize: 'var(--display-lg)' }}
           >
              Programs & <br/>
              <span className="text-primary italic font-serif normal-case">Initiatives</span>
           </motion.h1>
           <motion.p 
             variants={fadeInUp}
             className="text-body-lg md:text-body-lg text-foreground/50 max-w-2xl font-medium leading-tight italic"
           >
              Empowering the youth of today to build the heritage of tomorrow. Our initiatives span across cultural preservation, physical wellness, and sustainable innovation.
           </motion.p>
        </motion.div>
      </section>

      {/* 2. SPORTS & CULTURE SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-12">
        <Card level={1} className="max-w-7xl mx-auto rounded-[4rem] p-0 overflow-hidden border-none flex flex-col lg:flex-row items-center relative gap-0">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 p-12 md:p-20 space-y-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                01. Cultural Vitality
              </span>
            </motion.div>
            <div className="space-y-6">
              <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase" style={{ fontSize: 'var(--display-md)' }}>Sports & Culture</motion.h2>
              <motion.p variants={fadeInUp} className="text-body-lg text-foreground/60 leading-relaxed font-medium">
                We believe in the transformative power of discipline and tradition. Through rigorous physical training and vibrant youth festivals, we celebrate our roots while fostering a competitive spirit.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-surface-lowest shadow-premium group cursor-default transition-all hover:translate-y-[-2px]">
                <Dribbble className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-wide">Physical Training</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-surface-lowest shadow-premium group cursor-default transition-all hover:translate-y-[-2px]">
                <MapPin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-wide">Youth Festivals</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="flex-1 w-full h-[600px] lg:h-auto self-stretch relative">
            <motion.div 
              className="absolute inset-0 m-12 rounded-[3.5rem] overflow-hidden shadow-premium"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: editorialEasing }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/sports.png" 
                alt="Sports & Culture" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </motion.div>
          </div>
        </Card>
      </section>

      {/* 3. SOCIAL SERVICE & HEALTH SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 px-8">
           <div className="flex-1 relative aspect-square w-full max-w-lg">
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-[16px] border-surface-lowest shadow-premium"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: editorialEasing }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/images/health.png" 
                  alt="Social Service" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              {/* Overlay Stat Badge */}
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-[10%] -right-10 bg-tertiary p-8 rounded-[2.5rem] text-white space-y-2 shadow-2xl max-w-[200px]"
              >
                 <p className="text-4xl font-heading font-black leading-none">12k+</p>
                 <p className="text-xs font-bold opacity-70 uppercase tracking-widest leading-tight">Youth consultations delivered</p>
              </motion.div>
           </div>

           <div className="flex-1 space-y-12">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                 <motion.span variants={fadeInUp} className="text-[10px] font-bold tracking-[0.2em] uppercase text-tertiary">02. Humanitarian Care</motion.span>
                 <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase" style={{ fontSize: 'var(--display-md)' }}>Social Service & Health</motion.h2>
                 <motion.p variants={fadeInUp} className="text-body-lg text-foreground/50 leading-relaxed font-medium">
                   Our response to crisis is immediate and our commitment to health is permanent. From rapid disaster relief to regular community health checkups, we ensure no one is left behind in times of need or transition.
                 </motion.p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid gap-6"
              >
                 <motion.div variants={fadeInUp}>
                   <Card level={2} className="flex gap-6 p-8 items-start group hover:scale-[1.02] transition-transform">
                      <div className="h-14 w-14 rounded-2xl bg-tertiary/10 flex items-center justify-center shrink-0">
                        <Ambulance className="h-6 w-6 text-tertiary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-black uppercase" style={{ fontSize: 'var(--headline-md)' }}>Disaster Relief</h3>
                        <p className="text-body-sm text-foreground/60 font-medium">Rapid response teams trained for high-altitude and flood emergency logistics.</p>
                      </div>
                   </Card>
                 </motion.div>

                 <motion.div variants={fadeInUp}>
                   <Card level={2} className="flex gap-6 p-8 items-start group hover:scale-[1.02] transition-transform">
                      <div className="h-14 w-14 rounded-2xl bg-tertiary/10 flex items-center justify-center shrink-0">
                        <Stethoscope className="h-6 w-6 text-tertiary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-black uppercase" style={{ fontSize: 'var(--headline-md)' }}>Health Checkups</h3>
                        <p className="text-body-sm text-foreground/60 font-medium">Mobile clinics specializing in basic triage and pediatric diagnostic care.</p>
                      </div>
                   </Card>
                 </motion.div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. AFFORESTATION & GREEN WORK */}
      <section className="px-6 md:px-12 lg:px-16 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
           <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="text-center max-w-2xl mx-auto space-y-6"
           >
              <motion.span variants={fadeInUp} className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">03. Environmental Stewardship</motion.span>
              <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Afforestation & Green Work</motion.h2>
              <motion.p variants={fadeInUp} className="text-body-lg text-foreground/50 font-medium">Restoring our landscapes through intentional and disciplined conservation efforts.</motion.p>
           </motion.div>

           <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
           >
              <motion.div 
                variants={fadeInUp}
                className="md:col-span-2 md:row-span-2 relative rounded-[4rem] overflow-hidden group"
              >
                 <Image 
                    src="/images/green.png" 
                    alt="The Green Belt Initiative" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-12 left-12 space-y-4">
                    <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter">The Green Belt Initiative</h3>
                    <p className="text-white/70 max-w-sm font-medium">100,000+ saplings planted across western Assam since 2021.</p>
                 </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="relative rounded-[4rem] overflow-hidden shadow-premium"
              >
                 <Image src="/images/impact-green.png" alt="Sapling" fill className="object-cover" />
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="relative rounded-[4rem] overflow-hidden shadow-premium"
              >
                 <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" alt="Forest" fill className="object-cover" />
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* 5. TOURISM & SKILL DEVELOPMENT */}
      <section className="px-6 md:px-12 lg:px-16 py-32 bg-[#4a5531] text-white">
        <Card level={0} className="max-w-7xl mx-auto bg-transparent p-0 overflow-visible flex flex-col lg:flex-row gap-20 items-center">
           <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="flex-1 space-y-12"
           >
              <div className="space-y-6">
                 <motion.span variants={fadeInUp} className="px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    04. Future Readiness
                 </motion.span>
                 <motion.h2 variants={fadeInUp} className="text-5xl md:text-[5.5rem] font-heading font-black tracking-tighter uppercase leading-[0.9]">Tourism & Skill Development</motion.h2>
                 <motion.p variants={fadeInUp} className="text-xl text-white/50 leading-relaxed font-medium">
                   Bridging the gap between aspiration and industry. We persist in specialized training in aviation, logistics, hospitality, and sustainable tourism while offering seed funding for youth-led start-ups.
                 </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                 <Card level={0} className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 space-y-4 text-white hover:bg-white/20 transition-all duration-300">
                    <Plane className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-heading font-black uppercase">Aviation Training</h3>
                    <p className="text-sm opacity-60 font-medium">Ground staff and cabin crew certifications in partnership with regional carriers.</p>
                 </Card>
                 <Card level={0} className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 space-y-4 text-white hover:bg-white/20 transition-all duration-300">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-heading font-black uppercase">Seed Funding</h3>
                    <p className="text-sm opacity-60 font-medium">Incubation and micro-grants for tourism-related social enterprises.</p>
                 </Card>
              </motion.div>
           </motion.div>

           <div className="flex-1 relative aspect-square w-full max-w-xl">
              <motion.div 
                className="relative h-full w-full rounded-full overflow-hidden border-[16px] border-white/10 shadow-3xl"
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: editorialEasing }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/images/skills-lab.png" 
                  alt="Tourism Training" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
              </motion.div>
              {/* Floating Highlight Card */}
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-1/2 -right-10 transform translate-y-[-50%] bg-[#ff7668] p-10 rounded-[3rem] space-y-4 max-w-[280px] shadow-2xl"
              >
                 <h4 className="text-xl font-heading font-black uppercase tracking-tight text-white underline decoration-2 underline-offset-4">Kokrajhar Flying Club</h4>
                 <p className="text-xs font-bold text-white/80 leading-relaxed">Join the first cohort for aircraft navigation and piloting gear selection.</p>
              </motion.div>
           </div>
        </Card>
      </section>

      {/* 6. IMPACT CTA */}
      <section className="py-48 px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
           <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Ready to make <br/> an impact?</motion.h2>
           <motion.p variants={fadeInUp} className="text-body-lg text-foreground/50 font-medium max-w-xl mx-auto italic leading-relaxed">
             Whether you&apos;re looking to volunteer, donate, or enroll in our programs, your journey starts here.
           </motion.p>
           <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
              <Button size="xl" className="btn-primary-gradient px-12 h-20 text-xl font-black uppercase tracking-widest">
                Apply for Programs
              </Button>
              <Button size="xl" variant="outline" className="rounded-full px-12 h-20 text-xl font-black bg-surface-low text-foreground border-none hover:bg-surface-high flex items-center gap-3">
                <Download className="h-6 w-6" />
                Download Reports
              </Button>
           </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
