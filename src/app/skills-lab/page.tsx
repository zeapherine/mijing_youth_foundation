"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Palette, Users, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, pageVariants, editorialEasing } from "@/lib/animations"

const tracks = [
  {
    title: "Creative Mastery",
    icon: Palette,
    description: "Design thinking, editorial photography, and brand storytelling for the next generation of creators.",
    color: "text-coral",
    bg: "bg-coral/5"
  },
  {
    title: "Technical Excellence",
    icon: Code,
    description: "Full-stack development, AI integration, and systems architecture focused on social impact.",
    color: "text-mint",
    bg: "bg-mint/5"
  },
  {
    title: "Leadership Lab",
    icon: Users,
    description: "Community organizing, strategic empathy, and project management for sustainable change.",
    color: "text-sage",
    bg: "bg-sage/5"
  }
]

export default function SkillsLab() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase">
                <Zap className="h-4 w-4 fill-primary" />
                The Future is Now
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl font-heading font-bold tracking-tighter leading-[0.85]">
                SKILLS <br/>
                <span className="text-primary italic">LAB.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl text-foreground font-medium leading-tight max-w-xl">
                Mentorship. Mastery. Momentum. <br/>
                We bridge the gap between curiosity and career.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: editorialEasing }}
            className="relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl group"
          >
             <Image 
                src="/images/skills-lab.png" 
                alt="Skills Lab Hero" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* The Curriculum */}
      <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-heading font-bold tracking-tighter">The Innovation Tracks</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Carefully curated paths designed to take you from a curious beginner to a world-class professional in six months.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tracks.map((track, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className={`p-12 rounded-[4rem] border-none ${track.bg} space-y-8 group hover:scale-[1.02] transition-transform duration-500 h-full`}>
                  <div className={`w-20 h-20 rounded-[2rem] bg-white dark:bg-neutral-800 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6`}>
                    <track.icon className={`h-10 w-10 ${track.color}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-heading font-bold">{track.title}</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                  <Button variant="link" className={`p-0 text-xl font-bold ${track.color}`}>
                     Explore Curriculum →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cohort Callout */}
      <section className="py-40 px-6">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto glass rounded-[5rem] p-12 md:p-24 overflow-hidden relative group"
        >
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
           
           <div className="relative z-10 text-center space-y-12">
              <motion.h2 variants={fadeInUp} className="text-6xl md:text-8xl font-heading font-bold tracking-tighter">
                Spring 2025 <br/>
                <span className="text-primary italic">Applications Open.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-2xl text-foreground/70 max-w-2xl mx-auto font-medium">
                Join 50 researchers, designers, and engineers in our most ambitious cohort yet. Limited spots available for the Spring intensive.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 pt-8">
                <Button size="lg" className="rounded-full px-16 py-10 text-2xl bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 border-none shadow-xl shadow-primary/20">
                    Apply to Cohort
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-16 py-10 text-2xl border-foreground/20 hover:bg-foreground/5 transition-all hover:scale-105">
                    View FAQ
                </Button>
              </motion.div>
           </div>
        </motion.div>
      </section>

    </main>
  )
}
