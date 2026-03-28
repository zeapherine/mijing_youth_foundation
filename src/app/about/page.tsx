"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Users2, ShieldCheck, Heart, Sparkles, Megaphone, Linkedin, Mail, ExternalLink } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 w-fit"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Identity
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading font-black tracking-tight leading-[0.85] text-foreground max-w-5xl"
            style={{ fontSize: 'var(--display-lg)' }}
          >
            A Bridge to <br />
            <span className="text-secondary italic font-serif normal-case">Tomorrow&apos;s</span> Potential.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-body-lg md:text-body-lg text-foreground/50 max-w-2xl font-medium leading-relaxed italic"
          >
            Mijing Youth Empowerment Foundation is a non-profit dedicated to nurturing growth, fostering innovation, and building a sustainable future for the youth.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] -left-[10%] w-[40%] aspect-square bg-secondary/5 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        {/* Subtle background shift for contrast */}
        <div className="absolute inset-0 bg-surface-low/40 pointer-events-none" />
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card variants={fadeInUp} className="h-full rounded-[4rem] p-16 bg-white border-none shadow-premium space-y-10 group">
             <div className="h-16 w-16 rounded-3xl bg-secondary/10 flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Target className="h-8 w-8 text-secondary" />
             </div>
             <div className="space-y-6">
                <h2 className="font-heading font-black uppercase tracking-tight" style={{ fontSize: 'var(--display-md)' }}>Our Mission</h2>
                <p className="text-body-lg text-foreground/50 font-medium leading-[1.6]">
                   To empower young minds through quality education, vocational training, and holistic 
                   development programs. We strive to create opportunities that bridge the gap 
                   between potential and excellence.
                </p>
             </div>
             <div className="pt-8 flex items-center gap-4 text-secondary font-black uppercase tracking-widest text-xs">
                The Spark <div className="h-px flex-1 bg-secondary/20" />
             </div>
          </Card>

          <Card variants={fadeInUp} className="h-full rounded-[4rem] p-16 bg-white border-none shadow-premium space-y-10 group">
             <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:-rotate-6 transition-transform">
                <Sparkles className="h-8 w-8 text-primary" />
             </div>
             <div className="space-y-6">
                <h2 className="font-heading font-black uppercase tracking-tight text-foreground" style={{ fontSize: 'var(--display-md)' }}>Our Vision</h2>
                <p className="text-body-lg text-foreground/50 font-medium leading-[1.6]">
                   A world where every young individual has the resources, skills, and confidence 
                   to shape their own future and contribute meaningfully to society and 
                   environmental sustainability.
                </p>
             </div>
             <div className="pt-8 flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                The Horizon <div className="h-px flex-1 bg-primary/20" />
             </div>
          </Card>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Ethos of Empowerment</h2>
               <p className="text-body-lg text-foreground/50 max-w-xl font-medium italic underline decoration-primary/20 underline-offset-8">The fundamental principles that guide every initiative we undertake.</p>
            </div>
            <div className="px-8 py-3 rounded-full border border-secondary/20 bg-secondary/5 text-secondary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
               <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
               Constant Evolution
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { 
                title: "Inclusivity", 
                desc: "We believe talent is universal, but opportunity is not. We work to break barriers.", 
                icon: Users2,
                color: "bg-primary/10",
                text: "text-primary"
              },
              { 
                title: "Integrity", 
                desc: "Transparency and accountability are the cornerstones of our relationship with the community.", 
                icon: ShieldCheck,
                color: "bg-secondary/10",
                text: "text-secondary"
              },
              { 
                title: "Compassion", 
                desc: "Every program is built with empathy, ensuring we meet the real needs of our youth.", 
                icon: Heart,
                color: "bg-primary/10",
                text: "text-primary"
              },
              { 
                title: "Innovation", 
                desc: "Continuously evolving our methods to serve better in a rapidly changing world.", 
                icon: Sparkles,
                color: "bg-primary/10",
                text: "text-primary"
              },
              { 
                title: "Advocacy", 
                desc: "Amplifying the voices of those who are often unheard in the corridors of progress.", 
                icon: Megaphone,
                color: "bg-secondary/10",
                text: "text-secondary"
              },
            ].map((value, i) => (
              <Card key={i} variants={fadeInUp} className="h-full rounded-[3.5rem] p-12 bg-white shadow-premium border-none flex flex-col justify-between group relative overflow-hidden">
                {/* Editorial Index */}
                <div className="absolute top-10 right-10 text-6xl font-heading font-black text-foreground/5 select-none transition-transform group-hover:-translate-y-2 duration-700">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="space-y-12">
                  <div className={`h-16 w-16 rounded-3xl ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                     <value.icon className={`h-8 w-8 ${value.text}`} />
                  </div>
                  <div className="space-y-6">
                     <h3 className="font-heading font-bold text-3xl uppercase tracking-tight leading-[0.9] text-foreground group-hover:text-primary transition-colors duration-500">{value.title}</h3>
                     <p className="text-foreground/60 text-body-lg font-medium leading-relaxed italic border-l-2 border-primary/10 pl-6 py-2">
                       {value.desc}
                     </p>
                  </div>
                </div>
                
                <div className="pt-8 flex items-center gap-4 text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                   <div className="h-0.5 w-12 bg-primary" />
                   <span className="text-xs font-black uppercase tracking-[0.2em]">Learn More</span>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 px-6 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div 
            className="text-center space-y-6 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Architects of Change</h2>
             <p className="text-body-lg text-foreground/50 font-medium italic">Meet the dedicated team driving our vision forward with passion and expertise.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { name: "Dr. Lwin Moe", role: "Executive Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Head of Programs", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
              { name: "Michael Abiola", role: "Operations Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop" }
            ].map((member, i) => (
              <Card key={i} variants={fadeInUp} className="group relative rounded-[4rem] overflow-hidden bg-white border-none shadow-premium aspect-[4/5] p-0" animateHover={false}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">{member.name}</h3>
                      <p className="text-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
         <motion.div 
            className="max-w-7xl mx-auto border-t border-foreground/5 pt-16 pb-8 flex flex-col md:flex-row justify-between items-center gap-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-center md:text-left">
               <h2 className="text-5xl font-heading font-black tracking-tighter uppercase leading-[0.85]">Join our mission.</h2>
               <p className="text-xl text-foreground/40 font-medium italic">Shape the future with us, one life at a time.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Button size="xl" className="rounded-full px-12 h-20 text-xl font-black uppercase bg-primary text-white hover:bg-primary/90 transition-all border-none">
                Donate Now
              </Button>
              <Button size="xl" variant="secondary" className="rounded-full px-12 h-20 text-xl font-black uppercase bg-surface-low text-foreground/70 hover:bg-surface-high transition-all border-none">
                Work with Us
              </Button>
            </div>
         </motion.div>
      </section>

    </main>
  )
}
