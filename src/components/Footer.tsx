import Link from "next/link"
import { X, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0b0c0b] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
        {/* Column 1: Logo & Info */}
        <div className="space-y-6">
          <Link href="/" className="text-xl font-heading font-black tracking-tighter uppercase block">
            Mijing Foundation
          </Link>
          <p className="text-white/40 leading-relaxed font-medium text-xs max-w-[200px]">
            Empowering the dreams of tomorrow&apos;s leaders through education and innovation.
          </p>
        </div>

        {/* Column 2: Resources */}
        <div className="space-y-6 text-xs">
          <h4 className="font-black uppercase tracking-[0.2em] text-primary">Resources</h4>
          <ul className="space-y-4 text-white/40 font-medium tracking-wide">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 3: Engagement */}
        <div className="space-y-6 text-xs">
          <h4 className="font-black uppercase tracking-[0.2em] text-primary">Engagement</h4>
          <ul className="space-y-4 text-white/40 font-medium tracking-wide">
            <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer Portal</Link></li>
            <li><Link href="/annual-reports" className="hover:text-primary transition-colors">Annual Reports</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="space-y-6 text-xs">
          <h4 className="font-black uppercase tracking-[0.2em] text-primary">Connect</h4>
          <div className="space-y-4 text-white/40 font-medium tracking-wide">
            <p>Kokrajhar, BTC, Assam</p>
            <p className="hover:text-primary transition-colors cursor-pointer">contact@mijingfoundation.org</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-[10px] text-white/20 font-medium">
          © 2024 Mijing Youth Empowerment Foundation. All rights reserved.
        </p>
        <div className="flex gap-6 items-center">
          <Link href="#" className="text-white/30 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-white/30 hover:text-white transition-colors">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-white/30 hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
