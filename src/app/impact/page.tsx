import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ImpactHero } from "@/components/impact/ImpactHero"
import { ImpactFeature } from "@/components/impact/ImpactFeature"
import { ImpactStories } from "@/components/impact/ImpactStories"
import { ImpactCTA } from "@/components/impact/ImpactCTA"

export default function Impact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Editorial Hero Section */}
      <ImpactHero />

      {/* Primary Feature Story */}
      <ImpactFeature />

      {/* Metrics / Tonal Bridge */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-12">
           <div className="space-y-4 max-w-xl">
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Our Cumulative Impact</h2>
              <p className="text-body-lg text-foreground/50 font-medium italic">&ldquo;The light we give to others eventually shines back on us.&rdquo;</p>
           </div>
           
           <div className="flex gap-16 md:gap-24">
              <div className="space-y-2">
                 <p className="font-heading font-black text-primary leading-none" style={{ fontSize: 'var(--display-xl)' }}>12k+</p>
                 <p className="text-body-xs font-bold uppercase tracking-[0.3em] text-foreground/40">Lives Impacted</p>
              </div>
              <div className="space-y-2">
                 <p className="font-heading font-black text-secondary leading-none" style={{ fontSize: 'var(--display-xl)' }}>45k+</p>
                 <p className="text-body-xs font-bold uppercase tracking-[0.3em] text-foreground/40">Trees Planted</p>
              </div>
           </div>
        </div>
      </section>

      {/* Individual Story Sections */}
      <ImpactStories />

      {/* Final CTA Section */}
      <ImpactCTA />

      <Footer />
    </main>
  )
}
