"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import Link from "next/link"
import { 
  Heart, 
  Users, 
  Handshake, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Gift,
  Zap,
  Globe
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const involvementPaths = [
  {
    title: "Volunteer",
    description: "Join our core team of youth leaders in executing grassroots programs across sports, health, and ecology.",
    icon: <Users className="h-8 w-8" />,
    cta: "Become a Volunteer",
    link: "/contact?type=volunteer",
    accent: "bg-tertiary/10 text-tertiary"
  },
  {
    title: "Partner",
    description: "Align your organization with our mission to scale institutional impact and vocational training labs.",
    icon: <Handshake className="h-8 w-8" />,
    cta: "Form a Partnership",
    link: "/contact?type=partner",
    accent: "bg-primary/5 text-primary"
  },
  {
    title: "Donate",
    description: "Your financial contributions directly fund equipment, saplings, and vocational lab infrastructure.",
    icon: <Gift className="h-8 w-8" />,
    cta: "Support Our Mission",
    link: "/contact?type=donate",
    accent: "bg-secondary/10 text-secondary"
  }
]

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-background pt-32 lg:pt-48 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 lg:px-16 mb-32">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-end"
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
              Take Action
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary" 
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              JOIN THE <br/> 
              <span className="text-tertiary font-serif italic lowercase font-light tracking-tight opacity-80">collective</span> <br/>
              MOVEMENT.
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
            <p className="text-xl text-primary/60 font-medium leading-relaxed italic border-l-4 border-tertiary/20 pl-8">
              True transformation requires more than vision—it requires your active presence, your resources, and your voice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INVOLVEMENT PATHS */}
      <section className="px-6 md:px-12 lg:px-16 mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementPaths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-surface-low border border-primary/5 p-12 hover:border-tertiary transition-all duration-500 shadow-premium flex flex-col justify-between min-h-[500px] rounded-sm"
            >
              <div className="space-y-12">
                <div className={`h-20 w-20 flex items-center justify-center rounded-sm ${path.accent}`}>
                  {path.icon}
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-primary group-hover:text-tertiary transition-colors">{path.title}</h3>
                  <p className="text-lg text-primary/60 font-medium leading-relaxed italic">
                    {path.description}
                  </p>
                </div>
              </div>
              
              <Link href={path.link} className="mt-16 w-full block">
                <Button 
                  variant="outline"
                  className="w-full h-auto py-6 px-6 md:px-8 text-base md:text-lg font-black uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-500 group/btn rounded-sm shadow-[4px_4px_0px_0px_rgba(27,67,50,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-4 whitespace-normal text-center"
                >
                  <span>{path.cta}</span>
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 shrink-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE "WHY" SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-32 bg-primary text-on-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <h2 className="font-heading font-black tracking-tight uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl text-on-primary">
              RADICAL <br/> 
              <span className="text-tertiary italic serif normal-case">Change.</span>
            </h2>
            <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-on-primary/20 pl-8 text-on-primary/80">
              We don't believe in "charity." We believe in deep, systemic investments into the untapped potential of Northeast India's youth.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-on-primary/10">
               <div>
                  <p className="text-4xl font-black text-tertiary leading-none mb-4">100%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-on-primary/40 leading-relaxed">Direct Allocation <br/> to Programs</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-on-primary leading-none mb-4">Grassroots</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-on-primary/40 leading-relaxed">Community Led <br/> Leadership</p>
               </div>
            </div>
          </div>
          
          <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-1000 border-[20px] border-on-primary/5 rounded-sm overflow-hidden group">
             <Image 
                src="/images/gallery/grassroots-1.png" 
                alt="Grassroots impact" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-on-primary/10 bg-on-primary opacity-[0.02] -skew-x-12" />
      </section>

      {/* 4. CONTACT DIRECTORY */}
      <section className="px-6 md:px-12 lg:px-16 py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl lg:text-7xl font-heading font-black tracking-tight uppercase text-primary">Direct Lines.</h2>
            <p className="text-xl text-primary/60 font-medium italic">Reach out directly to our leadership teams.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Mail />, title: "General Inquiries", val: "mijingyouthfoundation@gmail.com" },
              { icon: <Phone />, title: "Headquarters", val: "+91 84730 02148" },
              { icon: <MapPin />, title: "Location", val: "Kokrajhar, BTAD, Assam" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-12 border border-primary/5 rounded-sm space-y-8 group hover:border-tertiary transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center bg-surface-low text-primary rounded-sm group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">{item.title}</p>
                  <p className="text-xl font-bold text-primary break-words">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bkg deco elements */}
      <div className="fixed top-0 left-0 w-64 h-full bg-primary/[0.01] -skew-x-12 -translate-x-1/2 pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 p-8 rotate-90 origin-bottom-right opacity-[0.03] select-none pointer-events-none">
         <span className="text-[15vw] font-black uppercase leading-none">Act Now</span>
      </div>
    </main>
  )
}
