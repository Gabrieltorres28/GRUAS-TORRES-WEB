"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Settings, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Racing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const races = [
    { date: "Abr 6, 2024", track: "Autódromo Ciudad de Oberá", position: "1°" },
    { date: "May 27, 2023", track: "Autódromo Rosamonte, Posadas", position: "4°" },
    { date: "Nov 8, 2022", track: "Autódromo Rosamonte, Posadas", position: "1°" },
    { date: "Sep 4, 2021", track: "Autódromo de Posadas", position: "5°" },
    { date: "Jul 19, 2021", track: "Autódromo Ciudad de Oberá", position: "9°" },
  ];

  const sponsors = [
    "Grúas Torres",
    "Súper Montecarlo",
    "Luis Alberto Hofbauer Asesor de Seguros",
    "ATC Construcciones",
    "Forestal Sin Fronteras",
    "Servicios Montajes"
  ];

  const carSpecs = [
    { label: "Motor", value: "V8 5.0L atmosférico" },
    { label: "Potencia", value: "420 HP" },
    { label: "Transmisión", value: "Manual de 4 marchas" },
    { label: "Peso", value: "1.200 kg" },
    { label: "0-100 km/h", value: "5.5 segundos" },
    { label: "Velocidad máxima", value: "253 km/h" },
  ];

  return (
    <section id="racing" ref={sectionRef} className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TC <span className="text-red-500">Cuatromil</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Donde nuestra pasión por las máquinas se encuentra con la adrenalina de la competencia
            </p>
          </motion.div>

          <div className="relative mb-20">
            <motion.div className="absolute inset-0 -z-10" style={{ y }}>
              <div className="h-full w-full">
                <Image
                  src="/curvaveloz.png?height=800&width=1600"
                  alt="Racing car in action"
                  fill
                  className="object-cover object-center opacity-40"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-6">Corriendo con Precisión</h3>
                <p className="text-gray-300 mb-6">
                  Armando Torres lleva la misma dedicación y conocimiento técnico de nuestra asistencia en ruta a las pistas de carrera. Su hijo, que hoy se consagra ganador con el equipo TC Cuatromil, representa la velocidad, la precisión y la confiabilidad que definen los valores de nuestra empresa.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Speed", "Precision", "Reliability", "Passion"].map((value, index) => (
                    <span key={index} className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium">
                      {value}
                    </span>
                  ))}
                </div>
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                Ver Calendario de Carreras
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/CALIDADPAPA.jpg?height=800&width=600"
                    alt="Racing car"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <p className="text-white text-lg font-bold"> Lucas Torres</p>
                    <p className="text-gray-200">TC Cuatromil</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                  <Trophy className="h-6 w-6" />
                  <p className="font-bold mt-1">2021 Campeón</p>
                </div>
              </div>
            </motion.div>
          </div>
<motion.div variants={itemVariants}>
  <Tabs defaultValue="schedule" className="w-full">
    <TabsList
      className="flex flex-wrap justify-center items-center gap-2 mb-8 w-full"
    >
      <TabsTrigger value="schedule" className="text-sm sm:text-base truncate px-2">
        Calendario
      </TabsTrigger>
      <TabsTrigger value="specs" className="text-sm sm:text-base truncate px-2">
        Especificaciones
      </TabsTrigger>
      <TabsTrigger value="sponsors" className="text-sm sm:text-base truncate px-2">
        Sponsors
      </TabsTrigger>
    </TabsList>


              <TabsContent value="schedule" className="mt-0">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-red-500" />
                    Resultados recientes de carreras
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {races.map((race, index) => (
                      <Card key={index} className="bg-gray-800 border-none">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <p className="text-gray-400 text-sm">{race.date}</p>
                            <p className="font-medium">{race.track}</p>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              race.position === "1st"
                                ? "bg-yellow-500 text-black"
                                : race.position === "2nd"
                                  ? "bg-gray-300 text-black"
                                  : race.position === "3rd"
                                    ? "bg-yellow-700 text-white"
                                    : "bg-gray-700 text-white"
                            }`}
                          >
                            {race.position}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-0">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-red-500" />
                    Especificaciones del Auto
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {carSpecs.map((spec, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">{spec.label}</p>
                        <p className="font-bold text-lg">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sponsors" className="mt-0">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Nuestros Sponsors</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {sponsors.map((sponsor, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24">
                        <p className="font-medium text-center">{sponsor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  )
}
