"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  MapPin, 
  PhoneCall, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  HandCoins,
  Puzzle,
  UserCheck
} from "lucide-react"
import { fadeInUp, staggerContainer, pageVariants, editorialEasing } from "@/lib/animations"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left: Form */}
          <div className="space-y-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-secondary text-label-sm font-bold tracking-[0.1em] uppercase">
                Connect With Us
              </span>
              <h1 className="font-heading font-black leading-[0.9] tracking-tighter uppercase" style={{ fontSize: 'var(--display-lg)' }}>
                Join the <br />
                <span className="text-primary italic">Movement.</span>
              </h1>
              <p className="text-body-lg text-foreground/60 font-medium max-w-lg leading-relaxed">
                Your energy, skills, and support can change lives. Send us a message and let&apos;s start a conversation about empowering the youth of Assam.
              </p>
            </motion.div>

            <motion.form 
              variants={fadeInUp} 
              className="space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-label-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full h-16 px-6 rounded-2xl bg-surface-low border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium placeholder:text-foreground/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full h-16 px-6 rounded-2xl bg-surface-low border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium placeholder:text-foreground/20 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-label-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Interest</label>
                <select className="w-full h-16 px-6 rounded-2xl bg-surface-low border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium appearance-none outline-none cursor-pointer">
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                  <option>Media Query</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-label-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How would you like to contribute?"
                  className="w-full p-6 rounded-2xl bg-surface-low border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium placeholder:text-foreground/20 outline-none resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-primary-gradient h-16 px-12 text-lg font-bold flex items-center gap-3">
                  Send Message <ArrowRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.form>
          </div>

          {/* Right: Info Card */}
          <motion.div 
            variants={fadeInUp}
            className="lg:sticky lg:top-40"
          >
            <div className="relative rounded-[4rem] overflow-hidden min-h-[700px] flex items-end p-8 tonal-layer-1 shadow-premium">
              {/* Map Placeholder Graphic */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
                 <svg width="100%" height="100%" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 200C150 150 250 180 300 250C350 320 450 300 500 350C550 400 650 380 700 450" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
                    <circle cx="300" cy="500" r="100" stroke="currentColor" strokeWidth="10" />
                    <path d="M50 800C100 750 200 780 250 850C300 920 400 900 450 950" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
                 </svg>
              </div>

              <div className="relative w-full glass rounded-[3rem] p-10 space-y-10 group transition-all duration-700 hover:shadow-2xl">
                <h2 className="font-heading font-black tracking-tight" style={{ fontSize: 'var(--headline-lg)' }}>Reach Out Directly</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-black text-body-lg uppercase tracking-tight">Main Office</p>
                      <p className="text-foreground/60 font-medium text-body-sm leading-relaxed max-w-[280px]">Ward No. 10, Kokrajhar Town, BTR, Assam 783370</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email Us</p>
                      <p className="text-foreground/60 font-medium">hello@mijingfoundation.org</p>
                      <p className="text-foreground/40 text-sm font-medium">partners@mijingfoundation.org</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-tertiary/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="h-6 w-6 text-tertiary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Call Center</p>
                      <p className="text-foreground/60 font-medium">+91 3661 270 000</p>
                      <p className="text-foreground/40 text-sm font-medium">Mon - Fri, 9am - 5pm IST</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,1)', color: 'white' }}
                      className="h-14 w-14 rounded-full border border-foreground/10 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sub-Section: Other Ways to Help */}
      <section className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase" style={{ fontSize: 'var(--display-sm)' }}>Other Ways to Help</motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Ambassador Program",
                desc: "Represent Mijing in your local community or university and help us raise awareness.",
                icon: UserCheck,
                color: "bg-primary/5 text-primary"
              },
              {
                title: "Direct Support",
                desc: "100% of your contributions go directly to educational materials and training programs.",
                icon: HandCoins,
                color: "bg-secondary/5 text-secondary"
              },
              {
                title: "Collaborate",
                desc: "Work with us as a technical partner or content creator to amplify our mission globally.",
                icon: Puzzle,
                color: "bg-tertiary/5 text-tertiary"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="tonal-layer-2 p-10 rounded-[3rem] space-y-6 group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              >
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-black uppercase tracking-tight break-words hyphens-auto" style={{ fontSize: 'var(--headline-md)', lineHeight: '1.2' }}>{item.title}</h3>
                <p className="text-foreground/60 font-medium text-body-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
               </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
