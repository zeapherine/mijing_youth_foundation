"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Users2, ShieldCheck, Heart, Sparkles, Megaphone, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, History, Scale, Landmark } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/10 overflow-x-hidden">
      
      {/* Hero Section - Immersive Editorial */}
      <section className="relative pt-32 lg:pt-48 pb-16 px-6 lg:px-20 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-8 space-y-12 px-6 lg:px-0">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-tertiary font-black text-[10px] uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-px bg-tertiary" />
              Institutional Identity
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary break-words"
              style={{ fontSize: 'clamp(2.5rem, 8vw, calc(var(--display-lg) * 0.9))' }}
            >
              Building a <br />
              <span className="text-tertiary italic font-serif opacity-80">Legacy</span> of <br />
              Empowerment.
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-8 border-l-4 border-tertiary/20 pl-8"
            >
              <p className="text-body-lg text-primary/60 max-w-xl font-medium leading-relaxed italic">
                &quot;The Mijing Youth Foundation is more than an organization; it is a movement of hope, born from the urgent need to bridge the gap between untapped potential and systemic opportunity in Northeast India.&quot;
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Est. Year</p>
                  <p className="text-2xl font-black text-primary">2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Headquarters</p>
                  <p className="text-2xl font-black text-primary">Kokrajhar, Assam</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Reach</p>
                  <p className="text-2xl font-black text-primary">State-wide</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-4 relative aspect-[4/5] rounded-sm overflow-hidden shadow-premium group mx-6 lg:mx-0"
          >
            <Image 
              src="/images/actual-sp-4.jpg"
              alt="Mijing Youth Foundation Leadership"
              fill
              className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Origin Narrative - Detailed Textual Content */}
      <section className="py-24 lg:py-32 px-6 lg:px-20 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
               <History className="h-12 w-12 text-tertiary" />
               <h2 className="font-heading font-black uppercase tracking-tight leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>
                 Our <br />
                 <span className="text-tertiary">Founding</span> <br />
                 Story
               </h2>
               <p className="text-body-lg text-primary/50 font-medium">
                 Understanding the roots of our mission in the heart of the BTR region.
               </p>
            </div>

            <div className="lg:col-span-8 space-y-12">
               <div className="prose prose-xl prose-primary max-w-none space-y-8">
                 <p className="text-xl lg:text-2xl font-bold text-primary leading-relaxed">
                   Headquartered in Kokrajhar, the cultural heart of the Bodoland Territorial Region (BTR) in Assam, the Mijing Youth Foundation was established in 2024 with a singular, unshakeable directive: to serve as an institutional catalyst for youth-led socio-economic transformation.
                 </p>
                 <div className="h-px w-32 bg-tertiary" />
                 <p className="text-body-lg text-primary/70 leading-relaxed font-medium">
                   The name &quot;Mijing&quot; translates to &quot;Hope&quot;—a sentiment that serves as the foundation of every initiative we launch. We recognized that while the youth of Assam possess unparalleled resilience and talent, they often lack the systemic scaffolding required to convert that potential into tangible success. 
                 </p>
                 <p className="text-body-lg text-primary/70 leading-relaxed font-medium">
                   From our inception, we have operated as a non-partisan, non-sectarian force, dedicated to the holistic empowerment of young minds without discrimination of caste, race, creed, religion, or gender. We began by identifying the most critical gaps in rural development—unemployment, ecological degradation, and social fragmentation—and engineered a multi-pronged approach to address them simultaneously.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
                    <div className="p-8 bg-background border border-primary/5 rounded-sm space-y-4">
                       <MapPin className="h-6 w-6 text-tertiary" />
                       <h4 className="font-black uppercase tracking-tight text-primary">Strategic Presence</h4>
                       <p className="text-body-sm text-primary/60 font-medium">Operating across diverse landscapes—from the riverine tracts of the Brahmaputra to the dense forests of the BTR.</p>
                    </div>
                    <div className="p-8 bg-background border border-primary/5 rounded-sm space-y-4">
                       <Scale className="h-6 w-6 text-tertiary" />
                       <h4 className="font-black uppercase tracking-tight text-primary">Institutional Integrity</h4>
                       <p className="text-body-sm text-primary/60 font-medium">Governed by a rigorous Memorandum of Association that ensures transparency and radical accountability.</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Mission & Vision */}
      <section className="py-24 lg:py-48 px-6 lg:px-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card level={1} className="p-12 lg:p-16 space-y-12 bg-surface-low border-none overflow-hidden relative group">
              <div className="relative z-10 space-y-8">
                <div className="h-20 w-20 rounded-sm bg-primary text-on-primary flex items-center justify-center shadow-premium">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter text-primary">The <br/>Directive</h3>
                <p className="text-body-lg text-primary/70 font-medium leading-relaxed italic border-l-4 border-tertiary/20 pl-8">
                  &quot;To systematically empower young minds through athletic discipline, vocational and digital skill development, targeted health interventions, and cultural preservation. We act as first responders to societal crises and relentless builders of a self-reliant generation.&quot;
                </p>
              </div>
              <div className="text-[10rem] font-black text-primary/5 absolute -bottom-10 -right-10 select-none group-hover:text-primary/10 transition-colors">
                MISSION
              </div>
            </Card>

            <Card level={1} className="p-12 lg:p-16 space-y-12 bg-primary text-on-primary border-none overflow-hidden relative group">
              <div className="relative z-10 space-y-8">
                <div className="h-20 w-20 rounded-sm bg-tertiary text-on-tertiary flex items-center justify-center shadow-premium">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-heading font-black uppercase tracking-tighter">The <br/>Aspiration</h3>
                <p className="text-body-lg text-on-primary/70 font-medium leading-relaxed italic border-l-4 border-tertiary pl-8">
                  &quot;An Assam completely free from intolerance, illiteracy, and systemic poverty—where profound brotherhood reigns, natural heritage is fiercely protected, and youth invariably lead the charge toward unparalleled socio-economic development.&quot;
                </p>
              </div>
              <div className="text-[10rem] font-black text-white/5 absolute -bottom-10 -right-10 select-none group-hover:text-white/10 transition-colors">
                VISION
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Institutional Mandate - The "Informative" Part */}
      <section className="py-24 lg:py-32 px-6 lg:px-20 bg-surface-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-6 max-w-3xl">
               <Landmark className="h-12 w-12 text-tertiary" />
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>Institutional <br/> Objectives</h2>
               <p className="text-body-lg text-primary/50 font-medium border-l-4 border-tertiary pl-8">A formal distillation of our Memorandum of Association (MOA) and the legal pillars of our operation.</p>
            </div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-primary/20 writing-mode-vertical hidden lg:block">
               MANDATE 2024 / REGIONAL IMPACT
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Vocational Sovereignty", 
                desc: "Establishment of specialized training centers for Digital Literacy, Hospitality, Aviation, and traditional trades including Knitting, Tailoring, Electronics, Masonry, and Carpentry."
              },
              { 
                title: "Fraternal Athletics", 
                desc: "Organizing state-wide competitions in Football, Volleyball, Cricket, and Swimming to build physical resilience and cross-community peace."
              },
              { 
                title: "Ecological Restoration", 
                desc: "Executing massive afforestation drives, constructing indigenous flora nurseries, and implementing flood-control measures along riverine tracts."
              },
              { 
                title: "Emergency Response", 
                desc: "Acting as first responders during natural calamities—floods, fires, and epidemics—to provide food, medicine, and logistical support."
              },
              { 
                title: "Social Advocacy", 
                desc: "Relentless combat against human trafficking, child labor, illiteracy, and archaic superstitions through direct community intervention."
              },
              { 
                title: "Institutional Alignment", 
                desc: "Collaborating with District Administrations and Government bodies to implement Swachh Bharat and other national welfare schemes."
              }
            ].map((obj, i) => (
              <div key={i} className="space-y-6 group">
                <div className="h-px w-full bg-primary/10 group-hover:bg-tertiary transition-colors" />
                <div className="flex gap-6">
                  <span className="text-sm font-black text-tertiary opacity-40 leading-none">0{i+1}</span>
                  <div className="space-y-4">
                    <h4 className="text-xl font-black uppercase tracking-tight text-primary">{obj.title}</h4>
                    <p className="text-body-md text-primary/60 font-medium leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values - Grid with Indexing */}
      <section className="py-24 lg:py-32 px-6 lg:px-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-foreground/5 pb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>Ethos of Change</h2>
               <p className="text-body-lg text-primary/50 max-w-xl font-medium">The non-negotiable principles that drive our movement.</p>
            </div>
            <div className="text-6xl font-heading font-black text-tertiary/10 select-none hidden lg:block">
              VALUES
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Unconditional Equity", desc: "Working relentlessly without any discrimination of caste, race, creed, religion, or gender.", icon: Users2 },
              { title: "Cultural Preservation", desc: "Fiercely protecting the ethnic traditional roots, tribal songs, culture, and native ecosystem of our region.", icon: ShieldCheck },
              { title: "Direct Intervention", desc: "Acting as robust first-responders during health crises and natural calamities.", icon: Heart },
              { title: "Systemic Empowerment", desc: "Training youth in 21st-century vocational domains to forge unshakeable self-reliance.", icon: Sparkles },
              { title: "Civic Tranquility", desc: "Using athletics and leadership programs as deliberate instruments for peace-building and brotherhood.", icon: Megaphone }
            ].map((value, i) => (
              <div key={i} className="bg-background p-12 space-y-8 group hover:bg-surface-low transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <div className="text-sm font-black text-tertiary font-sans tracking-tighter">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <value.icon className="h-6 w-6 text-primary/20 group-hover:text-tertiary transition-colors" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-primary">{value.title}</h3>
                  <p className="text-primary/60 leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Institutional Portraits */}
      <section className="py-24 lg:py-48 px-6 lg:px-16 bg-surface-lowest">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div 
            className="text-left space-y-6 max-w-3xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>The Governance</h2>
             <p className="text-body-lg text-primary/50 font-medium border-l-4 border-primary pl-8">Architects of our mission, dedicated to long-term impact analysis and stewardship.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "Agwma Basumatary", role: "President", image: "/images/actual-sp-1.jpg" },
              { name: "Aizak Mashahary", role: "Vice-President", image: "/images/actual-sp-3.jpg" },
              { name: "John Basumatary", role: "Secretary", image: "/images/actual-sp-5.jpg" },
              { name: "Raja Mashahary", role: "Treasurer", image: "/images/actual-sp-7.jpg" }
            ].map((member, i) => (
              <Card key={i} level={2} className="group p-0 overflow-hidden border-none" animateHover={false}>
                <div className="relative aspect-[3/4]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-black uppercase tracking-tight">{member.name}</h3>
                    <p className="text-tertiary font-bold text-[10px] uppercase tracking-widest mt-2">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Institutional CTA */}
      <section className="py-24 lg:py-48 px-6 lg:px-16 overflow-hidden bg-primary text-on-primary relative">
         <motion.div 
            className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10"
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
              stewardship catalyzes the future of youth empowerment across Assam.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <Link href="/get-involved">
                <Button size="xl" variant="tertiary" className="px-16 h-20 text-lg font-black uppercase tracking-widest group">
                  Contribute Now
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="xl" variant="inverted" className="px-16 h-20 text-lg font-black uppercase tracking-widest group border-white/20">
                  Explore Programs
                </Button>
              </Link>
            </div>
         </motion.div>

         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-tertiary/10 blur-3xl pointer-events-none" />
      </section>

    </main>
  )
}
