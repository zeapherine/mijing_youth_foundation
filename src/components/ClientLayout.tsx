"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { pageVariants } from "@/lib/animations"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { FrozenRoute } from "./FrozenRoute"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Ensure scroll to top on mount/route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1 flex flex-col"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
