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
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-parchment text-forest">
      
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
              <span className="inline-block px-4 py-1.5 rounded-sm bg-forest/5 border border-forest/10 text-forest text-xs font-bold tracking-[0.3em] uppercase">
                Connect With Us
              </span>
              <h1 className="font-heading font-black leading-[0.9] tracking-tighter uppercase text-forest" style={{ fontSize: 'var(--display-lg)' }}>
                Join the <br />
                <span className="text-terracotta italic">Movement.</span>
              </h1>
              <p className="text-body-lg text-forest/60 font-medium max-w-lg leading-relaxed">
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
                  <label className="text-xs font-bold uppercase tracking-widest text-forest/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full h-16 px-6 rounded-sm bg-forest/5 border border-forest/10 focus:border-terracotta/30 transition-all font-medium placeholder:text-forest/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-forest/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full h-16 px-6 rounded-sm bg-forest/5 border border-forest/10 focus:border-terracotta/30 transition-all font-medium placeholder:text-forest/20 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-forest/40 ml-1">Interest</label>
                <select className="w-full h-16 px-6 rounded-sm bg-forest/5 border border-forest/10 focus:border-terracotta/30 transition-all font-medium appearance-none outline-none cursor-pointer">
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                  <option>Media Query</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-forest/40 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How would you like to contribute?"
                  className="w-full p-6 rounded-sm bg-forest/5 border border-forest/10 focus:border-terracotta/30 transition-all font-medium placeholder:text-forest/20 outline-none resize-none"
                />
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-16 bg-forest text-parchment rounded-sm text-lg font-black uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-forest/90 transition-all">
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
            <div className="relative rounded-sm overflow-hidden min-h-[700px] flex items-end p-8 bg-forest border border-forest/5 shadow-2xl">
              <div className="relative w-full bg-parchment rounded-sm p-10 space-y-10 group transition-all duration-700">
                <h2 className="font-heading font-black tracking-tight text-forest uppercase leading-[0.9]" style={{ fontSize: 'var(--headline-lg)' }}>Reach Out Directly</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-sm bg-forest/5 flex items-center justify-center shrink-0 border border-forest/10">
                      <MapPin className="h-6 w-6 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-black text-body-lg uppercase tracking-tight text-forest">Main Office</p>
                      <p className="text-forest/60 font-medium text-body-sm leading-relaxed max-w-[280px]">Ward No. 10, Kokrajhar Town, BTR, Assam 783370</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-sm bg-forest/5 flex items-center justify-center shrink-0 border border-forest/10">
                      <Mail className="h-6 w-6 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-black text-body-lg uppercase tracking-tight text-forest">Email Us</p>
                      <p className="text-forest/60 font-medium">hello@mijingfoundation.org</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-sm bg-forest/5 flex items-center justify-center shrink-0 border border-forest/10">
                      <PhoneCall className="h-6 w-6 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-black text-body-lg uppercase tracking-tight text-forest">Call Center</p>
                      <p className="text-forest/60 font-medium">+91 3661 270 000</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -4, backgroundColor: 'var(--terracotta)', color: 'white' }}
                      className="h-14 w-14 rounded-sm border border-forest/10 bg-forest/5 flex items-center justify-center transition-all text-forest"
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
      <section className="py-32 bg-parchment-deep border-t border-forest/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase text-forest" style={{ fontSize: 'var(--display-sm)' }}>Other Ways to Help</motion.h2>
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
                icon: UserCheck
              },
              {
                title: "Direct Support",
                desc: "100% of your contributions go directly to educational materials and training programs.",
                icon: HandCoins
              },
              {
                title: "Collaborate",
                desc: "Work with us as a technical partner or content creator to amplify our mission globally.",
                icon: Puzzle
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-parchment p-10 rounded-sm border border-forest/5 space-y-6 group cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                <div className={`h-16 w-16 rounded-sm flex items-center justify-center shrink-0 bg-forest/5 border border-forest/10 text-terracotta`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-black uppercase tracking-tight text-forest leading-[1.2]" style={{ fontSize: 'var(--headline-md)' }}>{item.title}</h3>
                <p className="text-forest/60 font-medium text-body-sm leading-relaxed">
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
