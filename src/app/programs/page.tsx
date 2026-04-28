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
  Download,
  ArrowRight,
  Leaf
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      
      {/* 1. HERO SECTION - Minimalist Impact */}
      <section className="pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden border-b border-foreground/5">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
           <div className="space-y-12">
             <motion.div
               variants={fadeInUp}
               className="flex items-center gap-4 text-tertiary font-bold text-sm uppercase tracking-widest"
             >
               <span className="w-12 h-px bg-tertiary" />
               Impact Portfolios
             </motion.div>

             <motion.h1 
               variants={fadeInUp}
               className="font-heading font-black tracking-tighter leading-[0.85] text-foreground" 
               style={{ fontSize: 'var(--display-lg)' }}
             >
                Mandates <br/>
                <span className="text-tertiary italic font-serif">for</span> Growth.
             </motion.h1>
           </div>
           
           <motion.div variants={fadeInUp} className="space-y-8">
             <p className="text-body-lg text-foreground/50 max-w-xl font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
                Our programs are not merely interventions; they are institutional frameworks 
                designed to cultivate cultural heritage, physical resilience, and systemic innovation.
             </p>
             <div className="flex gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="h-2 w-2 rounded-full bg-tertiary" />
                <div className="h-2 w-2 rounded-full bg-secondary" />
             </div>
           </motion.div>
        </motion.div>
      </section>

      {/* 2. SPORTS & CULTURE SECTION - Asymmetric Editorial */}
      <section className="px-6 md:px-12 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-12 mb-12 hidden lg:block"
          >
             <h2 className="text-[10vw] font-heading font-black opacity-[0.03] absolute top-10 right-0 select-none">CULTURE</h2>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <span className="text-sm font-black text-tertiary uppercase tracking-widest">01. Cultural Vitality</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Sports & <br/> <span className="text-primary">Culture</span></h2>
              <p className="text-body-lg text-foreground/60 leading-relaxed font-medium">
                Discipline and tradition are the bedrock of empowerment. We foster a competitive 
                spirit while anchoring our youth in their cultural lineage through festivals 
                and rigorous physical training.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-8 bg-surface-low rounded-sm group hover:bg-primary hover:text-on-primary transition-all duration-500">
                <div className="flex items-center gap-6">
                  <Dribbble className="h-8 w-8 text-tertiary group-hover:text-on-primary" />
                  <span className="font-heading font-black text-2xl uppercase">Physical Training</span>
                </div>
                <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <div className="flex items-center justify-between p-8 bg-surface-low rounded-sm group hover:bg-primary hover:text-on-primary transition-all duration-500">
                <div className="flex items-center gap-6">
                  <MapPin className="h-8 w-8 text-tertiary group-hover:text-on-primary" />
                  <span className="font-heading font-black text-2xl uppercase">Youth Festivals</span>
                </div>
                <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </div>

            <Link href="/programs/sports">
              <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group mt-6">
                Explore Youth Leagues
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 relative aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-premium"
          >
            <Image 
              src="/images/actual-sp-3.jpg" 
              alt="Sports & Culture" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </motion.div>
        </div>
      </section>

      {/* 3. SOCIAL SERVICE & HEALTH SECTION - High Contrast Layout */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-primary text-on-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative aspect-square md:aspect-[4/5] w-full max-w-lg lg:order-2">
              <motion.div 
                className="relative w-full h-full rounded-sm overflow-hidden shadow-premium"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/images/mobile_health_clinic_kokrajhar_1777399018964.png" 
                  alt="Social Service" 
                  fill 
                  className="object-cover grayscale" 
                />
              </motion.div>
              {/* Overlay Content area */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 bg-tertiary p-8 lg:p-12 rounded-sm text-on-tertiary space-y-2 lg:space-y-4 shadow-premium max-w-[240px] md:max-w-sm"
              >
                 <p className="text-4xl lg:text-6xl font-heading font-black leading-none">12,000+</p>
                 <p className="text-[10px] lg:text-sm font-bold uppercase tracking-widest leading-tight">Lives Touched through our mobile triage units.</p>
              </motion.div>
           </div>

           <div className="space-y-16 lg:order-1">
              <div className="space-y-8">
                 <span className="text-sm font-black tracking-widest uppercase text-tertiary">02. Humanitarian Framework</span>
                 <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85]" style={{ fontSize: 'var(--display-md)' }}>Health & <br/> Crisis Response</h2>
                 <p className="text-body-lg text-on-primary/60 leading-relaxed font-medium italic">
                   Institutional readiness is our commitment. From rapid disaster logistics to 
                   pediatric health stewardship, we ensure that stability is a right, not a privilege.
                 </p>
              </div>

              <div className="grid gap-8">
                 <div className="flex gap-8 items-start group">
                    <div className="h-16 w-16 rounded-sm bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                      <Ambulance className="h-8 w-8" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-black uppercase">Disaster Logistics</h3>
                      <p className="text-on-primary/60 font-medium">Expert teams deployed for rapid flood and high-altitude emergency triage.</p>
                      <div className="h-px w-full bg-on-primary/10" />
                    </div>
                 </div>

                 <div className="flex gap-8 items-start group">
                    <div className="h-16 w-16 rounded-sm bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                      <Stethoscope className="h-8 w-8" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-black uppercase">Mobile Clinics</h3>
                      <p className="text-on-primary/60 font-medium">Providing essential diagnostic care to remote communities on a fixed mandate.</p>
                      <div className="h-px w-full bg-on-primary/10" />
                    </div>
                 </div>
              </div>

              <Link href="/programs/health">
                <Button variant="link" className="px-0 flex items-center gap-4 text-tertiary hover:text-on-primary font-black uppercase tracking-widest group">
                  Explore Health Initiatives
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
           </div>
        </div>
      </section>

      {/* 4. AFFORESTATION - Environmental Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="text-left w-full space-y-8 mb-24 border-l-8 border-secondary pl-12"
           >
              <span className="text-sm font-black tracking-widest uppercase text-secondary">03. Custodians of Earth</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>The Green <br/> <span className="text-secondary">Belt</span> Mandate</h2>
              <p className="text-body-lg text-foreground/50 font-medium max-w-2xl leading-relaxed">
                Restoring ecological balance through intentional afforestation and youth-led 
                conservation efforts across the western Assam corridor.
              </p>
              
              <Link href="/programs/ecology">
                <Button variant="link" className="px-0 flex items-center gap-4 text-secondary font-black uppercase tracking-widest group">
                  Explore Green Mandate
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
              <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-auto min-h-[500px] rounded-sm overflow-hidden group">
                 <Image 
                    src="/images/afforestation_kokrajhar_1777399093856.png" 
                    alt="The Green Belt Initiative" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-12 left-12 space-y-4 text-on-primary">
                    <div className="flex items-center gap-4">
                      <Leaf className="h-6 w-6 text-secondary" />
                      <h3 className="text-4xl font-heading font-black uppercase tracking-tight leading-none">100k Saplings</h3>
                    </div>
                    <p className="max-w-md font-medium text-on-primary/70">A systemic re-greening project initiated in 2021.</p>
                 </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 gap-12">
                 <Card level={2} className="flex flex-col justify-center space-y-6">
                    <h4 className="text-2xl font-heading font-black uppercase">Ecological Data</h4>
                    <p className="text-foreground/60 font-medium">Monitoring soil health and biodiversity indices across 45 designated zones.</p>
                 </Card>
                 <div className="relative aspect-square rounded-sm overflow-hidden grayscale">
                    <Image 
                      src="/images/community_sanctuary_kokrajhar_1777399275132.png" 
                      alt="Forest mapping" 
                      fill 
                      className="object-cover" 
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. TOURISM & SKILL DEVELOPMENT - Technical Editorial */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-12">
                 <div className="h-px w-full bg-foreground/10 mb-12" />
              </div>

              <div className="lg:col-span-7 space-y-16">
                 <div className="space-y-8">
                    <span className="text-sm font-black tracking-widest uppercase text-tertiary">04. Technical Maturity</span>
                    <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85]" style={{ fontSize: 'var(--display-md)' }}>Vocational <br/> Excellence</h2>
                    <p className="text-body-lg text-foreground/50 leading-relaxed font-medium italic max-w-xl">
                      Bridging the gap between aspiration and industry proficiency. Our labs 
                      provide specialized training in aviation, hospitality, and sustainable tourism.
                    </p>
                    <Link href="/programs/labs">
                      <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                        Explore our Labs
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                 </div>

                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <Plane className="h-10 w-10 text-primary" />
                       <h3 className="text-3xl font-heading font-black uppercase">Aviation</h3>
                       <p className="text-foreground/60 font-medium">Certified ground staff and cabin crew programs in partnership with leading regional airline carriers.</p>
                    </div>
                    <div className="space-y-6">
                       <Rocket className="h-10 w-10 text-tertiary" />
                       <h3 className="text-3xl font-heading font-black uppercase">Incubation</h3>
                       <p className="text-foreground/60 font-medium">Seed funding and mentorship for social enterprises scaling within the Kokrajhar ecosystem.</p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-5 relative">
                 <Card level={2} className="p-0 border-none overflow-hidden rounded-sm relative aspect-[4/5] shadow-premium group">
                    <Image 
                      src="/images/skills_lab_kokrajhar_1777399126349.png" 
                      alt="Skills training" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                       <div className="bg-tertiary text-on-tertiary px-6 py-2 rounded-sm font-black text-xs uppercase tracking-widest">Enrollment Open</div>
                       <div className="bg-background text-foreground px-6 py-2 rounded-sm font-black text-xs uppercase tracking-widest">Spring Cohort</div>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 6. IMPACT CTA - Maximalist Closure */}
      <section className="py-24 lg:py-48 px-6 text-center bg-background border-t border-foreground/5">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-16"
        >
           <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8]" style={{ fontSize: 'var(--display-lg)' }}>
             Secure <br/> <span className="text-tertiary italic font-serif">the</span> Future.
           </h2>
           <p className="text-2xl text-foreground/40 font-medium max-w-xl mx-auto italic leading-relaxed">
             Our programs rely on the collective investment of our global community. 
             Become a stakeholder in the next generation.
           </p>
           
           <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
              <Button size="xl" variant="default" className="px-16 group">
                Support our Initiatives
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="px-16 flex items-center gap-4 bg-surface-low border-none">
                <Download className="h-6 w-6" />
                Impact Report 2024
              </Button>
           </div>
        </motion.div>
      </section>

    </main>
  )
}

