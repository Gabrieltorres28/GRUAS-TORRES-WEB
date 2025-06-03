"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover brightness-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/fondovideo.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-end h-full pb-20 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          GRÚAS TORRES
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl md:text-3xl font-medium text-white tracking-wide"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Pasión por las máquinas
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Asistencia profesional en la industria y con precisión automovilística.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              Solicitar acceso
              <PhoneCall className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Link Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="#about">
              <Button
                variant="outline"
                size="lg"
                className={`px-8 py-6 text-lg border transition-colors duration-300 ${
                  isDark
                    ? "border-white text-white hover:bg-white/10"
                    : "border-black text-black hover:bg-black/10"
                }`}
              >
                Ver más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
