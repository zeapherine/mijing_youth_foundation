"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Quote, ChevronRight, Globe, Zap, Heart, TrendingUp } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"

const JOURNEY_DATA = {
  "flight-scholars": {
    label: "Vocational Excellence",
    title: "Flight Scholars: From Earth to Skies",
    subtitle: "A deep dive into how vocational aviation training is creating a new class of leaders in Northeast India.",
    heroImage: "/images/hero-unified-v2.png",
    content: [
      {
        type: "p",
        text: "In the heart of Kokrajhar, where the horizon has traditionally been defined by agricultural boundaries, a new narrative is taking flight. The Mijing Youth Foundation's Flight Scholars program was born from a radical realization: that the talent in our rural communities is not limited by their geography, but by their access to the most high-stakes industries in the world."
      },
      {
        type: "h2",
        text: "The Systemic Challenge"
      },
      {
        type: "p",
        text: "Northeast India has long faced a 'brain drain' where our brightest minds leave the region for service-sector jobs in metropolitan hubs. However, most aren't equipped for the high-end sectors like Aviation or Hospitality. The Flight Scholars program bridges this gap by providing an institutionalized training environment that matches international standards."
      },
      {
        type: "quote",
        text: "The horizon is no longer a limit; it's a beginning. My community sees me and knows that gravity is just a suggestion.",
        author: "Amara, Lead Flight Scholar"
      },
      {
        type: "h2",
        text: "Metrics of Transformation"
      },
      {
        type: "p",
        text: "To date, over 40 youth from underprivileged backgrounds have completed the foundational aviation ground-school training. 92% of our graduates have secured placements in domestic airlines or are undergoing advanced commercial pilot training. This isn't just about jobs; it's about shifting the collective subconscious of an entire generation."
      },
      {
        type: "stat",
        val: "92%",
        label: "Placement Rate"
      },
      {
        type: "p",
        text: "The journey begins with intensive digital literacy and communication workshops, followed by specialized instruction in aviation security, passenger handling, and hospitality management. We focus on the 'holistic leader'—someone who is as competent in a cockpit as they are in community welfare."
      }
    ],
    impacts: [
      { title: "Economic Independence", desc: "Average family income of participants increased by 300% within 18 months." },
      { title: "Institutional Growth", desc: "Established the region's first specialized vocational lab for aviation and hotel management." },
      { title: "Gender Equity", desc: "65% of the Flight Scholars are women from rural Bodoland." }
    ]
  },
  "green-guardian": {
    label: "Ecological Stewardship",
    title: "The Green Guardian: Reclaiming the Valley",
    subtitle: "How youth-led afforestation is building the lungs of the region while creating a sustainable green economy.",
    heroImage: "/images/impact-green-v2.png",
    content: [
      {
        type: "p",
        text: "Ecological stewardship is not just a program for the Mijing Youth Foundation; it is our existential mandate. The Green Guardian initiative was launched in 2024 to combat the rapid deforestation and soil erosion affecting the river banks of the BTR region."
      },
      {
        type: "h2",
        text: "A Youth-Led Nursery"
      },
      {
        type: "p",
        text: "The strategy was simple but massive: create natural nurseries managed entirely by local youth. These nurseries specialize in indigenous, rare flora. We don't just plant trees; we restore ecosystems. Every sapling is tracked, and every plantation site is chosen based on soil conservation data."
      },
      {
        type: "quote",
        text: "Trees don't just absorb CO2; they absorb our stress and give back hope. We are using data to heal the earth.",
        author: "Youth Environmental Lead"
      },
      {
        type: "h2",
        text: "Quantifiable Greening"
      },
      {
        type: "p",
        text: "Since inception, over 45,000 native trees have been successfully planted. But the real impact lies in the 12 active regions now protected by green belts. This has led to a significant reduction in localized flooding and has revitalized biodiversity in previously barren lands."
      },
      {
        type: "stat",
        val: "45k+",
        label: "Native Trees"
      },
      {
        type: "p",
        text: "Beyond the environment, the program has created 'Green Jobs.' Local youth are trained in sustainable agriculture and nursery management, providing them with a steady income that regenerates their own land."
      }
    ],
    impacts: [
      { title: "Flood Mitigation", desc: "Substantial reduction in soil run-off reported near plantation riverbanks." },
      { title: "Biodiversity", desc: "Return of several indigenous bird species noted in the restored belts." },
      { title: "Public Health", desc: "Improved air quality metrics in neighboring urban pockets." }
    ]
  },
  "champions-spirit": {
    label: "Athletics & Peace",
    title: "A Champion's Spirit: More Than a Game",
    subtitle: "Using high-stakes basketball tournaments to forge social integration and community resilience.",
    heroImage: "/images/actual-sp-4.jpg",
    content: [
      {
        type: "p",
        text: "At the Mijing Youth Foundation, sports are the ultimate equalizer. We recognize that the basketball court is a place where caste, religion, and socio-economic status disappear. The 'Champion's Spirit' isn't about the scoreboard; it's about the discipline and peace-building that happens between the whistles."
      },
      {
        type: "h2",
        text: "The 3x3 Revolution"
      },
      {
        type: "p",
        text: "Starting from local village matches, we have scaled to organize the 'All Northeast Open 3x3' and '5x5 Men & Women Open Tournaments.' These events provide high-quality equipment, professional coaching, and national-level exposure to athletes who previously had no platform."
      },
      {
        type: "quote",
        text: "Today, he leads the National Youth Relay Team, proving that speed is nothing without the endurance of the soul.",
        author: "Coach Boro"
      },
      {
        type: "h2",
        text: "Systemic Integration"
      },
      {
        type: "p",
        text: "Our leagues are deliberately designed to mix teams from different districts. This has led to an unprecedented level of social integration. In areas previously touched by tension, the brotherhood formed on the court has become a primary deterrent for domestic intolerance."
      },
      {
        type: "stat",
        val: "150+",
        label: "Active Leaders"
      },
      {
        type: "p",
        text: "We believe a healthy body houses a resilient mind. By keeping the youth engaged in rigorous athletics, we steer them away from destructive paths and towards a future of discipline and excellence."
      }
    ],
    impacts: [
      { title: "Social Peace", desc: "Observed decrease in youth delinquency in regions with active leagues." },
      { title: "National Platform", desc: "Over 15 players scouted for state-level and university-level athletic scholarships." },
      { title: "Community Wellness", desc: "Free health check-ups integrated into all major tournament events." }
    ]
  }
}

