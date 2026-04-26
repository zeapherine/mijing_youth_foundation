"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Users2, ShieldCheck, Heart, Sparkles, Megaphone, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      
      {/* Hero Section - Immersive Editorial */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-tertiary font-bold text-sm uppercase tracking-widest"
            >
              <span className="w-12 h-px bg-tertiary" />
              Our Identity
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tight leading-[0.9] text-foreground"
              style={{ fontSize: 'var(--display-lg)' }}
            >
              Building a <br />
              <span className="text-tertiary italic font-serif">Legacy</span> of <br />
              Empowerment.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-body-lg text-foreground/60 max-w-xl font-medium leading-relaxed border-l-4 border-tertiary/20 pl-8"
            >
              Mijing Youth Empowerment Foundation is an institutional force for good, 
              dedicated to bridging the gap between untapped potential and systemic opportunity.
            </motion.p>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-4 relative aspect-[4/5] rounded-sm overflow-hidden shadow-premium"
          >
            <Image 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
              alt="Community impact"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </motion.div>

        {/* Decorative subtle texture */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </section>

      {/* Philosophy Section - Vertical Narrative */}
      <section className="py-32 px-6 lg:px-16 bg-surface-low relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-12 sticky top-32">
               <h2 className="font-heading font-black uppercase tracking-tight leading-[0.85]" style={{ fontSize: 'var(--display-md)' }}>
                 Our <br />
                 <span className="text-tertiary">Mission</span> & <br />
                 Vision
               </h2>
               <p className="text-body-lg text-foreground/50 font-medium max-w-sm">
                 We are guided by a dual mandate: immediate impact and long-term systemic change.
               </p>
            </div>

            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-sm bg-primary text-on-primary flex items-center justify-center">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-heading font-black uppercase">The Directive</h3>
                </div>
                <p className="text-body-lg text-foreground/70 font-medium leading-relaxed italic">
                  "To empower young minds through quality education, vocational training, and holistic 
                  development programs. We strive to create opportunities that bridge the gap 
                  between potential and excellence."
                </p>
                <div className="h-px w-full bg-foreground/10" />
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-sm bg-tertiary text-on-tertiary flex items-center justify-center">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-heading font-black uppercase">The Aspiration</h3>
                </div>
                <p className="text-body-lg text-foreground/70 font-medium leading-relaxed italic">
                  "A world where every young individual has the resources, skills, and confidence 
                  to shape their own future and contribute meaningfully to society and 
                  environmental sustainability."
                </p>
                <div className="h-px w-full bg-foreground/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Grid with Indexing */}
      <section className="py-32 px-6 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-foreground/5 pb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Ethos of Change</h2>
               <p className="text-body-lg text-foreground/50 max-w-xl font-medium">The non-negotiable principles that drive our movement.</p>
            </div>
            <div className="text-6xl font-heading font-black text-tertiary/10 select-none">
              VALUES
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Inclusivity", desc: "Universal talent, localized opportunity. We break systemic barriers to entry.", icon: Users2 },
              { title: "Integrity", desc: "Radical transparency is the foundation of our community trust.", icon: ShieldCheck },
              { title: "Compassion", desc: "Empathy is our engine for understanding real community needs.", icon: Heart },
              { title: "Innovation", desc: "Evolving our pedagogical methods for a digital-first world.", icon: Sparkles },
              { title: "Advocacy", desc: "Amplifying the muted voices in the corridors of power.", icon: Megaphone }
            ].map((value, i) => (
              <div key={i} className="bg-background p-12 space-y-8 group hover:bg-surface-low transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <div className="text-sm font-black text-tertiary font-sans tracking-tighter">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <value.icon className="h-6 w-6 text-foreground/20 group-hover:text-tertiary transition-colors" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-black uppercase tracking-tight">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Institutional Portraits */}
      <section className="py-32 px-6 lg:px-16 bg-surface-lowest">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div 
            className="text-left space-y-6 max-w-3xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>The Governance</h2>
             <p className="text-body-lg text-foreground/50 font-medium border-l-4 border-primary pl-8">Architects of our mission, dedicated to long-term impact analysis and stewardship.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "Agwma Basumatary", role: "President", image: "/images/actual-sp-1.jpg" },
              { name: "Sarah Chen", role: "Head of Programs", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
              { name: "Michael Abiola", role: "Operations Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop" }
            ].map((member, i) => (
              <Card key={i} level={2} className="group p-0 overflow-hidden" animateHover={false}>
                <div className="relative aspect-[3/4]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                    <h3 className="text-2xl font-black uppercase tracking-tight">{member.name}</h3>
                    <p className="text-tertiary font-bold text-sm uppercase tracking-widest mt-2">{member.role}</p>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-center bg-white">
                  <div className="flex gap-4">
                    <Linkedin className="h-4 w-4 text-foreground/40 hover:text-tertiary cursor-pointer transition-colors" />
                    <Mail className="h-4 w-4 text-foreground/40 hover:text-tertiary cursor-pointer transition-colors" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-tertiary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Institutional CTA */}
      <section className="py-32 px-6 lg:px-16 overflow-hidden bg-primary text-on-primary">
         <motion.div 
            className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.8]">
              Join the <br />
              <span className="text-tertiary italic font-serif">Movement.</span>
            </h2>
            <p className="text-xl text-on-primary/60 max-w-2xl font-medium leading-relaxed italic">
              Whether through direct partnership, donation, or expertise, your 
              stewardship catalyzes the future of youth empowerment.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <Button size="xl" variant="tertiary" className="px-16 group">
                Contribute Now
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="xl" variant="inverted" className="px-16 group">
                Explore Programs
              </Button>
            </div>
         </motion.div>
      </section>

    </main>
  )
}

