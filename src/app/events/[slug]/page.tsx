import { notFound } from 'next/navigation'
import { eventsData } from '@/data/events'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = eventsData.find(e => e.slug === slug)
  if (!event) return { title: 'Event Not Found' }
  return {
    title: `${event.title} | Mijing Youth Foundation`,
    description: event.subtitle,
  }
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = eventsData.find((e) => e.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-parchment pt-32 pb-24 overflow-hidden selection:bg-terracotta/30">
      
      {/* Massive Typographic Hero */}
      <section className="px-6 md:px-12 lg:px-16 mb-24 md:mb-40">
        <div className="flex flex-col-reverse md:flex-col relative pt-12 md:pt-24 z-10">
          
          <div className="md:absolute right-0 top-0 text-right mb-12 md:mb-0">
            <span className="block text-xs md:text-sm font-bold uppercase tracking-widest text-forest/70 mb-2">Prize Pool</span>
            <span className="font-heading font-extrabold text-5xl md:text-7xl xl:text-9xl tracking-tighter text-terracotta leading-none block">
              {event.prizePool}
            </span>
          </div>

          <h1 className="text-forest uppercase tracking-tighter leading-[0.85] font-heading font-extrabold text-[clamp(4rem,12vw,10rem)] max-w-5xl relative z-20 mix-blend-multiply md:mt-24">
            {event.title}
          </h1>

          <p className="mt-8 md:mt-16 text-lg md:text-2xl font-bold uppercase tracking-[0.3em] text-forest max-w-2xl">
            {event.subtitle}
          </p>

        </div>
      </section>

      {/* Experimental Asymmetric Content */}
      <section className="px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-20">
        
        {/* Left Column: Details & Narrative */}
        <div className="lg:col-span-8 flex flex-col gap-24">
          
          <div className="relative aspect-video w-full outline outline-1 outline-forest/20 p-2 md:p-6 bg-parchment">
            <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
               <Image
                 src={event.coverImage}
                 alt={event.title}
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-forest/10 mix-blend-multiply"></div>
            </div>
            {/* Stamp Detail */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-terracotta text-parchment p-4 md:p-8 rounded-sm shadow-premium flex flex-col justify-center items-center h-24 w-24 md:h-40 md:w-40 z-30 transform hover:scale-110 transition-transform">
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Status</span>
               <span className="font-serif italic text-lg md:text-2xl leading-none">Open</span>
            </div>
          </div>

          <article className="prose prose-lg prose-headings:font-heading prose-headings:text-forest prose-p:text-forest/80 prose-p:font-serif">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-8">
              Empowering Youth Through Sports
            </h2>
            <p className="text-xl md:text-3xl leading-relaxed italic border-l-4 border-terracotta pl-8 max-w-3xl">
              {event.description}
            </p>
          </article>
          
          {/* Categories Grid - Fragmented & Brutalist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-forest/20 border border-forest/20">
             {event.categories.map((cat, idx) => (
                <div key={idx} className="bg-parchment p-8 md:p-12 hover:bg-forest hover:text-parchment transition-colors duration-500 group">
                   <h3 className="text-2xl md:text-4xl font-heading font-extrabold uppercase tracking-tighter mb-6 group-hover:text-terracotta transition-colors">
                     {cat.title}
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-baseline border-b border-current pb-2 border-opacity-20">
                        <span className="text-sm font-bold uppercase tracking-widest opacity-70">Winner</span>
                        <span className="font-serif italic text-2xl md:text-3xl">{cat.prizeMoney}</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-current pb-2 border-opacity-20">
                        <span className="text-sm font-bold uppercase tracking-widest opacity-70">Runners-up</span>
                        <span className="font-serif italic text-xl md:text-2xl">{cat.runnersUp}</span>
                      </div>
                   </div>
                   {cat.details && (
                     <ul className="mt-8 space-y-2">
                       {cat.details.map((detail, dIdx) => (
                         <li key={dIdx} className="text-xs uppercase tracking-widest font-bold flex items-center gap-3 opacity-60">
                           <span className="w-1.5 h-1.5 bg-current rounded-full"></span> {detail}
                         </li>
                       ))}
                     </ul>
                   )}
                </div>
             ))}
             
             {/* Consolation Prize Panel */}
             {event.consolationPrize && (
               <div className="bg-terracotta text-parchment p-8 md:p-12 col-span-1 md:col-span-2">
                  <h3 className="text-xl md:text-3xl font-heading font-extrabold uppercase tracking-tighter mb-4">
                     Consolation Prize Pool
                  </h3>
                  <p className="font-serif italic text-lg md:text-xl">
                    {event.consolationPrize}
                  </p>
               </div>
             )}
          </div>
        </div>

        {/* Right Column: Tactical Information (Fixed on Desktop) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 w-full border-t lg:border-t-0 lg:border-l border-forest/20 pt-12 lg:pt-0 lg:pl-12">
          
          <div className="flex flex-col gap-8">
            <div className="border border-forest/20 p-8 shadow-premium bg-surface">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest/50 mb-2">Date & Venue</h4>
              <p className="font-heading font-extrabold text-2xl md:text-3xl text-forest mb-1">{event.startDate.split(',')[0]} & {event.endDate.split(',')[0]}</p>
              <p className="font-serif italic text-lg">{event.endDate.split(',')[1]}</p>
              <div className="w-full h-px bg-forest/10 my-6"></div>
              <p className="font-bold uppercase tracking-[0.2em]">{event.venue}</p>
            </div>

            <div className="border border-forest/20 p-8 shadow-premium bg-forest text-parchment">
              <h4 className="text-xs font-bold uppercase tracking-widest text-parchment/50 mb-6">Registration Fees</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-parchment/20 pb-4">
                   <span className="font-bold uppercase tracking-widest text-sm">Men Team</span>
                   <span className="font-serif italic text-xl text-terracotta">{event.registration.menFee}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-parchment/20 pb-4">
                   <span className="font-bold uppercase tracking-widest text-sm">Women Team</span>
                   <span className="font-serif italic text-xl text-terracotta">{event.registration.womenFee}</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-terracotta text-parchment hover:bg-parchment hover:text-forest transition-colors duration-300 font-bold uppercase tracking-widest text-sm py-4 rounded-sm border-none active:scale-95 transform">
                Register Details
              </button>
            </div>

            <div className="border border-forest/20 p-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest/50 mb-4">Contact Organizers</h4>
              <ul className="space-y-4">
                {event.registration.contactNumbers.map((num, i) => (
                  <li key={i} className="font-heading font-bold text-xl">{num}</li>
                ))}
              </ul>
            </div>

            {event.collaborators && event.collaborators.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-forest/50 mb-6 border-b border-forest/10 pb-2">In Collaboration With</h4>
                <ul className="space-y-3">
                   {event.collaborators.map((collab, i) => (
                     <li key={i} className="font-serif italic text-sm text-forest/80 opacity-80">{collab}</li>
                   ))}
                </ul>
              </div>
            )}
          </div>

        </div>

      </section>

      {/* Image Gallery Narrative */}
      {event.bannerImages && event.bannerImages.length > 0 && (
        <section className="mt-32 w-full bg-forest text-parchment py-24 md:py-40">
           <div className="px-6 md:px-12 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-parchment/20 pb-8">
             <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tighter text-parchment">
               Pure Street Intensity
             </h2>
             <span className="font-serif italic text-terracotta">Gallery</span>
           </div>
           
           <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 md:pl-12 lg:pl-16 gap-4 border-l border-r border-parchment/10 py-4">
              {event.bannerImages.map((img, i) => (
                <div key={i} className="relative flex-none w-[80vw] mx-auto md:w-[60vw] lg:w-[40vw] h-[300px] md:h-[500px] snap-center grayscale hover:grayscale-0 outline outline-1 outline-parchment/20 transition-all duration-700">
                   <Image 
                     src={img}
                     alt={`Gallery image ${i + 1}`}
                     fill
                     className="object-cover pointer-events-none"
                   />
                </div>
              ))}
              <div className="flex-none w-[20vw] md:w-[10vw]"></div>
           </div>
           
           {/* Custom CSS for hide-scrollbar */}
           <style dangerouslySetInnerHTML={{__html: `
             .hide-scrollbar::-webkit-scrollbar {
                display: none;
             }
             .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
             }
           `}} />
        </section>
      )}

      {/* Return Navigation */}
      <div className="px-6 md:px-12 lg:px-16 mt-24">
        <Link href="/events" className="inline-flex items-center gap-4 group cursor-pointer">
          <span className="h-10 w-10 flex items-center justify-center rounded-sm bg-forest text-parchment font-bold transition-transform group-hover:bg-terracotta">
            ←
          </span>
          <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-forest transition-colors">
            Back to Calendar
          </span>
        </Link>
      </div>
    </main>
  )
}