export default function JourneyPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  
  // Prevent brief flash of 'Not Found' during route transitions
  if (!slug) return <div className="min-h-screen bg-parchment" />

  const data = JOURNEY_DATA[slug as keyof typeof JOURNEY_DATA]

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-heading font-black uppercase text-forest">Journey Not Found</h1>
        <Link href="/impact">
          <Button variant="outline" className="border-forest/20 text-forest">Back to Impact</Button>
        </Link>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* 1. EDITORIAL HEADER */}
      <header className="relative pt-32 lg:pt-48 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link href="/impact" className="h-12 w-12 rounded-sm border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-parchment transition-all">
               <ArrowLeft size={20} />
            </Link>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-terracotta">{data.label}</span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black leading-[0.85] tracking-tighter text-forest uppercase"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              {data.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl text-forest/50 font-medium leading-relaxed max-w-2xl italic border-l-4 border-terracotta/20 pl-8">
              {data.subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Large Bkg Number Decro */}
        <div className="absolute top-0 right-0 p-12 mix-blend-multiply opacity-[0.03] select-none pointer-events-none">
           <span className="text-[30vw] font-black leading-none uppercase">Impact</span>
        </div>
      </header>

      {/* 2. HERO IMAGE */}
      <section className="mt-24 px-6 md:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: editorialEasing }}
          className="max-w-7xl mx-auto relative aspect-[21/9] rounded-sm overflow-hidden shadow-2xl grayscale"
        >
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill 
            className="object-cover" 
            priority
          />
        </motion.div>
      </section>

      {/* 3. MAIN CONTENT (EDITORIAL) */}
      <section className="mt-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Column: Detailed Narrative */}
          <div className="lg:col-span-8 space-y-16">
            {data.content.map((item, i) => {
              if (item.type === "p") return <p key={i} className="text-xl text-forest/70 leading-relaxed font-medium">{item.text}</p>
              if (item.type === "h2") return <h2 key={i} className="text-5xl font-heading font-black uppercase text-forest tracking-tight pt-12">{item.text}</h2>
              if (item.type === "quote") return (
                <div key={i} className="p-12 bg-forest text-parchment rounded-sm space-y-8 relative overflow-hidden">
                   <Quote className="h-16 w-16 text-terracotta/40 absolute top-4 left-4" />
                   <p className="text-3xl md:text-4xl font-serif italic relative z-10 leading-snug">&ldquo;{item.text}&rdquo;</p>
                   <p className="text-xs font-black uppercase tracking-[0.4em] text-parchment/40 relative z-10">— {item.author}</p>
                </div>
              )
              if (item.type === "stat") return (
                <div key={i} className="py-16 border-y border-forest/10 flex flex-col items-center text-center space-y-4">
                   <p className="text-8xl md:text-[10rem] font-heading font-black text-terracotta leading-none">{item.val}</p>
                   <p className="text-sm font-black uppercase tracking-[0.6em] text-forest/40">{item.label}</p>
                </div>
              )
              return null
            })}
          </div>

          {/* Right Column: Key Impacts & Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 space-y-12">
              
              {/* Impacts List */}
              <div className="p-10 bg-forest/5 border border-forest/10 rounded-sm space-y-12">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-forest flex items-center gap-4">
                  <span className="w-8 h-0.5 bg-terracotta" />
                  Key Impacts
                </h3>
                <div className="space-y-10">
                  {data.impacts.map((imp, i) => (
                    <div key={i} className="space-y-4">
                       <p className="font-heading font-black text-2xl uppercase tracking-tight text-forest">{imp.title}</p>
                       <p className="text-sm text-forest/60 font-bold leading-relaxed">{imp.desc}</p>
                       <div className="h-px w-full bg-forest/5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Prompt */}
              <div className="p-10 border-2 border-forest rounded-sm space-y-8">
                 <p className="text-xl font-black uppercase tracking-tight text-forest">Be part of the next chapter.</p>
                 <Link href="/get-involved">
                    <Button size="xl" className="w-full h-16 bg-forest text-parchment rounded-sm font-black uppercase tracking-widest hover:bg-terracotta transition-colors">
                      Join Movement
                    </Button>
                 </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOT NAVIGATION */}
      <section className="mt-48 px-6 md:px-12 lg:px-16 border-t border-forest/10 pt-24">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <Link href="/impact" className="group flex items-center gap-6">
               <div className="h-16 w-16 border border-forest/10 rounded-sm flex items-center justify-center transition-all group-hover:bg-forest group-hover:text-parchment">
                  <ArrowLeft size={32} />
               </div>
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-forest/40 mb-1">Return</p>
                  <p className="text-2xl font-black uppercase tracking-tighter text-forest">Impact Archives</p>
               </div>
            </Link>

            <div className="text-center md:text-right">
               <p className="text-[10px] font-black uppercase tracking-widest text-forest/40 mb-4 italic">Next Journey</p>
               <Link href={`/impact/journey/${slug === "flight-scholars" ? "green-guardian" : slug === "green-guardian" ? "champions-spirit" : "flight-scholars"}`} className="text-4xl lg:text-5xl font-heading font-black uppercase text-forest hover:text-terracotta transition-colors flex items-center gap-4 md:justify-end">
                  {slug === "flight-scholars" ? "Green Guardian" : slug === "green-guardian" ? "Champion's Spirit" : "Flight Scholars"}
                  <ChevronRight size={40} className="hidden md:block" />
               </Link>
            </div>
         </div>
      </section>

    </main>
  )
}
