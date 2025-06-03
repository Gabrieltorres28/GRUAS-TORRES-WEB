"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Clock, MapPin, Truck, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

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

  const services = [
    {
      title: "Traslado de Maquinaria Pesada",
      description:
        "Especialistas en el movimiento de equipos industriales, maquinaria pesada y componentes voluminosos, garantizando eficiencia y seguridad en cada operación.",
      icon: <Truck className="h-10 w-10 text-red-500 dark:text-red-500" />,
    },
    {
      title: "Cobertura Geográfica Amplia",
      description:
        "Operamos en toda la región metropolitana y áreas circundantes, ofreciendo tiempos de respuesta ágiles y adaptados a las necesidades de cada proyecto.",
      icon: <MapPin className="h-10 w-10 text-red-500 dark:text-red-500" />,
    },
    {
      title: "Ejecución Rápida y Precisa",
      description:
        "Nuestros equipos están entrenados para realizar movimientos complejos con rapidez y precisión, minimizando tiempos de inactividad y optimizando la productividad.",
      icon: <Clock className="h-10 w-10 text-red-500 dark:text-red-500" />,
    },
    {
      title: "Trabajo Seguro y Certificado",
      description:
        "Cumplimos con todas las normativas vigentes en seguridad laboral para trabajos de alto riesgo, asegurando un entorno controlado y libre de accidentes.",
      icon: <Shield className="h-10 w-10 text-red-500 dark:text-red-500" />,
    },
  ];
  


  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Nuestros<span className="text-red-500 dark:text-red-500">Servicios</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Operaciones de grúa industrial rápidas, seguras y alineadas con los más altos estándares del sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {service.icon}
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Nuestra Flota</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mantenemos una flota diversa de grúas y equipos para manejar cualquier situación:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Grúas de Plataforma Elevada:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                    Ideales para el transporte seguro y eficiente de cargas pesadas, maquinaria y equipos sin comprometer su integridad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Grúas Hidráulicas de Elevación:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                    Perfectas para la manipulación y traslado de maquinaria pesada y equipos en espacios reducidos, permitiendo una extracción rápida y segura.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Grúas Pesadas para Carga y Transporte:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                    Capaces de levantar y transportar maquinaria industrial pesada, equipos de gran tonelaje y estructuras de construcción. Especializadas en el manejo de cargas grandes y complejas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/flota.png?height=800&width=600"
                alt="Tow truck fleet"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-bold">Flota Moderna</p>
                  <p className="text-gray-200">Equipos de grúas de última tecnología, preparados para realizar movimientos pesados y servicios industriales con máxima eficiencia y seguridad.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
