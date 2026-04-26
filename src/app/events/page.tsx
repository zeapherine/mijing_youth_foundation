import { Metadata } from 'next'
import { eventsData } from '@/data/events'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Events | Mijing Youth Foundation',
  description: 'Upcoming events and tournaments organized by the Mijing Youth Foundation.',
}

export default function EventsPage() {
  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming')
  const pastEvents = eventsData.filter(e => e.status === 'completed')

  return (
    <main className="min-h-screen bg-parchment pt-32 pb-24 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <header className="mb-24 md:mb-32">
          <h1 className="text-forest uppercase tracking-tighter leading-[0.85] mb-8 font-heading font-extrabold text-[clamp(4rem,15vw,12rem)] md:-ml-2">
            Events
            <span className="text-terracotta inline-block md:block pt-2">Calendar</span>
          </h1>
          <div className="w-full h-px bg-forest/20 mt-12 md:mt-24"></div>
        </header>

        <section className="mb-32">
          <div className="flex justify-between items-end mb-12 border-b border-forest/20 pb-4">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase text-forest tracking-tighter">
              Upcoming
            </h2>
            <p className="font-serif italic text-terracotta hidden md:block">
              {upcomingEvents.length} Actionable
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-px md:bg-forest/20">
              {upcomingEvents.map((event) => (
                <Link 
                  href={`/events/${event.slug}`} 
                  key={event.id}
                  className="md:col-span-12 group grid grid-cols-1 md:grid-cols-12 bg-parchment relative transition-colors duration-500 hover:bg-forest hover:text-parchment"
                >
                  <div className="md:col-span-4 relative h-[300px] md:h-full w-full overflow-hidden">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-50 group-hover:saturate-100"
                    />
                  </div>
                  <div className="md:col-span-8 p-8 md:p-12 lg:p-16 flex flex-col justify-between items-start outline outline-1 outline-forest/20 group-hover:outline-forest/0">
                    <div className="w-full">
                      <div className="flex justify-between items-start w-full mb-6 relative">
                        <span className="inline-block py-1 px-3 border border-current text-xs uppercase tracking-widest font-bold">
                          {event.startDate}
                        </span>
                        <span className="font-serif italic text-terracotta group-hover:text-terracotta transition-colors text-xl absolute right-0 top-0">
                          {event.prizePool}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold uppercase tracking-tighter leading-none mb-4 group-hover:text-parchment transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm md:text-base tracking-[0.2em] font-bold uppercase mb-8 opacity-70">
                        {event.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8">
                       <span className="h-10 w-10 flex items-center justify-center rounded-sm bg-terracotta text-parchment font-bold transition-transform group-hover:bg-parchment group-hover:text-forest">
                        →
                       </span>
                       <span className="text-sm md:text-md uppercase tracking-widest font-bold group-hover:text-parchment border-b border-transparent group-hover:border-parchment pb-1">
                          View Details
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center border border-forest/10 bg-parchment/50">
              <p className="font-serif italic text-moss text-xl">No upcoming events currently listed.</p>
            </div>
          )}
        </section>

        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold uppercase text-forest tracking-tighter border-b border-forest/20 pb-4 mb-12">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="border border-forest/10 p-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <h3 className="font-heading font-bold text-2xl mb-2">{event.title}</h3>
                  <p className="text-sm uppercase tracking-widest">{event.startDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
